---
title: "Your first AI evaluation set can start small"
description: "Turn real failures into repeatable checks before you change the model or prompt."
date: "2026-11-13"
category: "Coding"
image: 12
draft: false
---

A few impressive answers can hide a weak workflow. An evaluation set gives you fixed examples to rerun when you edit instructions, retrieval, tools, or models. You do not need a public benchmark to begin; you need cases that represent the work your users actually do.

## What matters in practice

Anthropic’s agent-evaluation guide distinguishes tasks, trials, and graders, and highlights the complexity introduced when agents change state. For a support assistant, a useful starting set might include an ordinary question, an ambiguous request, a missing policy, and an unauthorized action. Define the expected behavior before looking at the model’s new output.

## A workflow to try

1. **Collect representative cases.** Use sanitized real examples and retain the context needed to reproduce the failure.

2. **Write observable criteria.** Check factual support, required fields, permission boundaries, and the final artifact.

3. **Repeat variable tasks.** Run more than one trial when outputs vary, and inspect failure patterns rather than just an average.

## Try this prompt

```text
Design an evaluation set for [AI workflow]. Propose normal,
ambiguous, missing-information, and permission-boundary cases.
For each, specify input, expected behavior, unacceptable behavior,
and a check that can verify it. Keep the grading criteria independent
of the particular wording of one model response.
```

## Before you rely on the result

An AI grader can help organize feedback, but it can also reward a persuasive answer that is wrong. Use deterministic checks where possible and have a person inspect meaningful samples. Keep a held-out set so prompt tuning does not merely memorize your examples.

## Sources and further reading

- [Demystifying evals for AI agents](https://www.anthropic.com/research/demystifying-evals-for-ai-agents)

*Published November 13, 2026. Product availability and documentation can change. The workflow and prompt above are Latent Ink editorial examples, not vendor performance claims.*
