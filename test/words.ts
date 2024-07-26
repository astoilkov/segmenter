import { describe, expect, test } from "vitest";
import { wordAt, wordRangeAt, words } from "../src/words.js";

describe("segmenter", () => {
    describe("words", () => {
        test("wordAt()", () => {
            expect(wordAt("this_is_an_experiment_of_one_long_word", 0)).toBe(
                "this_is_an_experiment_of_one_long_word",
            );
        });

        test("wordRangeAt()", () => {
            expect(wordRangeAt("hello-world", 0)).toEqual({ start: 0, end: 5 });
        });

        test("words", () => {
            expect(words("hello world")).toEqual(["hello", " ", "world"]);
        });
    });
});
