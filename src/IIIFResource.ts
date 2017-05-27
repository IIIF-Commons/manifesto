namespace Manifesto {
    export class IIIFResource extends ManifestResource implements IIIIFResource {
        public defaultTree: ITreeNode;
        public index: number = -1;
        public isLoaded: boolean = false;
        public parentCollection: ICollection;
        public parentLabel: string;

        constructor(jsonld?: any, options?: IManifestoOptions) {
            super(jsonld, options);

            const defaultOptions: IManifestoOptions = {
                defaultLabel: '-',
                locale: 'en-GB',
                resource: <IIIIFResource>this,
                pessimisticAccessControl: false
            };

            this.options = Object.assign(defaultOptions, options);
        }

        getAttribution(): TranslationCollection {
            const attribution: any = this.getProperty('attribution');

            if (attribution) {
                return TranslationCollection.parse(attribution, this.options.locale);
            }
            
            return [];
        }

        getDescription(): TranslationCollection {
            const description: any = this.getProperty('description');

            if (description) {
                return TranslationCollection.parse(description, this.options.locale);
            }

            return [];
        }

        getIIIFResourceType(): IIIFResourceType {

            let type: string = this.getProperty('type');

            if (type) {
                return new IIIFResourceType(type);
            }

            type = this.getProperty('@type');
            return new IIIFResourceType(type);
        }

        getLogo(): string | null {
            const logo: any = this.getProperty('logo');
            if (!logo) return null;
            if (typeof(logo) === 'string') return logo;
            return logo['@id'];
        }

        getLicense(): string | null {
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
            const label: any = this.getProperty('label');

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
            if (this.getIIIFResourceType().toString().toLowerCase() === 'collection') { // todo: use constant
                return true;
            } else if (this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.COLLECTION.toString()) {
                return true;
            }
            return false;
        }

        isManifest(): boolean {
            if (this.getIIIFResourceType().toString().toLowerCase() === 'manifest') { // todo: use constant
                return true;
            } else if (this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.MANIFEST.toString()) {
                return true;
            }
            return false;
        }

        load(): Promise<IIIIFResource> {
            let that = this;
            return new Promise<IIIIFResource>((resolve, reject) => {
                if (that.isLoaded) {
                    resolve(that);
                } else {
                    var options = that.options;
                    options.navDate = that.getNavDate();
                    Utils.loadResource(that.__jsonld['@id']).then(function(data) {
                        that.parentLabel = <string>TranslationCollection.getValue(that.getLabel(), options.locale);
                        var parsed = Deserialiser.parse(data, options);
                        that = Object.assign(that, parsed);
                        that.index = <number>options.index;

                        resolve(that);
                    });
                }
            });
        }
    }
}