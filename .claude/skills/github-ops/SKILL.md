---
name: github-ops
description: Use this skill for GitHub issue, PR, and release operations for Weekly blog via gh CLI.
---

# GitHub Operations Skill

Use this skill when working with GitHub issues, PRs, and content publishing for Weekly.

## Golden Rule

**ALWAYS use `gh` CLI** for GitHub operations.

## Content Publishing Workflow

```bash
# Build and verify
pnpm build

# Check for broken links
pnpm dev &
# Then test locally
```

## Issue Handling

```bash
# View issue
gh issue view 123

# List issues
gh issue list --state open

# NEVER comment without explicit user request
```

## Safety Rules

1. **NEVER** delete existing weekly posts
2. **NEVER** comment on issues without explicit request
3. **ALWAYS** test with `pnpm dev` before pushing
4. **ALWAYS** prepare responses for user review first

## Issue Language

Draft replies in the same language as the issue author (Chinese or English).
