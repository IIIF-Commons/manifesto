namespace Manifesto {
    export class Service extends ManifestResource implements IService {

        constructor(jsonld?: any, options?: IManifestoOptions){
            super(jsonld, options);
        }

        getProfile(): ServiceProfile{
            var profile = this.getProperty('profile');

            if (!profile) {
                profile = this.getProperty('dcterms:conformsTo');
            }

            if (Array.isArray(profile)){
                return new ServiceProfile(profile[0]);
            }

            return new ServiceProfile(profile);
        }

        getDescription(): string {
            return Utils.getLocalisedValue(this.getProperty('description'), this.options.locale);
        }

        getInfoUri(): string {

            var infoUri = this.id;

            if (!String.endsWith(infoUri, '/')) {
                infoUri += '/';
            }

            infoUri += 'info.json';

            return infoUri;
        }
    }
}