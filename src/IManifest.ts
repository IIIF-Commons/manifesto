
interface IManifest {
    label: string | any[]; // todo: define in jsonld.d.ts
    sequences: ISequence[];
    structures: IRange[];
    viewingDirection: ViewingDirection;
    viewingHint: ViewingHint;
}