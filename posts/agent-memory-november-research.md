---
title: "Agent memory: save what has earned your trust"
description: "What Anthropic\u2019s new memory research means for practical assistants that need continuity."
date: "2026-11-13"
category: "Updates"
image: 3
draft: false
---

Anthropic’s November 6, 2026 article explores how an agent can organize information retained between sessions. It distinguishes stored experience from changes to model weights and examines offline reflection, sometimes called dreaming. The practical issue is simple: a saved mistake can influence many future decisions.

## What matters in practice

For a project assistant, a useful memory might be a verified formatting preference or the reason a previous approach failed. A transcript dump is harder to use. Our suggested design is a small record containing the claim, its evidence, when it was checked, and how it can be corrected. Treat that as application state with an owner, rather than an invisible personality trait.

## A workflow to try

1. **Store provenance.** Link a saved rule to the user instruction or observed result that supports it.

2. **Distinguish tentative notes.** A hypothesis about a bug should not look identical to a tested fix.

3. **Make correction easy.** Provide a way to inspect, revise, expire, and delete retained information.

## Try this prompt

```text
Review these project notes: [notes]. Propose memory entries
only for information likely to matter again. For each entry,
include claim, supporting source, verification status, and
review date. Keep guesses separate. Flag conflicting entries
and ask before replacing an explicit user preference.
```

## Before you rely on the result

The research evaluates particular models and environments; its results are not a promise for every assistant. Do not store credentials or sensitive personal details merely because they appeared in a conversation. A smaller, correct memory can be more useful than a larger archive.

## Sources and further reading

- [The components of agent memory](https://www.anthropic.com/research/components-of-agent-memory)

*Published November 13, 2026. Product availability and documentation can change. The workflow and prompt above are Latent Ink editorial examples, not vendor performance claims.*
