import { describe, expect, test } from "vitest";
import { sentenceAt, sentenceRangeAt, sentences } from "../src/sentences.js";

describe("segmenter", () => {
    describe("sentences", () => {
        test("sentenceAt()", () => {
            expect(sentenceAt("Hi, there. What are you doing today?", 0)).toBe(
                "Hi, there. ",
            );
        });

        test("sentenceRangeAt()", () => {
            expect(sentenceRangeAt("Hi. How are you?", 10)).toEqual({
                start: 4,
                end: 16,
            });
        });

        test("sentences()", () => {
            expect(sentences("Hi, there. What are you doing today?")).toEqual([
                "Hi, there. ",
                "What are you doing today?",
            ]);
        });

        test("sentences() with Mr.", () => {
            expect(
                sentences(
                    "I went to Dr. Smith's office, and then I went to the store.",
                ),
            ).toEqual([
                "I went to Dr. ",
                "Smith's office, and then I went to the store.",
            ]);
        });
    });
});
