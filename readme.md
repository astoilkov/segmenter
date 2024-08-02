# `segmenter`

> Work with grapheme, words, and sentences with small, simple, and fast API using `Intl.Segmenter`

[![Gzipped Size](https://img.shields.io/bundlephobia/minzip/segmenter)](https://bundlephobia.com/result?p={{data.name}})
[![Build Status](https://img.shields.io/github/actions/workflow/status/astoilkov/segmenter/main.yml?branch=main)](https://github.com/astoilkov/{{data.name}}/actions/workflows/main.yml)

## Install

```bash
npm install segmenter
```

## Why

- `Intl.Segmenter` is supported in all major browsers and `94%` of users have it available — it's time for adoption.
- If you have a use case other than iterating over all graphemes/words/sentences in a text, then `Intl.Segmenter` might be a little hard to work with.
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

### Graphemes

##### `graphemeAt(string: string, position: number): string | undefined`

Get the grapheme at `position` in `string`. Returns `undefined` if `position` is out of bounds or `string` is empty.

##### `graphemeRangeAt(string: string, position: number): { start: number; end: number; } | undefined`

Get the `start` and `end` positions of the grapheme at `position` in `string`. Returns `undefined` if `position` is out of bounds or `string` is empty.

##### `graphemes(string: string): string[]`

Get all graphemes in the `string` as `Array`.

### Words

##### `wordAt(string: string, position: number): string | undefined`

Get the word at `position` in `string`. Returns `undefined` if `position` is out of bounds or `string` is empty.

##### `wordRangeAt(string: string, position: number): { start: number; end: number; } | undefined`

Get the `start` and `end` positions of the word at `position` in `string`. Returns `undefined` if `position` is out of bounds or `string` is empty.

##### `words(string: string): string[]`

Get all words in the `string` as `Array`.

### Sentences

_Note: `Intl.Segmenter` doesn't do a perfect job of detecting sentences. For example, `I went to Dr. Smith's office` will be split into two sentences._

##### `sentenceAt(string: string, position: number): string | undefined`

Get the sentence at `position` in `string`. Returns `undefined` if `position` is out of bounds or `string` is empty.

##### `sentenceRangeAt(string: string, position: number): { start: number; end: number; } | undefined`

Get the `start` and `end` positions of the sentence at `position` in `string`. Returns `undefined` if `position` is out of bounds or `string` is empty.

##### `sentences(string: string): string[]`

Get all sentences in the `string` as `Array`.