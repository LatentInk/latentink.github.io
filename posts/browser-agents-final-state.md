---
title: "Browser agents: verify what was saved"
description: "A practical checklist for judging AI that clicks through real interfaces."
date: "2026-11-13"
category: "Agents"
image: 6
draft: false
---

A browser agent is useful when a task requires interaction with a page rather than a text answer. But clicking the right-looking button is not the same as completing the task. A saved setting, submitted form, or downloaded file is the result you need to inspect.

## What matters in practice

Imagine asking an assistant to update a public profile description. The sequence can fail because the wrong account is active, the save button is disabled, or validation rejects the text. A completion report should identify the final visible state. OpenAI’s model-selection guidance explicitly calls attention to checking saved results for computer-use tasks. Our checklist below turns that idea into a repeatable review.

## A workflow to try

1. **Confirm the target.** Check account, workspace, page, and item before the first edit.

2. **Make the action specific.** Provide the exact field values and clarify whether the task includes submitting or only drafting.

3. **Inspect after saving.** Reopen or refresh the item when appropriate and compare with the requested values.

## Try this prompt

```text
Update [specific item] with [exact values]. Confirm the active
account and target first. After saving, inspect the final state
and report which values are visible. If validation or permissions
block the change, report that blocker. Do not substitute a successful
click for confirmation that the requested data was saved.
```

## Before you rely on the result

Screenshots can omit off-screen fields, and success banners can appear before all downstream work finishes. For irreversible actions, establish the scope before the final step. Keep a concise record of the final object rather than a long narrative of every click.

## Sources and further reading

- [Model selection: evaluating computer use](https://developers.openai.com/api/docs/guides/model-selection)

*Published November 13, 2026. Product availability and documentation can change. The workflow and prompt above are Latent Ink editorial examples, not vendor performance claims.*
