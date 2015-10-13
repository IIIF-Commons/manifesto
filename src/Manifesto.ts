module.exports = <IManifesto>{

    AnnotationMotivation: new Manifesto.AnnotationMotivation(),
    CanvasType: new Manifesto.CanvasType(),
    ElementType: new Manifesto.ElementType(),
    IIIFResourceType: new Manifesto.IIIFResourceType(),
    ManifestType: new Manifesto.ManifestType(),
    RenderingFormat: new Manifesto.RenderingFormat(),
    ResourceFormat: new Manifesto.ResourceFormat(),
    ResourceType: new Manifesto.ResourceType(),
    ServiceProfile: new Manifesto.ServiceProfile(),
    TreeNodeType: new Manifesto.TreeNodeType(),
    ViewingDirection: new Manifesto.ViewingDirection(),
    ViewingHint: new Manifesto.ViewingHint(),

    create: function(manifest: string, options?: Manifesto.IManifestoOptions): Manifesto.IIIIFResource {
        return Manifesto.Deserialiser.parse(manifest, options);
    },

    // todo: deprecate this - temporary to enable current UV download menu
    getRenderings(resource: any): Manifesto.IRendering[] {
        return Manifesto.Utils.getRenderings(resource);
    },

    getService: function(resource: any, profile: Manifesto.ServiceProfile | string): Manifesto.IService {
        return Manifesto.Utils.getService(resource, profile);
    },

    // todo: enable this syntax: var treeNode = new manifesto.TreeNode()
    getTreeNode: function () {
        return new Manifesto.TreeNode();
    },

    isImageProfile: function(profile: Manifesto.ServiceProfile) {
        if (profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString() ||
            profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1.toString() ||
            profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2.toString() ||
            profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL1.toString() ||
            profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL2.toString()){
            return true;
        }

        return false;
    },

    loadExternalResources: function(resources: Manifesto.IExternalResource[],
                                    clickThrough: (resource: Manifesto.IExternalResource) => Promise<void>,
                                    login: (resource: Manifesto.IExternalResource) => Promise<void>,
                                    getAccessToken: (resource: Manifesto.IExternalResource) => Promise<Manifesto.IAccessToken>,
                                    storeAccessToken: (resource: Manifesto.IExternalResource, token: Manifesto.IAccessToken) => Promise<void>,
                                    getStoredAccessToken: (resource: Manifesto.IExternalResource) => Promise<Manifesto.IAccessToken>,
                                    handleResourceResponse: (resource: Manifesto.IExternalResource) => Promise<any>,
                                    options?: Manifesto.IManifestoOptions): Promise<Manifesto.IExternalResource[]>{
        return Manifesto.Utils.loadExternalResources(resources, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options);
    },

    loadManifest: function (uri: string): Promise<any> {
        return Manifesto.Utils.loadResource(uri);
    }
};