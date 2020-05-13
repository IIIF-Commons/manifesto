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

        getAttribution(): LanguageMap {

            // console.warn('getAttribution will be deprecated, use getRequiredStatement instead.');

            const attribution: any = this.getProperty('attribution');

            if (attribution) {
                return LanguageMap.parse(attribution, this.options.locale);
            }
            
            return [];
        }

        getDescription(): LanguageMap {
            const description: any = this.getProperty('description');

            if (description) {
                return LanguageMap.parse(description, this.options.locale);
            }

            return [];
        }

        getIIIFResourceType(): IIIFResourceType {
            return new IIIFResourceType(Utils.normaliseType(this.getProperty('type')));
        }

        getLogo(): string | null {
            let logo: any = this.getProperty('logo');
            if (!logo) return null;
            if (typeof(logo) === 'string') return logo;
            if (Array.isArray(logo) && logo.length) {
                logo = logo[0];
            }
            return logo['@id'] || logo.id;
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

        getDefaultTree(): ITreeNode{
            this.defaultTree = new TreeNode('root');
            this.defaultTree.data = this;
            return this.defaultTree;
        }

        getRequiredStatement(): LabelValuePair | null {

            let requiredStatement: LabelValuePair | null = null;
            
            const _requiredStatement: any = this.getProperty('requiredStatement');

            if (_requiredStatement) {

                requiredStatement = new LabelValuePair(this.options.locale);
                requiredStatement.parse(_requiredStatement);

            } else {

                // fall back to attribution (if it exists)
                const attribution: LanguageMap = this.getAttribution();

                if (attribution) {
                    requiredStatement = new LabelValuePair(this.options.locale);
                    requiredStatement.value = attribution;
                }
            }

            return requiredStatement;
        }

        isCollection(): boolean {
            if (this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.COLLECTION.toString()) {
                return true;
            }
            return false;
        }

        isManifest(): boolean {
            if (this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.MANIFEST.toString()) {
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
                    const options = that.options;
                    options.navDate = that.getNavDate();

                    let id: string = that.__jsonld.id;

                    if (!id) {
                        id = that.__jsonld['@id']
                    }

                    Utils.loadResource(id).then(function(data) {
                        that.parentLabel = <string>LanguageMap.getValue(that.getLabel(), options.locale);
                        const parsed = Deserialiser.parse(data, options);
                        that = Object.assign(that, parsed);
                        that.index = <number>options.index;

                        resolve(that);
                    });
                }
            });
        }
    }
}
