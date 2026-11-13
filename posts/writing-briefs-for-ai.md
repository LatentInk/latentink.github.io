---
title: "Write an AI brief that sounds like you"
description: "Give the model your audience, evidence, and point of view before asking for a draft."
date: "2026-11-13"
category: "Prompting"
image: 20
draft: false
---

“Write an article about AI” delegates almost every editorial decision. The model must guess the reader, the angle, the supporting material, and the desired outcome. A useful writing brief makes those choices explicit so the first draft starts closer to your actual idea.

## What matters in practice

Use your own observations as raw material. A specific incident, a reader question, or a constraint from your work provides more direction than a list of style adjectives. The principles of a clear task and explicit constraints also appear in OpenAI’s prompting guidance for reasoning models. Our writing workflow adds an editorial checkpoint before full drafting: agree on the outline and missing evidence.

## A workflow to try

1. **Describe the reader.** State what they already know and what problem brought them to the article.

2. **Supply an angle.** Write the main point in your own words and add notes or verified examples.

3. **Edit with a diagnosis.** Say which section is slow, unsupported, repetitive, or too abstract.

## Try this prompt

```text
Help me draft [article]. Reader: [audience]. Main point: [angle].
Evidence: [notes]. Voice: [short sample of my writing].
First identify missing information and propose an outline.
Use only supplied facts; mark unsupported claims [CHECK].
Include a concrete example and a useful next step. Avoid invented quotes.
```

## Before you rely on the result

A model can imitate surface phrasing while missing your judgment. Review the argument, not only the tone. Check every factual statement, replace placeholders, and read the result aloud before publishing under your name.

## Sources and further reading

- [Reasoning best practices](https://developers.openai.com/api/docs/guides/reasoning-best-practices)

*Published November 13, 2026. Product availability and documentation can change. The workflow and prompt above are Latent Ink editorial examples, not vendor performance claims.*
