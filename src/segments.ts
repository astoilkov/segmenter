import fastSegmentDataAt from './fastSegmentDataAt.js'

export function segmentAt(
  segmenter: Intl.Segmenter,
  string: string,
  position: number,
  safeOffset: number,
): string | undefined {
  return fastSegmentDataAt(segmenter, string, position, safeOffset)?.segment
}

export function segmentRangeAt(
  segmenter: Intl.Segmenter,
  string: string,
  position: number,
  safeOffset: number,
): { start: number; end: number } | undefined {
  const segmentData = fastSegmentDataAt(segmenter, string, position, safeOffset)
  return segmentData === undefined
    ? undefined
    : {
        start: segmentData.index,
        end: segmentData.index + segmentData.segment.length,
      }
}

export function segments(segmenter: Intl.Segmenter, string: string): string[] {
  const graphemes: string[] = []
  for (const segmentData of segmenter.segment(string)) {
    graphemes.push(segmentData.segment)
  }
  return graphemes
}

// export function segmentsIterable(segmenter: Intl.Segmenter, string: string): Iterable<string> {
//   return {
//     [Symbol.iterator]: () => {
//       const iterator = segmenter.segment(string)[Symbol.iterator]()
//       return {
//         next() {
//           const { done, value } = iterator.next()
//           return { done, value: value?.segment }
//         },
//       }
//     },
//   }
// }
