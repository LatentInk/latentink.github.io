---
title: "Debug with evidence, not guesswork"
description: "Give your AI coding assistant the context it needs to investigate a bug one step at a time."
date: "2026-11-13"
category: Coding
draft: false
---

## A stack trace is a clue, not the whole story

A coding assistant can suggest plausible fixes that do not match your environment. A small reproducible example helps it reason about the behavior you actually see.

Include the relevant code, the exact error, your runtime version, and the result you expected. Remove secrets and private data before sharing.

## The prompt

```text
Help me investigate this bug.

Language and runtime: [versions]
Relevant dependencies: [names and versions]
Expected behavior: [what should happen]
Actual behavior: [what happens instead]
Steps to reproduce: [numbered steps]
Code: [smallest example that reproduces the issue]
Error output: [exact error and relevant stack trace]
What I tried: [changes and their results]

List your most likely explanations, with evidence for each.
If information is missing, ask for it instead of assuming.
Suggest one small diagnostic step at a time.
Once the cause is supported by evidence, propose a minimal fix
and a regression test that fails before the fix and passes after it.
```

## Keep the loop small

Run the suggested diagnostic in a safe development environment and report the actual output. Do not accept a confident explanation as proof. If the evidence contradicts the hypothesis, ask the assistant to update its reasoning.

## Verify the fix

A useful regression test checks the behavior that broke. Also check nearby cases, such as an empty input, an unexpected type, or a missing value, when they are relevant. Review any generated command before running it.

If the assistant proposes a large rewrite for a small issue, ask which exact change fixes the failure and why. Understanding that connection is part of finishing the fix.
