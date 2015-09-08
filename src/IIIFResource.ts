var _assign = require("lodash.assign");

module Manifesto {
    export class IIIFResource extends ManifestResource implements IIIIFResource {
        public index: number = 0;
        public isLoaded: boolean = false;
        public parentCollection: ICollection;
        public treeRoot: TreeNode;

        constructor(jsonld: any, options?: IManifestoOptions) {
            super(jsonld, options);

            var defaultOptions: IManifestoOptions = {
                defaultLabel: '-',
                locale: 'en-GB',
                pessimisticAccessControl: false
            };

            this.options = _assign(defaultOptions, options);
        }

        getAttribution(): string {
            return Utils.getLocalisedValue(this.getProperty('attribution'), this.options.locale);
        }

        getDescription(): string {
            return Utils.getLocalisedValue(this.getProperty('description'), this.options.locale);
        }

        getIIIFResourceType(): IIIFResourceType {
            return new IIIFResourceType(this.getProperty('@type'));
        }

        getLogo(): string {
            return this.getProperty('logo');
        }

        getLicense(): string {
            return Utils.getLocalisedValue(this.getProperty('license'), this.options.locale);
        }

        getSeeAlso(): any {
            return Utils.getLocalisedValue(this.getProperty('seeAlso'), this.options.locale);
        }

        getTitle(): string {
            return Utils.getLocalisedValue(this.getProperty('label'), this.options.locale);
        }

        getTree(): TreeNode{
            this.treeRoot = new TreeNode('root');
            this.treeRoot.data = this;
            return this.treeRoot;
        }

        load(): Promise<IIIIFResource> {
            var that = this;
            return new Promise<IIIIFResource>((resolve, reject) => {
                if (that.isLoaded) {
                    resolve(that);
                } else {
                    var options = that.options;
                    Utils.loadResource(that.__jsonld['@id']).then(function(data) {
                        that.isLoaded = true;
                        resolve(Deserialiser.parse(data, options));
                    });
                }
            });
        }
    }
}