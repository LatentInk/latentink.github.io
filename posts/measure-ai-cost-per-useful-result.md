---
title: "Measure AI cost per useful result"
description: "Look beyond token prices to correction time, retries, and the quality of the finished task."
date: "2026-11-13"
category: "Coding"
image: 13
draft: false
---

A lower-priced model is not always the cheaper workflow. If it needs repeated retries or substantial human correction, its total cost can exceed that of a stronger model. Conversely, an expensive model can be unnecessary for a well-defined task with easy validation.

## What matters in practice

OpenAI’s model-selection guidance recommends evaluating candidates against the work you need them to perform. Our suggested unit is a useful result: an output that passes your acceptance criteria. Record model usage, tool calls, elapsed time, and review effort together. Keep pricing separate from the quality experiment so changes in a promotional rate do not invalidate your understanding of the task.

## A workflow to try

1. **Define success first.** For extraction, require correct fields; for coding, require the relevant behavior to work.

2. **Record end-to-end effort.** Include retries, retrieval, tool execution, and the time a reviewer spends repairing output.

3. **Compare matched inputs.** Use the same examples and constraints for each candidate and document model settings.

## Try this prompt

```text
Create a comparison plan for [task] across [candidate models].
Measure accepted outputs, retries, latency, and human correction time.
Keep current token prices as an explicitly dated input.
Show how to calculate total cost per accepted result.
Do not assume lower token cost means lower overall cost.
```

## Before you rely on the result

A small experiment is evidence about your sample, not every workload. Recheck under typical concurrency and input length. Avoid publishing vendor price numbers without a date and a link to the current pricing page.

## Sources and further reading

- [Model selection](https://developers.openai.com/api/docs/guides/model-selection)

*Published November 13, 2026. Product availability and documentation can change. The workflow and prompt above are Latent Ink editorial examples, not vendor performance claims.*
