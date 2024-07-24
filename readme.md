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

- In many cases, working [graphemes](https://en.wikipedia.org/wiki/Grapheme) is preferable compared to just characters.
- Alternative methods so far were using MB of data in order to accomplish this task. `Intl.Segmenter` now supported in all major browsers gives this functionality out of the box.
- `Intl.Segmenter` API is a little hard to work with. For example, it's hard to get a grapheme/word/sentence at a specific index without looping and scarifying performance.

## Usage

```ts
import { graphemeAt, graphemeRangeAt, wordAt, wordRangeAt } from 'segmenter'

graphemeAt("👨‍🔧️ the fixer", 3) // 👨‍🔧️
graphemeRangeAt("👨‍🔧️ the fixer", 3) // { start: 0, end: 6 }
wordAt("hello-world") // "hello"
wordRangeAt('hello-world') // { start: 0, end: 5 }
```

## API

#### `graphemes`

##### `graphemeAt(string: string, position: number): string | undefined`

##### `graphemeRangeAt(string: string, position: number): { start: number; end: number; } | undefined`

#### `graphemes(string: string): string[]`

#### `words`

##### `wordAt(string: string, position: number): string | undefined`

##### `wordRangeAt(string: string, position: number): { start: number; end: number; } | undefined`

#### `words(string: string): string[]`

#### `sentences`

##### `sentenceAt(string: string, position: number): string | undefined`

##### `sentenceRangeAt(string: string, position: number): { start: number; end: number; } | undefined`

#### `sentences(string: string): string[]`