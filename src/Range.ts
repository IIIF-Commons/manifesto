
export class Range implements IRange {
    canvases: ICanvas[];
    path: string;
    parentRange: IRange;
    ranges: IRange[];
    viewingHint: ViewingHint;
    viewingDirection: ViewingDirection;
}
