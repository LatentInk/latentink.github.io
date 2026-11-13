---
title: "Context engineering: give AI the right working set"
description: "A compact guide to managing instructions, references, and history without overwhelming the task."
date: "2026-11-13"
category: "Agents"
image: 8
draft: false
---

A disappointing response is not always a wording problem. The assistant may be missing the relevant source, using an old decision, or sorting through irrelevant history. Context engineering is the work of selecting and maintaining the information available to the model as the task progresses.

## What matters in practice

Anthropic describes context as more than a single prompt: it can include tools, external material, and conversation history. Our practical approach is a working set with four parts: goal, constraints, selected evidence, and current state. This is useful for a long writing project or a coding session where earlier decisions must remain available without replaying every discussion.

## A workflow to try

1. **Put authority first.** State the current user goal and requirements clearly; label source material separately.

2. **Choose relevant evidence.** Include the paragraphs or files that bear on the next decision, with paths or source IDs.

3. **Refresh current state.** Remove superseded plans and keep open questions visible when the task changes.

## Try this prompt

```text
Prepare a compact working brief for [task] from [materials].
Include current goal, hard constraints, relevant source references,
decisions already made, unresolved questions, and the next action.
Mark superseded information. Do not turn tentative suggestions into
confirmed requirements or omit a known blocker.
```

## Before you rely on the result

Shorter context is not automatically better. Important edge cases and exact requirements can disappear in an overaggressive summary. Keep links to the originals and verify that the next step still has the evidence it needs.

## Sources and further reading

- [Effective context engineering for AI agents](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents)

*Published November 13, 2026. Product availability and documentation can change. The workflow and prompt above are Latent Ink editorial examples, not vendor performance claims.*
