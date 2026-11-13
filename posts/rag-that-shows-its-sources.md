---
title: "RAG that shows its work: retrieval before generation"
description: "Build answers from a selected evidence set and make missing information visible."
date: "2026-11-13"
category: "Research"
image: 9
draft: false
---

Retrieval-augmented generation, often shortened to RAG, brings selected external information into an AI response. It is useful when the answer depends on your own documents or a maintained knowledge base. It does not make an answer correct merely because a source was retrieved.

## What matters in practice

OpenAI’s retrieval guide explains semantic search, which can surface related text even when exact words differ. That is valuable when someone asks a question in everyday language and the policy uses a formal term. Still, a relevant-looking passage may refer to a different product, region, or effective date. Your answer must preserve those boundaries.

## A workflow to try

1. **Retrieve with context.** Carry document title, date, and access scope alongside the matching passage.

2. **Check relevance before writing.** Confirm that the source actually addresses the question, rather than sharing vocabulary.

3. **Cite and abstain.** Support each factual answer with the matching passage and say when evidence is missing.

## Try this prompt

```text
Answer [question] using only the supplied passages [sources].
Cite source IDs for each material factual claim. Check product,
region, and effective date before applying a passage. If the answer
is absent or sources conflict, explain what is missing. Do not
fill gaps from general knowledge without labeling that separately.
```

## Before you rely on the result

Evaluate retrieval separately from generation. If the right passage never enters the context, editing the answer prompt will not fix the underlying issue. Test ambiguous queries, outdated policies, and questions your knowledge base cannot answer.

## Sources and further reading

- [Retrieval and semantic search](https://developers.openai.com/api/docs/guides/retrieval)

*Published November 13, 2026. Product availability and documentation can change. The workflow and prompt above are Latent Ink editorial examples, not vendor performance claims.*
