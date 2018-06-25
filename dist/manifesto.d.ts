// manifesto v2.2.27 https://github.com/iiif-commons/manifesto

declare namespace Manifesto {
    class StringValue {
        value: string;
        constructor(value?: string);
        toString(): string;
    }
}

declare namespace Manifesto {
    class Duration {
        start: number;
        end: number;
        constructor(start: number, end: number);
        getLength(): number;
    }
}

declare namespace Manifesto {
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

declare namespace Manifesto {
    class Behavior extends StringValue {
        static AUTOADVANCE: Behavior;
        static NONAV: Behavior;
        autoadvance(): Behavior;
        nonav(): Behavior;
    }
}

declare namespace Manifesto {
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

declare namespace Manifesto {
    class ManifestType extends StringValue {
        static EMPTY: ManifestType;
        static MANUSCRIPT: ManifestType;
        static MONOGRAPH: ManifestType;
        empty(): ManifestType;
        manuscript(): ManifestType;
        monograph(): ManifestType;
    }
}

declare namespace Manifesto {
    class RenderingFormat extends StringValue {
        static PDF: RenderingFormat;
        static DOC: RenderingFormat;
        static DOCX: RenderingFormat;
        pdf(): RenderingFormat;
        doc(): RenderingFormat;
        docx(): RenderingFormat;
    }
}

declare namespace Manifesto {
    class MediaType extends StringValue {
        static JPG: MediaType;
        static MP4: MediaType;
        static PDF: MediaType;
        static THREEJS: MediaType;
        static WEBM: MediaType;
        jpg(): MediaType;
        mp4(): MediaType;
        pdf(): MediaType;
        threejs(): MediaType;
        webm(): MediaType;
    }
}

declare namespace Manifesto {
    class ResourceType extends StringValue {
        static CANVAS: ResourceType;
        static CHOICE: ResourceType;
        static DOCUMENT: ResourceType;
        static IMAGE: ResourceType;
        static MOVINGIMAGE: ResourceType;
        static PHYSICALOBJECT: ResourceType;
        static SOUND: ResourceType;
        static TEXT: ResourceType;
        canvas(): ResourceType;
        choice(): ResourceType;
        document(): ResourceType;
        image(): ResourceType;
        movingimage(): ResourceType;
        physicalobject(): ResourceType;
        sound(): ResourceType;
        text(): ResourceType;
    }
}

declare namespace Manifesto {
    class ServiceProfile extends StringValue {
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
        static AUTHCLICKTHROUGH: ServiceProfile;
        static AUTHLOGIN: ServiceProfile;
        static AUTHLOGOUT: ServiceProfile;
        static AUTHRESTRICTED: ServiceProfile;
        static AUTHTOKEN: ServiceProfile;
        static AUTH1CLICKTHROUGH: ServiceProfile;
        static AUTH1EXTERNAL: ServiceProfile;
        static AUTH1KIOSK: ServiceProfile;
        static AUTH1LOGIN: ServiceProfile;
        static AUTH1LOGOUT: ServiceProfile;
        static AUTH1TOKEN: ServiceProfile;
        static AUTOCOMPLETE: ServiceProfile;
        static SEARCH: ServiceProfile;
        static TRACKINGEXTENSIONS: ServiceProfile;
        static UIEXTENSIONS: ServiceProfile;
        static PRINTEXTENSIONS: ServiceProfile;
        static SHAREEXTENSIONS: ServiceProfile;
        static OTHERMANIFESTATIONS: ServiceProfile;
        static IXIF: ServiceProfile;
        auth1Clickthrough(): ServiceProfile;
        auth1External(): ServiceProfile;
        auth1Kiosk(): ServiceProfile;
        auth1Login(): ServiceProfile;
        auth1Logout(): ServiceProfile;
        auth1Token(): ServiceProfile;
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
        search(): ServiceProfile;
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

declare namespace Manifesto {
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

declare namespace Manifesto {
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

declare namespace Manifesto {
    class JSONLDResource implements IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;
        constructor(jsonld?: any);
        getProperty(name: string): any;
    }
}

declare namespace Manifesto {
    class ManifestResource extends JSONLDResource implements IManifestResource {
        externalResource: IExternalResource;
        options: IManifestoOptions;
        constructor(jsonld: any, options?: IManifestoOptions);
        getIIIFResourceType(): IIIFResourceType;
        getLabel(): TranslationCollection;
        getMetadata(): MetadataItem[];
        getRendering(format: RenderingFormat | string): IRendering | null;
        getRenderings(): IRendering[];
        getService(profile: ServiceProfile | string): IService | null;
        getServices(): IService[];
        getThumbnail(): Thumbnail | null;
        isAnnotation(): boolean;
        isCanvas(): boolean;
        isCollection(): boolean;
        isManifest(): boolean;
        isRange(): boolean;
        isSequence(): boolean;
    }
}

declare namespace Manifesto {
    class Resource extends ManifestResource implements IResource {
        index: number;
        constructor(jsonld?: any, options?: IManifestoOptions);
        getFormat(): MediaType | null;
        getResources(): IAnnotation[];
        getType(): ResourceType | null;
        getWidth(): number;
        getHeight(): number;
        getMaxWidth(): number;
        getMaxHeight(): number | null;
    }
}

declare namespace Manifesto {
    class Canvas extends Resource implements ICanvas {
        ranges: IRange[];
        constructor(jsonld?: any, options?: IManifestoOptions);
        getCanonicalImageUri(w?: number): string;
        getMaxDimensions(): Size | null;
        getContent(): IAnnotation[];
        getDuration(): number | null;
        getImages(): IAnnotation[];
        getIndex(): number;
        getOtherContent(): Promise<AnnotationList[]>;
        getWidth(): number;
        getHeight(): number;
    }
}

declare namespace Manifesto {
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
        getLogo(): string | null;
        getLicense(): string | null;
        getNavDate(): Date;
        getRelated(): any;
        getSeeAlso(): any;
        getLabel(): TranslationCollection;
        getDefaultLabel(): string | null;
        getDefaultTree(): ITreeNode;
        isCollection(): boolean;
        isManifest(): boolean;
        load(): Promise<IIIIFResource>;
    }
}

declare namespace Manifesto {
    class Manifest extends IIIFResource implements IManifest {
        index: number;
        private _allRanges;
        items: ISequence[];
        private _topRanges;
        constructor(jsonld?: any, options?: IManifestoOptions);
        getBehavior(): Behavior | null;
        getDefaultTree(): ITreeNode;
        private _getTopRanges();
        getTopRanges(): IRange[];
        private _getRangeById(id);
        private _parseRanges(r, path, parentRange?);
        getAllRanges(): IRange[];
        getRangeById(id: string): IRange | null;
        getRangeByPath(path: string): IRange | null;
        getSequences(): ISequence[];
        getSequenceByIndex(sequenceIndex: number): ISequence;
        getTotalSequences(): number;
        getManifestType(): ManifestType;
        getTrackingLabel(): string;
        isMultiSequence(): boolean;
        isPagingEnabled(): boolean;
        getViewingDirection(): ViewingDirection | null;
        getViewingHint(): ViewingHint | null;
    }
}

declare namespace Manifesto {
    class Collection extends IIIFResource implements ICollection {
        items: IIIIFResource[];
        private _collections;
        private _manifests;
        constructor(jsonld: any, options: IManifestoOptions);
        getCollections(): ICollection[];
        getManifests(): IManifest[];
        getCollectionByIndex(collectionIndex: number): Promise<ICollection>;
        getManifestByIndex(manifestIndex: number): Promise<IManifest>;
        getTotalCollections(): number;
        getTotalManifests(): number;
        getTotalItems(): number;
        getViewingDirection(): ViewingDirection;
        /**
         * Get a tree of sub collections and manifests, using each child manifest's first 'top' range.
         */
        getDefaultTree(): ITreeNode;
        private _parseManifests(parentCollection);
        private _parseCollections(parentCollection);
    }
}

declare namespace Manifesto {
    class Range extends ManifestResource implements IRange {
        private _ranges;
        canvases: string[] | null;
        items: IManifestResource[];
        parentRange: Range;
        path: string;
        treeNode: ITreeNode;
        constructor(jsonld?: any, options?: IManifestoOptions);
        getCanvasIds(): string[];
        getDuration(): Duration | undefined;
        getRanges(): IRange[];
        getBehavior(): Behavior | null;
        getViewingDirection(): ViewingDirection | null;
        getViewingHint(): ViewingHint | null;
        getTree(treeRoot: ITreeNode): ITreeNode;
        spansTime(time: number): boolean;
        private _parseTreeNode(node, range);
    }
}

declare namespace Manifesto {
    class Rendering extends ManifestResource implements IRendering {
        constructor(jsonld?: any, options?: IManifestoOptions);
        getFormat(): RenderingFormat;
    }
}

declare namespace Manifesto {
    class Sequence extends ManifestResource implements ISequence {
        items: ICanvas[];
        private _thumbnails;
        constructor(jsonld?: any, options?: IManifestoOptions);
        getCanvases(): ICanvas[];
        getCanvasById(id: string): ICanvas | null;
        getCanvasByIndex(canvasIndex: number): any;
        getCanvasIndexById(id: string): number | null;
        getCanvasIndexByLabel(label: string, foliated?: boolean): number;
        getLastCanvasLabel(alphanumeric?: boolean): string;
        getLastPageIndex(): number;
        getNextPageIndex(canvasIndex: number, pagingEnabled?: boolean): number;
        getPagedIndices(canvasIndex: number, pagingEnabled?: boolean): number[];
        getPrevPageIndex(canvasIndex: number, pagingEnabled?: boolean): number;
        getStartCanvasIndex(): number;
        getThumbs(width: number, height?: number): Manifesto.IThumb[];
        getThumbnails(): Manifesto.IThumbnail[];
        getStartCanvas(): string;
        getTotalCanvases(): number;
        getViewingDirection(): ViewingDirection | null;
        getViewingHint(): ViewingHint | null;
        isCanvasIndexOutOfRange(canvasIndex: number): boolean;
        isFirstCanvas(canvasIndex: number): boolean;
        isLastCanvas(canvasIndex: number): boolean;
        isMultiCanvas(): boolean;
        isPagingEnabled(): boolean;
        isTotalCanvasesEven(): boolean;
    }
}

declare namespace Manifesto {
    class Deserialiser {
        static parse(manifest: any, options?: IManifestoOptions): IIIIFResource | null;
        static parseJson(json: any, options?: IManifestoOptions): IIIIFResource | null;
        static parseCollection(json: any, options?: IManifestoOptions): ICollection;
        static parseCollections(collection: ICollection, options?: IManifestoOptions): void;
        static parseManifest(json: any, options?: IManifestoOptions): IManifest;
        static parseManifests(collection: ICollection, options?: IManifestoOptions): void;
        static parseItem(json: any, options?: IManifestoOptions): IIIIFResource | null;
        static parseItems(collection: ICollection, options?: IManifestoOptions): void;
    }
    class Serialiser {
        static serialise(manifest: IManifest): string;
    }
}

declare namespace Manifesto {
    class Service extends ManifestResource implements IService {
        constructor(jsonld?: any, options?: IManifestoOptions);
        getProfile(): ServiceProfile;
        getConfirmLabel(): string | null;
        getDescription(): string | null;
        getFailureDescription(): string | null;
        getFailureHeader(): string | null;
        getHeader(): string | null;
        getServiceLabel(): string | null;
        getInfoUri(): string;
    }
}

declare namespace Manifesto {
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

declare namespace Manifesto {
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

declare namespace Manifesto {
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

declare namespace Manifesto {
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

declare namespace Manifesto {
    class TreeNodeType extends StringValue {
        static COLLECTION: TreeNodeType;
        static MANIFEST: TreeNodeType;
        static RANGE: TreeNodeType;
        collection(): TreeNodeType;
        manifest(): TreeNodeType;
        range(): TreeNodeType;
    }
}

declare const http: any;
declare const https: any;
declare const url: any;
declare var manifesto: IManifesto;
declare namespace Manifesto {
    class Utils {
        static getMediaType(type: string): string;
        static getImageQuality(profile: Manifesto.ServiceProfile): string;
        static getInexactLocale(locale: string): string;
        static getLocalisedValue(resource: any, locale: string): string | null;
        static generateTreeNodeIds(treeNode: ITreeNode, index?: number): void;
        static normaliseType(type: string): string;
        static normaliseUrl(url: string): string;
        static normalisedUrlsMatch(url1: string, url2: string): boolean;
        static isImageProfile(profile: Manifesto.ServiceProfile): boolean;
        static isLevel0ImageProfile(profile: Manifesto.ServiceProfile): boolean;
        static isLevel1ImageProfile(profile: Manifesto.ServiceProfile): boolean;
        static isLevel2ImageProfile(profile: Manifesto.ServiceProfile): boolean;
        static loadResource(uri: string): Promise<string>;
        static loadExternalResourcesAuth1(resources: IExternalResource[], openContentProviderInteraction: (service: Manifesto.IService) => any, openTokenService: (resource: Manifesto.IExternalResource, tokenService: Manifesto.IService) => Promise<any>, getStoredAccessToken: (resource: Manifesto.IExternalResource) => Promise<Manifesto.IAccessToken | null>, userInteractedWithContentProvider: (contentProviderInteraction: any) => Promise<any>, getContentProviderInteraction: (resource: IExternalResource, service: Manifesto.IService) => Promise<any>, handleMovedTemporarily: (resource: IExternalResource) => Promise<any>, showOutOfOptionsMessages: (resource: IExternalResource, service: Manifesto.IService) => void): Promise<IExternalResource[]>;
        static loadExternalResourceAuth1(resource: IExternalResource, openContentProviderInteraction: (service: Manifesto.IService) => any, openTokenService: (resource: Manifesto.IExternalResource, tokenService: Manifesto.IService) => Promise<void>, getStoredAccessToken: (resource: Manifesto.IExternalResource) => Promise<Manifesto.IAccessToken | null>, userInteractedWithContentProvider: (contentProviderInteraction: any) => Promise<any>, getContentProviderInteraction: (resource: IExternalResource, service: Manifesto.IService) => Promise<any>, handleMovedTemporarily: (resource: IExternalResource) => Promise<any>, showOutOfOptionsMessages: (resource: IExternalResource, service: Manifesto.IService) => void): Promise<IExternalResource>;
        static doAuthChain(resource: IExternalResource, openContentProviderInteraction: (service: Manifesto.IService) => any, openTokenService: (resource: Manifesto.IExternalResource, tokenService: Manifesto.IService) => Promise<any>, userInteractedWithContentProvider: (contentProviderInteraction: any) => Promise<any>, getContentProviderInteraction: (resource: IExternalResource, service: Manifesto.IService) => Promise<any>, handleMovedTemporarily: (resource: IExternalResource) => Promise<any>, showOutOfOptionsMessages: (resource: IExternalResource, service: Manifesto.IService) => void): Promise<Manifesto.IExternalResource | void>;
        static attemptResourceWithToken(resource: Manifesto.IExternalResource, openTokenService: (resource: Manifesto.IExternalResource, tokenService: Manifesto.IService) => Promise<any>, authService: Manifesto.IService): Promise<Manifesto.IExternalResource | void>;
        static loadExternalResourcesAuth09(resources: IExternalResource[], tokenStorageStrategy: string, clickThrough: (resource: IExternalResource) => Promise<any>, restricted: (resource: IExternalResource) => Promise<any>, login: (resource: IExternalResource) => Promise<any>, getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>, storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<any>, getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>, handleResourceResponse: (resource: IExternalResource) => Promise<any>, options?: IManifestoOptions): Promise<IExternalResource[]>;
        static loadExternalResourceAuth09(resource: IExternalResource, tokenStorageStrategy: string, clickThrough: (resource: IExternalResource) => Promise<any>, restricted: (resource: IExternalResource) => Promise<any>, login: (resource: IExternalResource) => Promise<any>, getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>, storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<any>, getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>, handleResourceResponse: (resource: IExternalResource) => Promise<any>, options?: IManifestoOptions): Promise<IExternalResource>;
        static createError(name: string, message: string): Error;
        static createAuthorizationFailedError(): Error;
        static createRestrictedError(): Error;
        static createInternalServerError(message: string): Error;
        static authorize(resource: IExternalResource, tokenStorageStrategy: string, clickThrough: (resource: IExternalResource) => Promise<any>, restricted: (resource: IExternalResource) => Promise<any>, login: (resource: IExternalResource) => Promise<any>, getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>, storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<any>, getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>): Promise<IExternalResource>;
        private static showAuthInteraction(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject);
        static getService(resource: any, profile: ServiceProfile | string): IService | null;
        static getResourceById(parentResource: IJSONLDResource, id: string): IJSONLDResource;
        static getAllArrays(obj: any): any[];
        static getServices(resource: any): IService[];
        static getTemporalComponent(target: string): number[] | null;
    }
}

declare namespace Manifesto {
    class MetadataItem {
        label: TranslationCollection;
        value: TranslationCollection;
        defaultLocale: string;
        resource: any;
        constructor(defaultLocale: string);
        parse(resource: any): void;
        getLabel(): string | null;
        setLabel(value: string): void;
        getValue(): string | null;
        setValue(value: string): void;
    }
}

declare namespace Manifesto {
    class Translation {
        value: string;
        locale: string;
        constructor(value: string, locale: string);
    }
}

declare namespace Manifesto {
    class TranslationCollection extends Array<Translation> {
        static parse(translation: any, defaultLocale: string): TranslationCollection;
        static getValue(translationCollection: TranslationCollection, locale?: string): string | null;
    }
}

declare namespace Manifesto {
    class Size {
        width: number;
        height: number;
        constructor(width: number, height: number);
    }
}


declare namespace Manifesto {
    class Annotation extends ManifestResource implements IAnnotation {
        constructor(jsonld: any, options: IManifestoOptions);
        getBody(): IAnnotationBody[];
        getMotivation(): AnnotationMotivation | null;
        getOn(): string;
        getTarget(): string | null;
        getResource(): Resource;
    }
}

declare namespace Manifesto {
    class AnnotationBody extends ManifestResource {
        constructor(jsonld?: any, options?: IManifestoOptions);
        getFormat(): MediaType | null;
        getType(): ResourceType | null;
    }
}

declare namespace Manifesto {
    class AnnotationList extends JSONLDResource implements IAnnotationList {
        options: IManifestoOptions;
        label: string;
        isLoaded: boolean;
        constructor(label: any, jsonld?: any, options?: IManifestoOptions);
        getIIIFResourceType(): IIIFResourceType;
        getLabel(): string;
        getResources(): Annotation[];
        load(): Promise<AnnotationList>;
    }
}

declare namespace Manifesto {
    class AnnotationPage extends ManifestResource implements IAnnotationPage {
        constructor(jsonld: any, options: IManifestoOptions);
        getItems(): IAnnotation[];
    }
}

declare namespace Manifesto {
    interface IAccessToken {
        accessToken: string;
        error: string;
        errorDescription: string;
        expiresIn: number;
        tokenType: string;
    }
}

declare namespace Manifesto {
    interface IAnnotation extends IManifestResource {
        getBody(): IAnnotationBody[];
        getMotivation(): AnnotationMotivation | null;
        getOn(): string;
        getResource(): Resource;
        getTarget(): string | null;
    }
}

declare namespace Manifesto {
    interface IAnnotationBody extends IManifestResource {
        getFormat(): MediaType | null;
        getType(): ResourceType | null;
    }
}

declare namespace Manifesto {
    interface IAnnotationList extends IJSONLDResource {
    }
}

declare namespace Manifesto {
    interface IAnnotationPage extends IManifestResource {
        getItems(): IAnnotation[];
    }
}

declare namespace Manifesto {
    interface ICanvas extends IResource {
        ranges: IRange[];
        getCanonicalImageUri(width?: number): string;
        getContent(): IAnnotation[];
        getDuration(): number | null;
        getHeight(): number;
        getImages(): IAnnotation[];
        getIndex(): number;
        getMaxDimensions(): Size | null;
        getWidth(): number;
    }
}

declare namespace Manifesto {
    interface ICollection extends IIIIFResource {
        getCollectionByIndex(index: number): Promise<ICollection>;
        getCollections(): ICollection[];
        getManifestByIndex(index: number): Promise<IManifest>;
        getManifests(): IManifest[];
        getTotalCollections(): number;
        getTotalManifests(): number;
        getViewingDirection(): Manifesto.ViewingDirection;
        items: IIIIFResource[];
    }
}

declare namespace Manifesto {
    interface IExternalImageResourceData extends IExternalResourceData {
        width: number;
        height: number;
    }
}

declare namespace Manifesto {
    interface IExternalResource {
        authAPIVersion: number;
        authHoldingPage: any;
        clickThroughService: IService | null;
        data: IExternalResourceData;
        dataUri: string | null;
        error: any;
        externalService: IService | null;
        getData(accessToken?: IAccessToken): Promise<IExternalResource>;
        hasServiceDescriptor(): boolean;
        height: number;
        index: number;
        isAccessControlled(): boolean;
        isResponseHandled: boolean;
        kioskService: IService | null;
        loginService: IService | null;
        logoutService: IService | null;
        options?: IManifestoOptions;
        restrictedService: IService | null;
        status: number;
        tokenService: IService | null;
        width: number;
    }
}

declare namespace Manifesto {
    interface IExternalResourceData {
        hasServiceDescriptor: boolean;
        id: string;
        index: number;
        profile: string | any[];
    }
}

declare namespace Manifesto {
    interface IExternalResourceOptions {
        authApiVersion: number;
    }
}

declare namespace Manifesto {
    interface IIIIFResource extends IManifestResource {
        defaultTree: ITreeNode;
        getAttribution(): TranslationCollection;
        getDefaultLabel(): string | null;
        getDefaultTree(): ITreeNode;
        getDescription(): TranslationCollection;
        getIIIFResourceType(): IIIFResourceType;
        getLabel(): TranslationCollection;
        getLicense(): string | null;
        getLogo(): string | null;
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

declare namespace Manifesto {
    interface IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;
        getProperty(name: string): any;
    }
}

declare namespace Manifesto {
    interface IManifest extends Manifesto.IIIIFResource {
        getAllRanges(): IRange[];
        getBehavior(): Behavior | null;
        getManifestType(): ManifestType;
        getRangeById(id: string): Manifesto.IRange | null;
        getRangeByPath(path: string): IRange | null;
        getSequenceByIndex(index: number): ISequence;
        getSequences(): ISequence[];
        getTopRanges(): IRange[];
        getTotalSequences(): number;
        getTrackingLabel(): string;
        getViewingDirection(): Manifesto.ViewingDirection | null;
        getViewingHint(): ViewingHint | null;
        isMultiSequence(): boolean;
        isPagingEnabled(): boolean;
        items: ISequence[];
    }
}

interface IManifesto {
    AnnotationMotivation: Manifesto.AnnotationMotivation;
    Behavior: Manifesto.Behavior;
    create: (manifest: string, options?: Manifesto.IManifestoOptions) => Manifesto.IIIIFResource;
    IIIFResourceType: Manifesto.IIIFResourceType;
    loadManifest: (uri: string) => Promise<string>;
    ManifestType: Manifesto.ManifestType;
    MediaType: Manifesto.MediaType;
    MetadataItem: any;
    RenderingFormat: Manifesto.RenderingFormat;
    ResourceType: Manifesto.ResourceType;
    ServiceProfile: Manifesto.ServiceProfile;
    Size: any;
    StatusCodes: Manifesto.IStatusCodes;
    Translation: any;
    TranslationCollection: any;
    TreeNode: any;
    TreeNodeType: Manifesto.TreeNodeType;
    Utils: any;
    ViewingDirection: Manifesto.ViewingDirection;
    ViewingHint: Manifesto.ViewingHint;
}

declare namespace Manifesto {
    interface IManifestoOptions {
        defaultLabel: string;
        locale: string;
        index?: number;
        resource: IIIIFResource;
        navDate?: Date;
        pessimisticAccessControl: boolean;
    }
}

declare namespace Manifesto {
    interface IManifestResource extends IJSONLDResource {
        externalResource: Manifesto.IExternalResource;
        options: IManifestoOptions;
        getLabel(): TranslationCollection;
        getMetadata(): MetadataItem[];
        getRendering(format: RenderingFormat | string): IRendering | null;
        getRenderings(): IRendering[];
        getService(profile: ServiceProfile | string): IService | null;
        getServices(): IService[];
        getThumbnail(): Thumbnail | null;
        isAnnotation(): boolean;
        isCanvas(): boolean;
        isManifest(): boolean;
        isRange(): boolean;
        isSequence(): boolean;
    }
}

declare namespace Manifesto {
    interface IRange extends IManifestResource {
        canvases: string[] | null;
        getBehavior(): Behavior | null;
        getCanvasIds(): string[];
        getDuration(): Duration | undefined;
        getRanges(): IRange[];
        getTree(treeRoot: ITreeNode): ITreeNode;
        getViewingDirection(): ViewingDirection | null;
        getViewingHint(): ViewingHint | null;
        items: IManifestResource[];
        parentRange: IRange | undefined;
        path: string;
        spansTime(time: number): boolean;
        treeNode: ITreeNode;
    }
}

declare namespace Manifesto {
    interface IRendering extends IManifestResource {
        getFormat(): RenderingFormat;
    }
}

declare namespace Manifesto {
    interface IResource extends IManifestResource {
        getFormat(): MediaType | null;
        getHeight(): number;
        getMaxHeight(): number | null;
        getResources(): IAnnotation[];
        getType(): ResourceType | null;
        getWidth(): number;
        index: number;
    }
}

declare namespace Manifesto {
    interface ISequence extends IManifestResource {
        getCanvasById(id: string): ICanvas | null;
        getCanvasByIndex(index: number): ICanvas;
        getCanvases(): ICanvas[];
        getCanvasIndexById(id: string): number | null;
        getCanvasIndexByLabel(label: string, foliated: boolean): number;
        getLastCanvasLabel(digitsOnly?: boolean): string;
        getLastPageIndex(): number;
        getNextPageIndex(index: number): number;
        getPagedIndices(index: number): number[];
        getPrevPageIndex(index: number): number;
        getRendering(format: RenderingFormat | string): IRendering | null;
        getStartCanvas(): string;
        getStartCanvasIndex(): number;
        getThumbnails(): Manifesto.IThumbnail[];
        getThumbs(width: number, height: number): Manifesto.IThumb[];
        getTotalCanvases(): number;
        getViewingDirection(): Manifesto.ViewingDirection | null;
        getViewingHint(): Manifesto.ViewingHint | null;
        isCanvasIndexOutOfRange(index: number): boolean;
        isFirstCanvas(index: number): boolean;
        isLastCanvas(index: number): boolean;
        isMultiCanvas(): boolean;
        isPagingEnabled(): boolean;
        isTotalCanvasesEven(): boolean;
        items: ICanvas[];
    }
}

declare namespace Manifesto {
    interface IService extends IManifestResource {
        getConfirmLabel(): string | null;
        getDescription(): string | null;
        getFailureDescription(): string | null;
        getFailureHeader(): string | null;
        getHeader(): string | null;
        getInfoUri(): string;
        getProfile(): ServiceProfile;
        getServiceLabel(): string | null;
    }
}

declare namespace Manifesto {
    interface IStatusCodes {
        AUTHORIZATION_FAILED: number;
        FORBIDDEN: number;
        INTERNAL_SERVER_ERROR: number;
        RESTRICTED: number;
    }
}

declare namespace Manifesto {
    interface IThumbnail extends IResource {
    }
}

declare namespace Manifesto {
    class Thumbnail extends Resource implements IThumbnail {
        constructor(jsonld: any, options: IManifestoOptions);
    }
}
