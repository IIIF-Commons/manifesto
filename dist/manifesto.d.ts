// manifesto.js v2.0.2 https://github.com/viewdir/manifesto
declare module Manifesto {
    class StringValue {
        value: string;
        constructor(value?: string);
        toString(): string;
    }
}

declare module Manifesto {
    class AnnotationMotivation extends StringValue {
        static BOOKMARKING: AnnotationMotivation;
        static CLASSIFYING: AnnotationMotivation;
        static COMMENTING: AnnotationMotivation;
        static DESCRIBING: AnnotationMotivation;
        static EDITING: AnnotationMotivation;
        static HIGHLIGHTING: AnnotationMotivation;
        static IDENTIFYING: AnnotationMotivation;
        static LINKING: AnnotationMotivation;
        static MODERATING: AnnotationMotivation;
        static PAINTING: AnnotationMotivation;
        static QUESTIONING: AnnotationMotivation;
        static REPLYING: AnnotationMotivation;
        static TAGGING: AnnotationMotivation;
        static TRANSCRIBING: AnnotationMotivation;
        bookmarking(): AnnotationMotivation;
        classifying(): AnnotationMotivation;
        commenting(): AnnotationMotivation;
        describing(): AnnotationMotivation;
        editing(): AnnotationMotivation;
        highlighting(): AnnotationMotivation;
        identifying(): AnnotationMotivation;
        linking(): AnnotationMotivation;
        moderating(): AnnotationMotivation;
        painting(): AnnotationMotivation;
        questioning(): AnnotationMotivation;
        replying(): AnnotationMotivation;
        tagging(): AnnotationMotivation;
        transcribing(): AnnotationMotivation;
    }
}

declare module Manifesto {
    class ElementType extends StringValue {
        static CANVAS: ElementType;
        static DOCUMENT: ElementType;
        static IMAGE: ElementType;
        static MOVINGIMAGE: ElementType;
        static PHYSICALOBJECT: ElementType;
        static SOUND: ElementType;
        canvas(): ElementType;
        document(): ElementType;
        image(): ElementType;
        movingimage(): ElementType;
        physicalobject(): ElementType;
        sound(): ElementType;
    }
}

declare module Manifesto {
    class IIIFResourceType extends StringValue {
        static ANNOTATION: IIIFResourceType;
        static CANVAS: IIIFResourceType;
        static COLLECTION: IIIFResourceType;
        static MANIFEST: IIIFResourceType;
        static RANGE: IIIFResourceType;
        static SEQUENCE: IIIFResourceType;
        annotation(): IIIFResourceType;
        canvas(): IIIFResourceType;
        collection(): IIIFResourceType;
        manifest(): IIIFResourceType;
        range(): IIIFResourceType;
        sequence(): IIIFResourceType;
    }
}

declare module Manifesto {
    class ManifestType extends StringValue {
        static EMPTY: ManifestType;
        static MANUSCRIPT: ManifestType;
        static MONOGRAPH: ManifestType;
        empty(): ManifestType;
        manuscript(): ManifestType;
        monograph(): ManifestType;
    }
}

declare module Manifesto {
    class RenderingFormat extends StringValue {
        static PDF: RenderingFormat;
        static DOC: RenderingFormat;
        static DOCX: RenderingFormat;
        pdf(): RenderingFormat;
        doc(): RenderingFormat;
        docx(): RenderingFormat;
    }
}

declare module Manifesto {
    class ResourceFormat extends StringValue {
        static JPGIMAGE: ResourceFormat;
        static PDF: ResourceFormat;
        jpgimage(): ResourceFormat;
        pdf(): ResourceFormat;
    }
}

declare module Manifesto {
    class ResourceType extends StringValue {
        static IMAGE: ResourceType;
        image(): ResourceType;
    }
}

declare module Manifesto {
    class ServiceProfile extends StringValue {
        static AUTOCOMPLETE: ServiceProfile;
        static STANFORDIIIFIMAGECOMPLIANCE0: ServiceProfile;
        static STANFORDIIIFIMAGECOMPLIANCE1: ServiceProfile;
        static STANFORDIIIFIMAGECOMPLIANCE2: ServiceProfile;
        static STANFORDIIIFIMAGECONFORMANCE0: ServiceProfile;
        static STANFORDIIIFIMAGECONFORMANCE1: ServiceProfile;
        static STANFORDIIIFIMAGECONFORMANCE2: ServiceProfile;
        static STANFORDIIIF1IMAGECOMPLIANCE0: ServiceProfile;
        static STANFORDIIIF1IMAGECOMPLIANCE1: ServiceProfile;
        static STANFORDIIIF1IMAGECOMPLIANCE2: ServiceProfile;
        static STANFORDIIIF1IMAGECONFORMANCE0: ServiceProfile;
        static STANFORDIIIF1IMAGECONFORMANCE1: ServiceProfile;
        static STANFORDIIIF1IMAGECONFORMANCE2: ServiceProfile;
        static IIIF1IMAGELEVEL0: ServiceProfile;
        static IIIF1IMAGELEVEL0PROFILE: ServiceProfile;
        static IIIF1IMAGELEVEL1: ServiceProfile;
        static IIIF1IMAGELEVEL1PROFILE: ServiceProfile;
        static IIIF1IMAGELEVEL2: ServiceProfile;
        static IIIF1IMAGELEVEL2PROFILE: ServiceProfile;
        static IIIF2IMAGELEVEL0: ServiceProfile;
        static IIIF2IMAGELEVEL0PROFILE: ServiceProfile;
        static IIIF2IMAGELEVEL1: ServiceProfile;
        static IIIF2IMAGELEVEL1PROFILE: ServiceProfile;
        static IIIF2IMAGELEVEL2: ServiceProfile;
        static IIIF2IMAGELEVEL2PROFILE: ServiceProfile;
        static IXIF: ServiceProfile;
        static LOGIN: ServiceProfile;
        static CLICKTHROUGH: ServiceProfile;
        static RESTRICTED: ServiceProfile;
        static LOGOUT: ServiceProfile;
        static OTHERMANIFESTATIONS: ServiceProfile;
        static SEARCHWITHIN: ServiceProfile;
        static TOKEN: ServiceProfile;
        static TRACKINGEXTENSIONS: ServiceProfile;
        static UIEXTENSIONS: ServiceProfile;
        static PRINTEXTENSIONS: ServiceProfile;
        static SHAREEXTENSIONS: ServiceProfile;
        autoComplete(): ServiceProfile;
        iiif1ImageLevel1(): ServiceProfile;
        iiif1ImageLevel2(): ServiceProfile;
        iiif2ImageLevel1(): ServiceProfile;
        iiif2ImageLevel2(): ServiceProfile;
        ixif(): ServiceProfile;
        login(): ServiceProfile;
        clickThrough(): ServiceProfile;
        restricted(): ServiceProfile;
        logout(): ServiceProfile;
        otherManifestations(): ServiceProfile;
        searchWithin(): ServiceProfile;
        stanfordIIIFImageCompliance1(): ServiceProfile;
        stanfordIIIFImageCompliance2(): ServiceProfile;
        stanfordIIIFImageConformance1(): ServiceProfile;
        stanfordIIIFImageConformance2(): ServiceProfile;
        stanfordIIIF1ImageCompliance1(): ServiceProfile;
        stanfordIIIF1ImageCompliance2(): ServiceProfile;
        stanfordIIIF1ImageConformance1(): ServiceProfile;
        stanfordIIIF1ImageConformance2(): ServiceProfile;
        token(): ServiceProfile;
        trackingExtensions(): ServiceProfile;
        uiExtensions(): ServiceProfile;
        printExtensions(): ServiceProfile;
        shareExtensions(): ServiceProfile;
    }
}

declare module Manifesto {
    class ViewingDirection extends StringValue {
        static LEFTTORIGHT: ViewingDirection;
        static RIGHTTOLEFT: ViewingDirection;
        static TOPTOBOTTOM: ViewingDirection;
        static BOTTOMTOTOP: ViewingDirection;
        leftToRight(): ViewingDirection;
        rightToLeft(): ViewingDirection;
        topToBottom(): ViewingDirection;
        bottomToTop(): ViewingDirection;
    }
}

declare module Manifesto {
    class ViewingHint extends StringValue {
        static CONTINUOUS: ViewingHint;
        static EMPTY: ViewingHint;
        static INDIVIDUALS: ViewingHint;
        static NONPAGED: ViewingHint;
        static PAGED: ViewingHint;
        static TOP: ViewingHint;
        continuous(): ViewingHint;
        empty(): ViewingHint;
        individuals(): ViewingHint;
        nonPaged(): ViewingHint;
        paged(): ViewingHint;
        top(): ViewingHint;
    }
}

declare module Manifesto {
    class JSONLDResource implements IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;
        constructor(jsonld?: any);
        getProperty(name: string): any;
    }
}

declare module Manifesto {
    class ManifestResource extends JSONLDResource implements IManifestResource {
        externalResource: IExternalResource;
        options: IManifestoOptions;
        constructor(jsonld?: any, options?: IManifestoOptions);
        getIIIFResourceType(): IIIFResourceType;
        getLabel(): TranslationCollection;
        getMetadata(): MetadataItem[];
        getRendering(format: RenderingFormat | string): IRendering;
        getRenderings(): IRendering[];
        getService(profile: ServiceProfile | string): IService;
        getServices(): IService[];
        isAnnotation(): boolean;
        isCanvas(): boolean;
        isCollection(): boolean;
        isManifest(): boolean;
        isRange(): boolean;
        isSequence(): boolean;
    }
}

declare module Manifesto {
    class Element extends ManifestResource implements IElement {
        index: number;
        type: ElementType;
        constructor(jsonld?: any, options?: IManifestoOptions);
        getResources(): IAnnotation[];
        getType(): ElementType;
    }
}

declare var _endsWith: any;
declare var _last: any;
declare module Manifesto {
    class Canvas extends Element implements ICanvas {
        ranges: IRange[];
        constructor(jsonld?: any, options?: IManifestoOptions);
        getCanonicalImageUri(w?: number): string;
        getImages(): IAnnotation[];
        getIndex(): number;
        getWidth(): number;
        getHeight(): number;
    }
}

declare var _assign: any;
declare module Manifesto {
    class IIIFResource extends ManifestResource implements IIIIFResource {
        defaultTree: ITreeNode;
        index: number;
        isLoaded: boolean;
        parentCollection: ICollection;
        parentLabel: string;
        constructor(jsonld?: any, options?: IManifestoOptions);
        getAttribution(): TranslationCollection;
        getDescription(): TranslationCollection;
        getIIIFResourceType(): IIIFResourceType;
        getLogo(): string;
        getLicense(): string;
        getNavDate(): Date;
        getRelated(): any;
        getSeeAlso(): any;
        getLabel(): TranslationCollection;
        getDefaultTree(): ITreeNode;
        isCollection(): boolean;
        isManifest(): boolean;
        load(): Promise<IIIIFResource>;
    }
}

declare var _isArray: any;
declare var _map: any;
declare module Manifesto {
    class Manifest extends IIIFResource implements IManifest {
        index: number;
        private _allRanges;
        private _sequences;
        private _topRanges;
        constructor(jsonld?: any, options?: IManifestoOptions);
        getDefaultTree(): ITreeNode;
        private _getTopRanges();
        getTopRanges(): IRange[];
        private _getRangeById(id);
        private _parseRangeCanvas(json, range);
        private _parseRanges(r, path, parentRange?);
        getAllRanges(): IRange[];
        getRangeById(id: string): IRange;
        getRangeByPath(path: string): IRange;
        getSequences(): ISequence[];
        getSequenceByIndex(sequenceIndex: number): ISequence;
        getTotalSequences(): number;
        getManifestType(): ManifestType;
        getTrackingLabel(): string;
        isMultiSequence(): boolean;
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
    }
}

declare module Manifesto {
    class Collection extends IIIFResource implements ICollection {
        members: IIIIFResource[];
        private _collections;
        private _manifests;
        constructor(jsonld?: any, options?: IManifestoOptions);
        getCollections(): ICollection[];
        getManifests(): IManifest[];
        getCollectionByIndex(collectionIndex: number): Promise<ICollection>;
        getManifestByIndex(manifestIndex: number): Promise<IManifest>;
        getTotalCollections(): number;
        getTotalManifests(): number;
        getTotalMembers(): number;
        /**
         * Get a tree of sub collections and manifests, using each child manifest's first 'top' range.
         */
        getDefaultTree(): ITreeNode;
        private _parseManifests(parentCollection);
        private _parseCollections(parentCollection);
    }
}

declare module Manifesto {
    class Range extends ManifestResource implements IRange {
        _canvases: ICanvas[];
        _ranges: IRange[];
        parentRange: Range;
        path: string;
        members: IManifestResource[];
        treeNode: ITreeNode;
        constructor(jsonld?: any, options?: IManifestoOptions);
        getCanvasIds(): string[];
        getCanvases(): ICanvas[];
        getRanges(): IRange[];
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
        getTree(treeRoot: ITreeNode): ITreeNode;
        private _parseTreeNode(node, range);
    }
}

declare module Manifesto {
    class Rendering extends ManifestResource implements IRendering {
        constructor(jsonld?: any, options?: IManifestoOptions);
        getFormat(): RenderingFormat;
    }
}

declare var _last: any;
declare module Manifesto {
    class Sequence extends ManifestResource implements ISequence {
        private canvases;
        constructor(jsonld?: any, options?: IManifestoOptions);
        getCanvases(): ICanvas[];
        getCanvasById(id: string): ICanvas;
        getCanvasByIndex(canvasIndex: number): any;
        getCanvasIndexById(id: string): number;
        getCanvasIndexByLabel(label: string, foliated?: boolean): number;
        getLastCanvasLabel(alphanumeric?: boolean): string;
        getLastPageIndex(): number;
        getNextPageIndex(canvasIndex: number, pagingEnabled?: boolean): number;
        getPagedIndices(canvasIndex: number, pagingEnabled?: boolean): number[];
        getPrevPageIndex(canvasIndex: number, pagingEnabled?: boolean): number;
        getStartCanvasIndex(): number;
        getThumbs(width: number, height?: number): Manifesto.IThumb[];
        getStartCanvas(): string;
        getTotalCanvases(): number;
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
        isCanvasIndexOutOfRange(canvasIndex: number): boolean;
        isFirstCanvas(canvasIndex: number): boolean;
        isLastCanvas(canvasIndex: number): boolean;
        isMultiCanvas(): boolean;
        isPagingEnabled(): boolean;
        isTotalCanvasesEven(): boolean;
    }
}

declare var _isString: any;
declare module Manifesto {
    class Deserialiser {
        static parse(manifest: string, options?: IManifestoOptions): IIIIFResource;
        static parseJson(json: any, options?: IManifestoOptions): IIIIFResource;
        static parseCollection(json: any, options?: IManifestoOptions): ICollection;
        static parseCollections(collection: ICollection, options?: IManifestoOptions): void;
        static parseManifest(json: any, options?: IManifestoOptions): IManifest;
        static parseManifests(collection: ICollection, options?: IManifestoOptions): void;
        static parseMember(json: any, options?: IManifestoOptions): IIIIFResource;
        static parseMembers(collection: ICollection, options?: IManifestoOptions): void;
    }
    class Serialiser {
        static serialise(manifest: IManifest): string;
    }
}

declare var _endsWith: any;
declare var _isArray: any;
declare module Manifesto {
    class Service extends ManifestResource implements IService {
        constructor(jsonld?: any, options?: IManifestoOptions);
        getProfile(): ServiceProfile;
        getDescription(): string;
        getInfoUri(): string;
    }
}

declare module Manifesto {
    interface IThumb {
        data: any;
        height: number;
        index: number;
        label: string;
        uri: string;
        visible: boolean;
        width: number;
    }
}

declare module Manifesto {
    class Thumb implements IThumb {
        data: any;
        index: number;
        uri: string;
        label: string;
        width: number;
        height: number;
        visible: boolean;
        constructor(width: number, canvas: ICanvas);
    }
}

declare module Manifesto {
    interface ITreeNode {
        data: any;
        nodes: ITreeNode[];
        selected: boolean;
        expanded: boolean;
        id: string;
        label: string;
        navDate: Date;
        parentNode: ITreeNode;
        addNode(node: ITreeNode): void;
        isCollection(): boolean;
        isManifest(): boolean;
        isRange(): boolean;
    }
}

declare module Manifesto {
    class TreeNode implements ITreeNode {
        data: any;
        nodes: ITreeNode[];
        selected: boolean;
        expanded: boolean;
        id: string;
        label: string;
        navDate: Date;
        parentNode: ITreeNode;
        constructor(label?: string, data?: any);
        addNode(node: ITreeNode): void;
        isCollection(): boolean;
        isManifest(): boolean;
        isRange(): boolean;
    }
}

declare module Manifesto {
    class TreeNodeType extends StringValue {
        static COLLECTION: TreeNodeType;
        static MANIFEST: TreeNodeType;
        static RANGE: TreeNodeType;
        collection(): TreeNodeType;
        manifest(): TreeNodeType;
        range(): TreeNodeType;
    }
}

declare var http: any;
declare var https: any;
declare var url: any;
declare var manifesto: IManifesto;
declare module Manifesto {
    class Utils {
        static getImageQuality(profile: Manifesto.ServiceProfile): string;
        static getInexactLocale(locale: string): string;
        static getLocalisedValue(resource: any, locale: string): string;
        static generateTreeNodeIds(treeNode: ITreeNode, index?: number): void;
        static isImageProfile(profile: Manifesto.ServiceProfile): boolean;
        static isLevel0ImageProfile(profile: Manifesto.ServiceProfile): boolean;
        static isLevel1ImageProfile(profile: Manifesto.ServiceProfile): boolean;
        static isLevel2ImageProfile(profile: Manifesto.ServiceProfile): boolean;
        static loadResource(uri: string): Promise<string>;
        static loadExternalResource(resource: IExternalResource, tokenStorageStrategy: string, clickThrough: (resource: IExternalResource) => Promise<void>, restricted: (resource: IExternalResource) => Promise<void>, login: (resource: IExternalResource) => Promise<void>, getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>, storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<void>, getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>, handleResourceResponse: (resource: IExternalResource) => Promise<any>, options?: IManifestoOptions): Promise<IExternalResource>;
        static createError(name: string, message: string): Error;
        static createAuthorizationFailedError(): Error;
        static createRestrictedError(): Error;
        static createInternalServerError(message: string): Error;
        static loadExternalResources(resources: IExternalResource[], tokenStorageStrategy: string, clickThrough: (resource: IExternalResource) => Promise<void>, restricted: (resource: IExternalResource) => Promise<void>, login: (resource: IExternalResource) => Promise<void>, getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>, storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<void>, getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>, handleResourceResponse: (resource: IExternalResource) => Promise<any>, options?: IManifestoOptions): Promise<IExternalResource[]>;
        static authorize(resource: IExternalResource, tokenStorageStrategy: string, clickThrough: (resource: IExternalResource) => Promise<void>, restricted: (resource: IExternalResource) => Promise<void>, login: (resource: IExternalResource) => Promise<void>, getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>, storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<void>, getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>): Promise<IExternalResource>;
        private static showAuthInteraction(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject);
        static getService(resource: any, profile: ServiceProfile | string): IService;
        static getResourceById(parentResource: IJSONLDResource, id: string): IJSONLDResource;
        static getAllArrays(obj: any): exjs.IEnumerable<any>;
        static getServices(resource: any): IService[];
    }
}

declare module Manifesto {
    class MetadataItem {
        label: TranslationCollection;
        value: TranslationCollection;
        defaultLocale: string;
        resource: any;
        constructor(defaultLocale: string);
        parse(resource: any): void;
        getLabel(): string;
        setLabel(value: string): void;
        getValue(): string;
        setValue(value: string): void;
    }
}

declare module Manifesto {
    class Translation {
        value: string;
        locale: string;
        constructor(value: string, locale: string);
    }
}

declare module Manifesto {
    class TranslationCollection extends Array<Translation> {
        static parse(translation: any, defaultLocale: string): TranslationCollection;
        static getValue(translationCollection: TranslationCollection, locale?: string): string;
    }
}


/// <reference path="StringValue.d.ts" />
/// <reference path="AnnotationMotivation.d.ts" />
/// <reference path="ElementType.d.ts" />
/// <reference path="IIIFResourceType.d.ts" />
/// <reference path="ManifestType.d.ts" />
/// <reference path="RenderingFormat.d.ts" />
/// <reference path="ResourceFormat.d.ts" />
/// <reference path="ResourceType.d.ts" />
/// <reference path="ServiceProfile.d.ts" />
/// <reference path="ViewingDirection.d.ts" />
/// <reference path="ViewingHint.d.ts" />
/// <reference path="JSONLDResource.d.ts" />
/// <reference path="ManifestResource.d.ts" />
/// <reference path="Element.d.ts" />
/// <reference path="Canvas.d.ts" />
/// <reference path="IIIFResource.d.ts" />
/// <reference path="Manifest.d.ts" />
/// <reference path="Collection.d.ts" />
/// <reference path="Range.d.ts" />
/// <reference path="Rendering.d.ts" />
/// <reference path="Sequence.d.ts" />
/// <reference path="Serialisation.d.ts" />
/// <reference path="Service.d.ts" />
/// <reference path="IThumb.d.ts" />
/// <reference path="Thumb.d.ts" />
/// <reference path="ITreeNode.d.ts" />
/// <reference path="TreeNode.d.ts" />
/// <reference path="TreeNodeType.d.ts" />
/// <reference path="Utils.d.ts" />
/// <reference path="MetadataItem.d.ts" />
/// <reference path="Translation.d.ts" />
/// <reference path="TranslationCollection.d.ts" />
/// <reference path="Manifesto.d.ts" />

declare module Manifesto {
    class Annotation extends ManifestResource implements IAnnotation {
        constructor(jsonld: any, options: IManifestoOptions);
        getMotivation(): AnnotationMotivation;
        getOn(): string;
        getResource(): Resource;
    }
}

declare module Manifesto {
    interface IAccessToken {
        accessToken: string;
        error: string;
        errorDescription: string;
        expiresIn: number;
        tokenType: string;
    }
}

declare module Manifesto {
    interface IAnnotation extends IManifestResource {
        getMotivation(): AnnotationMotivation;
        getOn(): string;
        getResource(): Resource;
    }
}

declare module Manifesto {
    interface ICanvas extends IElement {
        ranges: IRange[];
        getCanonicalImageUri(width?: number): string;
        getHeight(): number;
        getImages(): IAnnotation[];
        getIndex(): number;
        getWidth(): number;
    }
}

declare module Manifesto {
    interface ICollection extends IIIIFResource {
        getCollectionByIndex(index: number): Promise<ICollection>;
        getCollections(): ICollection[];
        getManifestByIndex(index: number): Promise<IManifest>;
        getManifests(): IManifest[];
        getTotalCollections(): number;
        getTotalManifests(): number;
        members: IIIIFResource[];
    }
}

declare module Manifesto {
    interface IElement extends IManifestResource {
        index: number;
        getResources(): IAnnotation[];
        getType(): ElementType;
    }
}

declare module Manifesto {
    interface IExternalResource {
        clickThroughService: IService;
        data: any;
        dataUri: string;
        error: any;
        getData(accessToken?: IAccessToken): Promise<IExternalResource>;
        height: number;
        isAccessControlled(): boolean;
        isResponseHandled: boolean;
        loginService: IService;
        logoutService: IService;
        restrictedService: IService;
        status: number;
        tokenService: IService;
        width: number;
        x: number;
        y: number;
    }
}

declare module Manifesto {
    interface IIIIFResource extends IManifestResource {
        defaultTree: ITreeNode;
        getAttribution(): TranslationCollection;
        getDefaultTree(): ITreeNode;
        getDescription(): TranslationCollection;
        getIIIFResourceType(): IIIFResourceType;
        getLabel(): TranslationCollection;
        getLicense(): string;
        getLogo(): string;
        getNavDate(): Date;
        getRelated(): any;
        getSeeAlso(): any;
        index: number;
        isCollection(): boolean;
        isLoaded: boolean;
        isManifest(): boolean;
        load(): Promise<IIIIFResource>;
        parentCollection: ICollection;
        parentLabel: string;
    }
}

declare module Manifesto {
    interface IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;
        getProperty(name: string): any;
    }
}

declare module Manifesto {
    interface IManifest extends Manifesto.IIIIFResource {
        getAllRanges(): IRange[];
        getManifestType(): ManifestType;
        getRangeById(id: string): Manifesto.IRange;
        getRangeByPath(path: string): IRange;
        getSequenceByIndex(index: number): ISequence;
        getSequences(): ISequence[];
        getTopRanges(): IRange[];
        getTotalSequences(): number;
        getTrackingLabel(): string;
        getViewingDirection(): Manifesto.ViewingDirection;
        getViewingHint(): ViewingHint;
        isMultiSequence(): boolean;
    }
}

interface IManifesto {
    AnnotationMotivation: Manifesto.AnnotationMotivation;
    create: (manifest: string, options?: Manifesto.IManifestoOptions) => Manifesto.IIIIFResource;
    ElementType: Manifesto.ElementType;
    IIIFResourceType: Manifesto.IIIFResourceType;
    loadManifest: (uri: string) => Promise<string>;
    ManifestType: Manifesto.ManifestType;
    MetadataItem: any;
    RenderingFormat: Manifesto.RenderingFormat;
    ResourceFormat: Manifesto.ResourceFormat;
    ResourceType: Manifesto.ResourceType;
    ServiceProfile: Manifesto.ServiceProfile;
    StatusCodes: Manifesto.IStatusCodes;
    Translation: any;
    TranslationCollection: any;
    TreeNode: any;
    TreeNodeType: Manifesto.TreeNodeType;
    Utils: any;
    ViewingDirection: Manifesto.ViewingDirection;
    ViewingHint: Manifesto.ViewingHint;
}

declare module Manifesto {
    interface IManifestoOptions {
        defaultLabel: string;
        locale: string;
        index?: number;
        resource: IIIIFResource;
        navDate?: Date;
        pessimisticAccessControl: boolean;
    }
}

declare module Manifesto {
    interface IManifestResource extends IJSONLDResource {
        externalResource: Manifesto.IExternalResource;
        options: IManifestoOptions;
        getLabel(): TranslationCollection;
        getMetadata(): MetadataItem[];
        getRendering(format: RenderingFormat | string): IRendering;
        getRenderings(): IRendering[];
        getService(profile: ServiceProfile | string): IService;
        getServices(): IService[];
        isAnnotation(): boolean;
        isCanvas(): boolean;
        isManifest(): boolean;
        isRange(): boolean;
        isSequence(): boolean;
    }
}

declare module Manifesto {
    interface IRange extends IManifestResource {
        getCanvasIds(): string[];
        getCanvases(): ICanvas[];
        getRanges(): IRange[];
        getTree(treeRoot: ITreeNode): ITreeNode;
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
        members: IManifestResource[];
        parentRange: IRange;
        path: string;
        treeNode: ITreeNode;
    }
}

declare module Manifesto {
    interface IRendering extends IManifestResource {
        getFormat(): RenderingFormat;
    }
}

declare module Manifesto {
    interface IResource extends IManifestResource {
        getFormat(): ResourceFormat;
        getHeight(): number;
        getWidth(): number;
    }
}

declare module Manifesto {
    interface ISequence extends IManifestResource {
        getCanvases(): ICanvas[];
        getCanvasById(id: string): ICanvas;
        getCanvasByIndex(index: number): ICanvas;
        getCanvasIndexById(id: string): number;
        getCanvasIndexByLabel(label: string, foliated: boolean): number;
        getLastCanvasLabel(digitsOnly?: boolean): string;
        getLastPageIndex(): number;
        getNextPageIndex(index: number): number;
        getPagedIndices(index: number): number[];
        getPrevPageIndex(index: number): number;
        getRendering(format: RenderingFormat | string): IRendering;
        getStartCanvas(): string;
        getStartCanvasIndex(): number;
        getThumbs(width: number, height: number): Manifesto.IThumb[];
        getTotalCanvases(): number;
        getViewingDirection(): Manifesto.ViewingDirection;
        getViewingHint(): Manifesto.ViewingHint;
        isCanvasIndexOutOfRange(index: number): boolean;
        isFirstCanvas(index: number): boolean;
        isLastCanvas(index: number): boolean;
        isMultiCanvas(): boolean;
        isPagingEnabled(): boolean;
        isTotalCanvasesEven(): boolean;
    }
}

declare module Manifesto {
    interface IService extends IManifestResource {
        getProfile(): ServiceProfile;
        getInfoUri(): string;
    }
}

declare module Manifesto {
    interface IStatusCodes {
        AUTHORIZATION_FAILED: number;
        FORBIDDEN: number;
        INTERNAL_SERVER_ERROR: number;
        RESTRICTED: number;
    }
}

declare module Manifesto {
    class Resource extends ManifestResource implements IResource {
        constructor(jsonld?: any, options?: IManifestoOptions);
        getFormat(): ResourceFormat;
        getType(): ResourceType;
        getWidth(): number;
        getHeight(): number;
        getMaxWidth(): number;
        getMaxHeight(): number;
    }
}
