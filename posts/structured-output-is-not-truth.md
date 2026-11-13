---
title: "Structured output is a format contract, not a fact check"
description: "Use schemas for reliable parsing while validating the meaning of every important field."
date: "2026-11-13"
category: "Coding"
image: 11
draft: false
---

An application often needs fields rather than a paragraph: a document title, an amount, or a due date. Structured output can make a model response easier to parse. OpenAI documents a JSON Schema-based approach with supported-schema restrictions. But valid structure does not guarantee that a field is factually correct.

## What matters in practice

Consider an invoice extractor. A response can contain a perfectly valid amount and still read the wrong line from the source. Design for missing and uncertain information before choosing field types. If a due date is absent, returning a visible null state is safer than inventing one. Keep a source reference with extracted values so a reviewer can trace them.

## A workflow to try

1. **Define absence explicitly.** Decide how missing, unreadable, and conflicting fields should be represented.

2. **Validate in two layers.** Check schema shape, then apply business rules such as allowed currencies or plausible date relationships.

3. **Keep evidence.** Store the document reference or excerpt needed to inspect the extraction.

## Try this prompt

```text
Extract [fields] from [document]. Return the requested structure.
Use null for absent values and list uncertainty separately.
Do not infer a missing date from customary payment terms.
For each extracted amount, include the source label or location.
Flag conflicting totals for review rather than choosing silently.
```

## Before you rely on the result

Check the exact schema subset supported by your provider and model. Handle refusal, incomplete response, and validation failures in your application. Never let the presence of syntactically valid JSON bypass ordinary authorization or financial review.

## Sources and further reading

- [Structured model outputs](https://developers.openai.com/api/docs/guides/structured-outputs)

*Published November 13, 2026. Product availability and documentation can change. The workflow and prompt above are Latent Ink editorial examples, not vendor performance claims.*
