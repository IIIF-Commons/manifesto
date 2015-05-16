
interface IRange {
    canvases: ICanvas[];
    parentRange: IRange;
    path: string;
    ranges: IRange[];
    viewingHint: ViewingHint;
    viewingDirection: ViewingDirection;
}