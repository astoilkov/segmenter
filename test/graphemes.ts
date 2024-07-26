import { describe, expect, test } from "vitest";
import { graphemeAt, graphemeRangeAt, graphemes } from "../src/graphemes.js";

describe("segmenter", () => {
    describe("graphemes", () => {
        test.each([
            "😃",
            "🐛",
            "👨‍🔧️",
            "🧪",

            // taken from:
            // https://2ality.com/2022/11/regexp-v-flag.html#:~:text=For%20now%2C%20the%20following%20Unicode%20properties%20of%20strings%20are%20supported%3A
            "1️⃣", // \p{Emoji_Keycap_Sequence}
            "☝🏿", // \p{RGI_Emoji_Modifier_Sequence} also in \p{Emoji_Modifier_Sequence}
            "🇰🇪", // \p{RGI_Emoji_Flag_Sequence} also in \p{Emoji_Flag_Sequence}
            "🏴󠁧󠁢󠁳󠁣󠁴󠁿", // \p{RGI_Emoji_Tag_Sequence} also in \p{Emoji_Tag_Sequence}
            "🧑‍🌾", // \p{RGI_Emoji_ZWJ_Sequence} also in \p{Emoji_ZWJ_Sequence}
        ])("graphemeAt() handles the %s emoji", (emoji) => {
            expect(graphemeAt(emoji, 0)).toBe(emoji);
        });

        test("graphemeRangeAt()", () => {
            // - not sure if it should return undefined or a range. it doesn't seem like a good for
            //   `graphemeRangeAt()` to return undefined
            expect(graphemeRangeAt(String.fromCharCode(8206), 0)).toEqual({
                start: 0,
                end: 1,
            });

            expect(graphemeRangeAt("화", 0)).toEqual({ start: 0, end: 2 });

            expect(graphemeRangeAt("면", 0)).toEqual({ start: 0, end: 3 });
            expect(graphemeRangeAt("면", 1)).toEqual({ start: 0, end: 3 });
            expect(graphemeRangeAt("면", 2)).toEqual({ start: 0, end: 3 });

            expect(graphemeRangeAt("화면", 2)).toEqual({ start: 2, end: 5 });

            // empty string
            expect(graphemeRangeAt("", 0)).toBe(undefined);
        });

        test("63 characters long grapheme", () => {
            const grapheme = "x̨̨̛̘̙̱̯͚̳̯̻͙͎̞̟͍̩̭̮̙͔͖͉̪̫͍͚̻̘͌̓̾͒͗͋͋̌̽͋̋̂̓̈́̉̃͗̇̓̆̎͆̿̽̍͑̅͘͘͟͜͢͠";

            for (let i = 0; i < grapheme.length; i++) {
                expect(graphemeRangeAt(grapheme, i)).toEqual({
                    start: 0,
                    end: grapheme.length,
                });
            }
        });

        test("63 characters long grapheme (in the middle of the text)", () => {
            const before = "before";
            const grapheme = `x̨̨̛̘̙̱̯͚̳̯̻͙͎̞̟͍̩̭̮̙͔͖͉̪̫͍͚̻̘͌̓̾͒͗͋͋̌̽͋̋̂̓̈́̉̃͗̇̓̆̎͆̿̽̍͑̅͘͘͟͜͢͠`;
            const text = `${before}${grapheme}after`;

            expect(
                graphemeRangeAt(
                    text,
                    before.length + Math.round(grapheme.length / 2),
                ),
            ).toEqual({
                start: before.length,
                end: before.length + grapheme.length,
            });
        });

        test("new line", () => {
            expect(graphemeRangeAt("\n\n", 1)).toEqual({ start: 1, end: 2 });
        });

        test("graphemes()", () => {
            expect(graphemes("😃🐛👨‍🔧️🧪")).toEqual(["😃", "🐛", "👨‍🔧️", "🧪"]);
        });
    });
});
