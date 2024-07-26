# `segmenter`

> Grapheme, words, and sentences with simple and fast API using `Intl.Segmenter`

<!--
[![Gzipped Size](https://img.shields.io/bundlephobia/minzip/{{data.name}})](https://bundlephobia.com/result?p={{data.name}})
[![Build Status](https://img.shields.io/github/actions/workflow/status/astoilkov/{{data.name}}/main.yml?branch=main)](https://github.com/astoilkov/{{data.name}}/actions/workflows/main.yml)

## Install

```bash
npm install {{data.name}}
```
-->

## Why

- `Intl.Segmenter` is supported in all major browsers and 94%+ of users have it available — it's time for adoption.
- If you have a use case other than iterating over all graphemes/words/sentences in a text than `Intl.Segmenter` might be a little hard to work with.
- In many cases, working with [graphemes](https://en.wikipedia.org/wiki/Grapheme) is preferable to characters. Graphemes are what the end user sees. For example, the emoji `👨‍🔧️` is a single grapheme but consists of 6 characters. `for` loop will make 6 iterations, `for of` looping `👨‍🔧️` will make 4 iterations — it's confusing, just use graphemes.
- Before `Intl.Segmenter`, working with graphemes required libraries like [`graphemer`](https://bundlephobia.com/package/graphemer@1.4.0) that is `94KB` in size.

## Usage

```ts
import { graphemeAt, graphemeRangeAt, wordAt, wordRangeAt } from "segmenter";

graphemeAt("👨‍🔧️ the fixer", 3); // 👨‍🔧️
graphemeRangeAt("👨‍🔧️ the fixer", 3); // { start: 0, end: 6 }
wordAt("hello-world"); // "hello"
wordRangeAt("hello-world"); // { start: 0, end: 5 }
```

## API

#### Graphemes

##### `graphemeAt(string: string, position: number): string | undefined`

##### `graphemeRangeAt(string: string, position: number): { start: number; end: number; } | undefined`

##### `graphemes(string: string): string[]`

#### Words

##### `wordAt(string: string, position: number): string | undefined`

##### `wordRangeAt(string: string, position: number): { start: number; end: number; } | undefined`

##### `words(string: string): string[]`

#### Sentences

##### `sentenceAt(string: string, position: number): string | undefined`

##### `sentenceRangeAt(string: string, position: number): { start: number; end: number; } | undefined`

##### `sentences(string: string): string[]`