var _assign = require("lodash.assign");

module Manifesto {
    export class IIIFResource extends ManifestResource implements IIIIFResource {
        public defaultTree: ITreeNode;
        public index: number = -1;
        public isLoaded: boolean = false;
        public parentCollection: ICollection;
        public parentLabel: string;

        constructor(jsonld?: any, options?: IManifestoOptions) {
            super(jsonld, options);

            var defaultOptions: IManifestoOptions = {
                defaultLabel: '-',
                locale: 'en-GB',
                resource: <IIIIFResource>this,
                pessimisticAccessControl: false
            };

            this.options = _assign(defaultOptions, options);
        }

        getAttribution(): TranslationCollection {
            var attribution: any = this.getProperty('attribution');

            if (attribution) {
                return TranslationCollection.parse(attribution, this.options.locale);
            }
            
            return [];
        }

        getDescription(): TranslationCollection {
            var description: any = this.getProperty('description');

            if (description) {
                return TranslationCollection.parse(description, this.options.locale);
            }

            return [];
        }

        getIIIFResourceType(): IIIFResourceType {
            return new IIIFResourceType(this.getProperty('@type'));
        }

        getLogo(): string {
            var logo = this.getProperty('logo');
            if (!logo) return null;
            if (_isString(logo)) return logo;
            return logo['@id'];
        }

        getLicense(): string {
            return Utils.getLocalisedValue(this.getProperty('license'), this.options.locale);
        }

        getNavDate(): Date {
            return new Date(this.getProperty('navDate'));
        }

        getRelated(): any {
            return this.getProperty('related');
        }

        getSeeAlso(): any {
            return this.getProperty('seeAlso');
        }

        getLabel(): TranslationCollection {
            var label: any = this.getProperty('label');

            if (label) {
                return TranslationCollection.parse(label, this.options.locale);
            }
            
            return [];
        }

        getDefaultTree(): ITreeNode{
            this.defaultTree = new TreeNode('root');
            this.defaultTree.data = this;
            return this.defaultTree;
        }

        isCollection(): boolean {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.COLLECTION.toString();
        }

        isManifest(): boolean {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.MANIFEST.toString();
        }

        load(): Promise<IIIIFResource> {
            var that = this;
            return new Promise<IIIIFResource>((resolve, reject) => {
                if (that.isLoaded) {
                    resolve(that);
                } else {
                    var options = that.options;
                    options.navDate = that.getNavDate();
                    Utils.loadResource(that.__jsonld['@id']).then(function(data) {
                        that.parentLabel = TranslationCollection.getValue(that.getLabel(), options.locale);
                        var parsed = Deserialiser.parse(data, options);
                        that = _assign(that, parsed);
                        that.index = options.index;

                        resolve(that);
                    });
                }
            });
        }
    }
}