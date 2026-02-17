// 7D Framework Agent — Checkpoint Review Script
// Called by the 7d-agent-worker.yml workflow.
// Reads issue context, builds an LLM prompt, calls Anthropic API,
// and returns a structured assessment.
//
// Usage: node agent-prompts.js
// Environment variables: GITHUB_TOKEN, ANTHROPIC_API_KEY, ISSUE_NUMBER,
//   REPO_OWNER, REPO_NAME, AGENT_MODEL, AGENT_CONFIDENCE_AUTO, AGENT_CONFIDENCE_APPROVE

const https = require('https');
const fs = require('fs');
const path = require('path');

// --- Configuration ---

const config = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'phase-config.json'), 'utf8')
);

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const ISSUE_NUMBER = process.env.ISSUE_NUMBER;
const REPO_OWNER = process.env.REPO_OWNER;
const REPO_NAME = process.env.REPO_NAME;
const MODEL = process.env.AGENT_MODEL || config.defaults.model;
const CONFIDENCE_AUTO = parseInt(process.env.AGENT_CONFIDENCE_AUTO || config.defaults.confidence_threshold_auto);
const CONFIDENCE_APPROVE = parseInt(process.env.AGENT_CONFIDENCE_APPROVE || config.defaults.confidence_threshold_approve);

// --- Phase Prompts ---
// Embedded from framework/AGENT-GUIDANCE.md so the workflow doesn't need to parse markdown.

const MASTER_CONTEXT = `You are operating within the 7D Software Development Framework as an automated checkpoint reviewer.

## Core Rules (NON-NEGOTIABLE)
1. NO SKIPPING PHASES: Every work item must pass through its required phases in order.
2. CHECKPOINT GATES: Each phase ends with a checkpoint. You must complete ALL exit criteria.
3. DOCUMENT EVERYTHING: All decisions and findings must be recorded.
4. Be honest in your assessment. Do not inflate confidence.

## Your Constraints
- You may ONLY assess activities appropriate for the current phase
- You MUST flag any concerns that could affect later phases
- You MUST provide a confidence score (0-100) for your assessment`;

const PHASE_PROMPTS = {
  define: {
    context: `You are reviewing the DEFINE phase. Evaluate whether the problem is clearly articulated.

Check for:
- Problem statement is written and specific
- Affected users/stakeholders are identified
- Success criteria are measurable
- Scope (in/out) is documented`,
    checkpoint: `Checkpoint CP-1: Problem Approved

Validate:
- Problem Clarity: Can you explain the problem in one sentence? Is it specific?
- User Impact: Are affected users identified? Is impact quantifiable?
- Success Criteria: Are metrics measurable with numbers? Can we actually measure them?
- Scope: Is it clear what's IN and OUT of scope? Is scope achievable?`
  },
  design: {
    context: `You are reviewing the DESIGN phase. Evaluate whether the solution architecture is sound.

Check for:
- Multiple options considered (minimum 2) with tradeoffs
- Recommended approach selected with rationale
- Technical architecture documented
- Key risks identified`,
    checkpoint: `Checkpoint CP-2: Solution Approved

Validate:
- Solution Exploration: Were at least 2 approaches considered with pros/cons?
- Technical Soundness: Does architecture follow patterns? Are interfaces well-defined?
- Risk Identification: Are technical risks identified? Unknowns flagged for discovery?
- Alignment: Does this design solve the defined problem within scope?`
  },
  discover: {
    context: `You are reviewing the DISCOVER phase. Evaluate whether assumptions have been validated.

Check for:
- Key assumptions validated (or invalidated) with evidence
- Prototypes/spikes completed for risky areas
- Findings documented
- Design updated based on learnings`,
    checkpoint: `Checkpoint CP-3: Validated Approach

Validate:
- Assumption Testing: Were critical assumptions tested (not just discussed)? Is there evidence?
- Prototype Quality: Did prototypes test risky parts? Are findings documented?
- Risk Resolution: Are remaining risks acceptable with mitigation plans?
- Design Updates: Has design been updated based on findings?`
  },
  document: {
    context: `You are reviewing the DOCUMENT phase. Evaluate whether the specification is implementation-ready.

Check for:
- Implementation spec is complete and unambiguous
- All user stories have testable acceptance criteria
- Dependencies identified
- A developer unfamiliar with context could implement from this doc`,
    checkpoint: `Checkpoint CP-4: Spec Complete

Validate:
- Completeness: All requirements documented? Edge cases covered? Error scenarios defined?
- Acceptance Criteria: Every criterion testable (Given/When/Then)? Specific, not vague?
- Implementation Readiness: Could a new developer implement from this? Technical details sufficient?
- Traceability: Spec traces back to original problem? Design decisions referenced?`
  },
  diagnose: {
    context: `You are reviewing the DIAGNOSE phase. Evaluate whether the task breakdown is ready for development.

Check for:
- All tasks created and sized (no task larger than L / 3-5 days)
- Dependencies mapped
- Implementation order is logical
- Estimates provided`,
    checkpoint: `Checkpoint CP-5: Tasks Approved

Validate:
- Task Granularity: Every task completable in 1-2 days? Specific and actionable?
- Dependency Mapping: Dependencies identified? Logical implementation order? No circular deps?
- Estimation Quality: Every task estimated? Estimates realistic? Total effort reasonable?
- Codebase Alignment: Existing patterns identified? Tasks follow conventions?`
  },
  develop: {
    context: `You are reviewing the DEVELOP phase. Evaluate whether the code is complete and ready for deployment.

Check for:
- All tasks implemented
- All acceptance criteria met
- Tests written and passing
- Code review complete`,
    checkpoint: `Checkpoint CP-6: Code Complete

Validate:
- Implementation: All tasks complete? All acceptance criteria met? All PRs merged?
- Code Quality: Tests pass? Coverage adequate? Follows conventions? Code review done?
- Documentation: Code documented? API changes documented? README updated?
- No Blockers: No open bugs? No unresolved concerns? Nothing blocking deployment?`
  },
  deploy: {
    context: `You are reviewing the DEPLOY phase. Evaluate whether the release is successful and stable.

Check for:
- Deployment to all target environments complete
- Smoke tests passing
- Monitoring shows healthy metrics
- Release notes published`,
    checkpoint: `Checkpoint CP-7: Release Approved

Validate:
- Deployment: Successful? All environments? Followed the plan?
- Production Health: Smoke tests passing? Error rate normal? Performance acceptable?
- Communication: Release notes published? Stakeholders notified? Docs updated?
- Rollback Readiness: Plan documented? Tested? Can rollback quickly?`
  }
};

// --- GitHub API helpers ---

function githubRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: endpoint,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'User-Agent': '7d-agent-worker',
        'Accept': 'application/vnd.github+json'
      }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`GitHub API ${res.statusCode}: ${data}`));
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

// --- Anthropic API helper ---

function callAnthropic(systemPrompt, userMessage) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: MODEL,
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMessage }]
    });

    const options = {
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(body)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Anthropic API ${res.statusCode}: ${data}`));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// --- Main ---

async function main() {
  // 1. Fetch issue
  const issue = await githubRequest(
    `/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}`
  );

  // 2. Fetch comments
  const comments = await githubRequest(
    `/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}/comments?per_page=100`
  );

  // 3. Determine current phase from labels
  const labels = issue.labels.map(l => l.name);
  const currentPhase = config.phase_sequence.find(phase => labels.includes(phase));

  if (!currentPhase) {
    console.log(JSON.stringify({
      error: true,
      message: 'No phase label found on issue'
    }));
    process.exit(1);
  }

  const phasePrompt = PHASE_PROMPTS[currentPhase];
  const checkpoint = config.checkpoint_map[currentPhase];
  const nextPhase = config.phase_transitions[currentPhase];
  const canAutoAdvance = config.auto_advance_phases.includes(currentPhase);

  // 4. Build context
  const issueContext = [
    `# Issue #${ISSUE_NUMBER}: ${issue.title}`,
    '',
    '## Issue Body',
    issue.body || '(empty)',
    '',
    '## Comments',
    ...comments.map((c, i) =>
      `### Comment ${i + 1} by ${c.user.login}:\n${c.body}`
    )
  ].join('\n');

  // 5. Build prompts
  const systemPrompt = [
    MASTER_CONTEXT,
    '',
    `## Current Phase: ${currentPhase.toUpperCase()}`,
    `## Checkpoint: ${checkpoint.id} — ${checkpoint.name}`,
    '',
    phasePrompt.context
  ].join('\n');

  const userMessage = [
    issueContext,
    '',
    '---',
    '',
    phasePrompt.checkpoint,
    '',
    'After your assessment, you MUST end your response with a JSON block in this exact format:',
    '```json',
    '{',
    '  "verdict": "APPROVE" or "REJECT",',
    '  "confidence": <number 0-100>,',
    '  "summary": "<one sentence summary>",',
    '  "concerns": ["<concern 1>", "<concern 2>"] or []',
    '}',
    '```'
  ].join('\n');

  // 6. Call LLM
  const response = await callAnthropic(systemPrompt, userMessage);
  const assistantMessage = response.content[0].text;

  // 7. Parse confidence from JSON block
  let verdict = 'REJECT';
  let confidence = 0;
  let summary = '';
  let concerns = [];

  const jsonMatch = assistantMessage.match(/```json\s*\n([\s\S]*?)\n```/);
  if (jsonMatch) {
    try {
      const parsed = JSON.parse(jsonMatch[1]);
      verdict = parsed.verdict || 'REJECT';
      confidence = parseInt(parsed.confidence) || 0;
      summary = parsed.summary || '';
      concerns = parsed.concerns || [];
    } catch (e) {
      // If JSON parsing fails, default to REJECT with low confidence
      verdict = 'REJECT';
      confidence = 0;
      summary = 'Failed to parse agent response';
      concerns = ['Agent response did not contain valid JSON assessment'];
    }
  }

  // 8. Determine action
  let action;
  if (verdict === 'REJECT' || confidence < CONFIDENCE_APPROVE) {
    action = 'reject';
  } else if (confidence >= CONFIDENCE_AUTO && canAutoAdvance) {
    action = 'auto_advance';
  } else {
    action = 'approve_flag_human';
  }

  // 9. Output result
  const result = {
    phase: currentPhase,
    checkpoint: checkpoint.id,
    checkpoint_name: checkpoint.name,
    next_phase: nextPhase,
    can_auto_advance: canAutoAdvance,
    verdict,
    confidence,
    summary,
    concerns,
    action,
    assessment: assistantMessage,
    thresholds: {
      auto: CONFIDENCE_AUTO,
      approve: CONFIDENCE_APPROVE
    }
  };

  console.log(JSON.stringify(result));
}

main().catch(err => {
  console.log(JSON.stringify({
    error: true,
    message: err.message
  }));
  process.exit(1);
});
