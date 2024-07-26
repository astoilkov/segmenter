import { segmentAt, segmentRangeAt, segments } from "./segments.js";

const SAFE_OFFSET = 12;

export function graphemeAt(
    string: string,
    position: number,
): string | undefined {
    return segmentAt(segmenter(), string, position, SAFE_OFFSET);
}

export function graphemeRangeAt(
    string: string,
    position: number,
): { start: number; end: number } | undefined {
    return segmentRangeAt(segmenter(), string, position, SAFE_OFFSET);
}

export function graphemes(string: string): string[] {
    return segments(segmenter(), string);
}

let _segmenter: Intl.Segmenter | undefined;
function segmenter(): Intl.Segmenter {
    _segmenter ??= new Intl.Segmenter();
    return _segmenter;
}
