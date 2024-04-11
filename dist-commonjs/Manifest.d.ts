import { ViewingHint, Behavior, ViewingDirection } from "@iiif/vocabulary/dist-commonjs";
import { Canvas, IManifestoOptions, IIIFResource, ManifestType, Range, Sequence, TreeNode } from "./internal";
/**
* @remarks Scenes are conveniently retrieved from a Manifest by iterating through
* Sequence in the Manifest, inner loop the Scenes in each sequence
* @see {@link Sequence }
*
* @example
* var manifest: Manifest;
* function doSomethingWithScene(scene:Scene)...
* ...
* foreach(var seq:Sequence of manifest.getSequences()
*   foreach(var scene : Scene of seq.getScenes()
*     doSomethingWithScene(scene);
**/
export declare class Manifest extends IIIFResource {
    index: number;
    private _allRanges;
    items: Sequence[];
    private _topRanges;
    constructor(jsonld?: any, options?: IManifestoOptions);
    /** @deprecated Use getAccompanyingCanvas instead */
    getPosterCanvas(): Canvas | null;
    getAccompanyingCanvas(): Canvas | null;
    getBehavior(): Behavior | null;
    getDefaultTree(): TreeNode;
    private _getTopRanges;
    getTopRanges(): Range[];
    private _getRangeById;
    private _parseRanges;
    getAllRanges(): Range[];
    getRangeById(id: string): Range | null;
    getRangeByPath(path: string): Range | null;
    /**
    * @returns Array of Sequence instances
    **/
    getSequences(): Sequence[];
    getSequenceByIndex(sequenceIndex: number): Sequence;
    getTotalSequences(): number;
    getManifestType(): ManifestType;
    isMultiSequence(): boolean;
    isPagingEnabled(): boolean;
    getViewingDirection(): ViewingDirection | null;
    getViewingHint(): ViewingHint | null;
    _annotationIdMap: any;
    /**
    * Developer Note: The concept of the "id map" appear in the
    * JSON-LD specification https://www.w3.org/TR/json-ld11/#dfn-id-map
    * This functionality may be available as well in the 'nodeMap' code of the
    * digitalbazaar/jsonld library
    *
    * this very simplified version just returns a mao of id -> Annotation nodes
    * in manifest
    *
    * THe annotationIdMap is a Javascript object whose property names are
    * IRI (id values) and property values are instances of the Annotation class
    **/
    get annotationIdMap(): Object;
}
