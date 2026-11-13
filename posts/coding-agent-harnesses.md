---
title: "The coding agent is only part of the system"
description: "Build a reliable loop around an AI coder: small tasks, persistent state, and real checks."
date: "2026-11-13"
category: "Coding"
image: 5
draft: false
---

A coding model can write a convincing patch and still miss the user’s actual workflow. The environment around it determines what it can inspect, how it runs software, and what counts as finished. Anthropic’s 2026 harness-design work emphasizes evaluation criteria and structured handoffs for long-running development.

## What matters in practice

A practical harness is the supporting workflow: a clear task list, access to the repository, commands to build and test, and a record of what happened. For a small app, keep this simple. One file can record unfinished features and another can document the commands that work. The goal is to make the next action obvious and the completion claim reviewable.

## A workflow to try

1. **Define a user journey.** Describe a real action such as creating a draft and reopening it after a refresh.

2. **Implement one slice.** Keep changes small enough to review and diagnose before expanding scope.

3. **Close with evidence.** Save test results and identify any behavior that was not verified.

## Try this prompt

```text
Implement [one user journey] in this repository. First inspect
existing instructions and commands. Make a small plan, implement
the change, and run the relevant checks. Verify the user-facing
result. Record what changed, what passed, and what remains blocked.
Do not mark the task complete from code generation alone.
```

## Before you rely on the result

An agent may pass a test that does not exercise the feature you care about. Include one manual or browser check of the user journey. Avoid granting broad production access simply to make the development loop easier.

## Sources and further reading

- [Harness design for long-running application development](https://www.anthropic.com/research/harness-design-long-running-apps)

*Published November 13, 2026. Product availability and documentation can change. The workflow and prompt above are Latent Ink editorial examples, not vendor performance claims.*
