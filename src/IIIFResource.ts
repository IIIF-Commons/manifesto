import {
  ManifestResource,
  Utils,
  PropertyValue,
  Deserialiser,
  LabelValuePair,
  TreeNode,
  Service,
  IManifestoOptions,
  Collection
} from "./internal";
import {
  IIIFResourceType,
  ServiceProfile
} from "@iiif/vocabulary/dist-commonjs";

export class IIIFResource extends ManifestResource {
  public defaultTree: TreeNode;
  public index: number = -1;
  public isLoaded: boolean = false;
  public parentCollection: Collection;
  public parentLabel: string;

  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);

    const defaultOptions: IManifestoOptions = {
      defaultLabel: "-",
      locale: "en-GB",
      resource: <IIIFResource>this,
      pessimisticAccessControl: false
    };

    this.options = Object.assign(defaultOptions, options);
  }

  /**
   * @deprecated
   */
  getAttribution(): PropertyValue {
    //console.warn('getAttribution will be deprecated, use getRequiredStatement instead.');

    const attribution: any = this.getProperty("attribution");

    if (attribution) {
      return PropertyValue.parse(attribution, this.options.locale);
    }

    return new PropertyValue([], this.options.locale);
  }

  getDescription(): PropertyValue {
    const description: any = this.getProperty("description");

    if (description) {
      return PropertyValue.parse(description, this.options.locale);
    }

    return new PropertyValue([], this.options.locale);
  }

  getHomepage(): string | null {
    let homepage: any = this.getProperty("homepage");
    if (!homepage) return null;
    if (typeof homepage == "string") return homepage;
    if (Array.isArray(homepage) && homepage.length) {
      homepage = homepage[0];
    }
    return homepage["@id"] || homepage.id;
  }

  getIIIFResourceType(): IIIFResourceType {
    return <IIIFResourceType>Utils.normaliseType(this.getProperty("type"));
  }

  getLogo(): string | null {
    let logo: any = this.getProperty("logo");

    // Presentation 3.
    // The logo is exclusive to the "provider" property, which is of type "Agent".
    // In order to fulfil `manifest.getLogo()` we should check
    // When P3 is fully supported, the following should work.
    // return this.getProvider()?.getLogo();
    if (!logo) {
      const provider = this.getProperty("provider");
      if (!provider) {
        return null;
      }

      logo = provider.logo;
    }

    if (!logo) return null;
    if (typeof logo === "string") return logo;
    if (Array.isArray(logo) && logo.length) {
      logo = logo[0];
    }
    return logo["@id"] || logo.id;
  }

  getLicense(): string | null {
    return Utils.getLocalisedValue(
      this.getProperty("license"),
      this.options.locale
    );
  }

  getRights(): string | null {
    return this.getProperty("rights");
  }

  getNavDate(): Date {
    return new Date(this.getProperty("navDate"));
  }

  getRelated(): any {
    return this.getProperty("related");
  }

  getSeeAlso(): any {
    return this.getProperty("seeAlso");
  }

  getTrackingLabel(): string {
    const service: Service = <Service>(
      this.getService(ServiceProfile.TRACKING_EXTENSIONS)
    );
    if (service) {
      return service.getProperty("trackingLabel");
    }
    return "";
  }

  getDefaultTree(): TreeNode {
    this.defaultTree = new TreeNode("root");
    this.defaultTree.data = this;
    return this.defaultTree;
  }

  getRequiredStatement(): LabelValuePair | null {
    let requiredStatement: LabelValuePair | null = null;

    const _requiredStatement: any = this.getProperty("requiredStatement");

    if (_requiredStatement) {
      requiredStatement = new LabelValuePair(this.options.locale);
      requiredStatement.parse(_requiredStatement);
    } else {
      // fall back to attribution (if it exists)
      const attribution: PropertyValue = this.getAttribution();

      if (attribution) {
        requiredStatement = new LabelValuePair(this.options.locale);
        requiredStatement.value = attribution;
      }
    }

    return requiredStatement;
  }

  isCollection(): boolean {
    if (this.getIIIFResourceType() === IIIFResourceType.COLLECTION) {
      return true;
    }
    return false;
  }

  isManifest(): boolean {
    if (this.getIIIFResourceType() === IIIFResourceType.MANIFEST) {
      return true;
    }
    return false;
  }

  load(): Promise<IIIFResource> {
    let that = this;
    return new Promise<IIIFResource>(resolve => {
      if (that.isLoaded) {
        resolve(that);
      } else {
        const options = that.options;
        options.navDate = that.getNavDate();

        let id: string = that.__jsonld.id;

        if (!id) {
          id = that.__jsonld["@id"];
        }

        Utils.loadManifest(id).then(function(data) {
          that.parentLabel = <string>that.getLabel().getValue(options.locale);
          const parsed = Deserialiser.parse(data, options);
          that = Object.assign(that, parsed);
          //that.parentCollection = options.resource.parentCollection;
          that.index = <number>options.index;

          resolve(that);
        });
      }
    });
  }
}
