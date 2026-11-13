---
title: "Reasoning models need a clear task, too"
description: "Why explicit constraints and checkable outcomes matter more than elaborate thinking instructions."
date: "2026-11-13"
category: "Prompting"
image: 4
draft: false
---

A reasoning model still needs to know what you want. Long theatrical instructions can obscure the actual task: the decision to make, the constraints to respect, and the evidence available. OpenAI’s reasoning guidance recommends straightforward prompts and notes that requests to “think step by step” may not improve results.

## What matters in practice

Suppose you are choosing between two software architectures. Rather than demanding a long internal monologue, ask for a concise recommendation, assumptions, tradeoffs, and a test that could disprove it. That is information a reviewer can evaluate. You do not need access to hidden reasoning to check whether a proposed design satisfies a latency requirement or handles a failed dependency.

## A workflow to try

1. **State the decision.** Name the alternatives and the outcome you need, rather than merely naming a broad topic.

2. **List hard constraints.** Distinguish requirements from preferences so the assistant knows which tradeoffs are allowed.

3. **Ask for verifiable support.** Request calculations, source references, or tests appropriate to the task.

## Try this prompt

```text
Recommend an approach for [decision]. Requirements: [constraints].
Evidence available: [inputs]. Return a concise recommendation,
key assumptions, tradeoffs, and checks I can run independently.
If the inputs cannot support a decision, name the missing information.
Do not invent measurements or claim tests were executed.
```

## Before you rely on the result

A tidy explanation is not proof of correctness. Recompute important numbers and run proposed tests. Judge the answer by the outcome it supports, not by the apparent complexity or length of the explanation.

## Sources and further reading

- [Reasoning best practices](https://developers.openai.com/api/docs/guides/reasoning-best-practices)

*Published November 13, 2026. Product availability and documentation can change. The workflow and prompt above are Latent Ink editorial examples, not vendor performance claims.*
