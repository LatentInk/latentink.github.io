---
title: "Better AI brainstorming starts with constraints"
description: "Generate ideas that respond to a real problem, then evaluate them before polishing."
date: "2026-11-13"
category: "Prompting"
image: 23
draft: false
---

A list of twenty ideas can create the feeling of progress without helping you choose. Better brainstorming begins with a real audience, a constraint, and a way to compare options. The model’s job is to widen the search, while your judgment decides what deserves effort.

## What matters in practice

Suppose you need a weekend project with no paid APIs. That constraint changes which ideas are useful. Ask for several genuinely different approaches and require each to name its main risk. Do not let a model assign precise scores when the inputs are subjective and unmeasured. A simple explanation of tradeoffs is more informative than an invented ranking.

## A workflow to try

1. **Define the problem.** Explain the audience and the outcome they need, rather than naming a fashionable technology.

2. **Generate varied approaches.** Ask for alternatives with different mechanisms, scope, or distribution strategies.

3. **Choose a cheap test.** For each promising idea, identify the smallest experiment that could invalidate it.

## Try this prompt

```text
Generate six distinct approaches to [problem] for [audience].
Constraints: [time, budget, tools]. For each, explain the mechanism,
main assumption, likely failure mode, and a small test.
Avoid cosmetic variations of the same idea. Do not invent market
size or demand evidence. Help me choose what to investigate next.
```

## Before you rely on the result

An appealing name or polished pitch does not establish demand. Talk to prospective users, check existing alternatives, and run the test before building. Use AI to expand possibilities while keeping evidence and enthusiasm separate.

## Sources and further reading

- [Reasoning best practices: goals and constraints](https://developers.openai.com/api/docs/guides/reasoning-best-practices)

*Published November 13, 2026. Product availability and documentation can change. The workflow and prompt above are Latent Ink editorial examples, not vendor performance claims.*
