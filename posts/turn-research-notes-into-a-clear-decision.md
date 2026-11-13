---
title: "Turn scattered notes into a clearer decision"
description: "A source-first prompt for comparing options, spotting gaps, and choosing what to investigate next."
date: "2026-11-13"
category: Research
draft: false
---

## Keep evidence and interpretation separate

When research notes pile up, a neat summary can hide important uncertainty. Ask your assistant to show which conclusions are supported and which still need work.

This prompt works with notes you supply. It does not give a model access to sources it cannot open, and it does not replace checking the original material.

## The prompt

```text
Help me compare options for this decision: [decision].
My criteria, in priority order: [criteria]
Constraints: [budget, timeline, requirements]
Options: [options under consideration]

Source notes, each with an ID and date:
[S1] [source title, date, and relevant excerpt]
[S2] [source title, date, and relevant excerpt]

Use only these notes as evidence.
For each option, compare it against my criteria.
Cite source IDs for factual claims.
Separate facts, interpretations, and unanswered questions.
If sources conflict, show the conflict instead of resolving it
by guessing. Say when the evidence is insufficient.
End with the three questions whose answers would most affect
my decision. Do not invent a numerical score or missing data.
```

## Supply useful source context

A snippet without a date or scope can mislead. Include who produced the source, what it covers, and whether it is a first-hand measurement, an opinion, or a marketing claim. Keep private information out of the notes unless the tool is approved for it.

## Read the gaps before the recommendation

The unanswered questions may be the most valuable output. Check the cited excerpts, confirm time-sensitive details, and investigate the questions that could change the outcome.

If the assistant recommends an option, ask what new evidence would reverse that recommendation. This makes the uncertainty more explicit and gives you a concrete next research step.
