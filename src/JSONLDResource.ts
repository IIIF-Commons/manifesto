namespace Manifesto{
    export class JSONLDResource implements IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;
        aliases: any;

        constructor(jsonld?: any) {
            this.__jsonld = jsonld;
            this.aliases = {
              images: 'items',
              sequences: 'items',
              canvases: 'items',
          };
          this.context = this.getProperty('context');
          this.id = this.getProperty('id');
        }

        getProperty(name: string, defaultValue?: any): any {

            let prop: any = null;

            if (this.__jsonld) {
                prop = this.__jsonld[name];

                if (!prop && this.aliases[name]) {
                  return this.getProperty(this.aliases[name])
                }

                if (!prop) {
                    // property may have a prepended '@'
                    prop = this.__jsonld['@' + name];
                }
            }

            if (!prop && typeof defaultValue !== 'undefined') {
              prop = defaultValue;
            }

            return prop;
        }
    }
}
