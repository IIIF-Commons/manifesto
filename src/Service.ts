var _endsWith = require("lodash.endswith");
var _isArray = require("lodash.isarray");

module Manifesto {
    export class Service extends ManifestResource implements IService {

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        getProfile(): ServiceProfile{
            var profile = this.getProperty('profile');

            if (_isArray(profile)){
                return new ServiceProfile(profile[0]);
            }

            return new ServiceProfile(profile);
        }

        getDescription(): string {
            return Utils.getLocalisedValue(this.getProperty('description'), this.options.locale);
        }

        getInfoUri(): string {

            var infoUri = this.id;

            if (!_endsWith(infoUri, '/')) {
                infoUri += '/';
            }

            infoUri += 'info.json';

            return infoUri;
        }
    }
}