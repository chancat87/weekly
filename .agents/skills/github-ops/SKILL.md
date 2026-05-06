---
name: github-ops
description: Use this skill for Weekly GitHub issue, PR, and publishing operations via gh CLI.
---

# Weekly GitHub Operations

Use this skill when working with GitHub issues, pull requests, or publishing tasks for Weekly.

## Golden Rule

Always inspect live GitHub state with `gh` before acting.

## Common Commands

```bash
gh issue view 123
gh issue list --state open
gh pr view 123
gh pr diff 123
gh run list --limit 10
gh run list --workflow=build.yml --limit 10
gh run list --workflow=translate-posts.yml --limit 10
```

## Safety Rules

- Do not comment on issues or PRs without explicit maintainer approval.
- Do not delete or rewrite existing posts unless the task explicitly asks.
- Draft replies in the same language as the thread.
- Run `pnpm build` before release or deployment-adjacent changes.
- Translation work depends on `GROK_API_KEY` and writes missing files under `src/pages/en/posts/`; inspect the diff before proposing publication.

## Output

Summarize the GitHub state, the proposed action, and any verification command that should run before publishing.
