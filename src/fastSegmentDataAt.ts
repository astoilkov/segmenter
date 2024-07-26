export default function fastSegmentDataAt(
    segmenter: Intl.Segmenter,
    string: string,
    index: number,
    safeOffset: number,
): Intl.SegmentData | undefined {
    let multiplier = 1;
    let currentOffset = safeOffset * multiplier;

    while (true) {
        const start = Math.max(index - currentOffset, 0);
        const end = Math.min(index + currentOffset, string.length);
        const segmentData = segmenter
            .segment(string.slice(start, end))
            .containing(index - start);
        if (segmentData === undefined) return undefined;
        const segmentStart = segmentData.index;
        const segmentEnd = segmentStart + segmentData.segment.length;
        if (
            (start === 0 || segmentData.index !== 0) &&
            (end === string.length || segmentEnd !== end - start)
        ) {
            return "isWordLike" in segmentData
                ? {
                      index: segmentStart + start,
                      segment: segmentData.segment,
                      input: segmentData.input,
                      isWordLike: segmentData.isWordLike,
                  }
                : {
                      index: segmentStart + start,
                      segment: segmentData.segment,
                      input: segmentData.input,
                  };
        }

        multiplier += 1;
        currentOffset = safeOffset * multiplier;
    }
}
