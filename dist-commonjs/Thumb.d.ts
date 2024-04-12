import { ViewingHint } from "@iiif/vocabulary/dist-commonjs";
import { Canvas } from "./internal";
export declare class Thumb {
    data: any;
    index: number;
    uri: string;
    label: string;
    width: number;
    height: number;
    visible: boolean;
    viewingHint: ViewingHint | null;
    constructor(width: number, canvas: Canvas);
}
