var http = require("http");
var url = require("url");

declare var manifesto: IManifesto;

module Manifesto {
    export class Utils {

        static getImageQuality(profile: Manifesto.ServiceProfile): string {

            var p: string = profile.toString();

            if (p === ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString() ||
                p === ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString() ||
                p === ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString() ||
                p === ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString() ||
                p === ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString() ||
                p === ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString() ||
                p === ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString() ||
                p === ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString() ||
                p === ServiceProfile.IIIF1IMAGELEVEL1.toString() ||
                p === ServiceProfile.IIIF1IMAGELEVEL1PROFILE.toString() ||
                p === ServiceProfile.IIIF1IMAGELEVEL2.toString() ||
                p === ServiceProfile.IIIF1IMAGELEVEL2PROFILE.toString()){
                return 'native';
            }

            return 'default';
        }

        static getLocalisedValue(resource: any, locale: string): string {

            // if the resource is not an array of translations, return the string.
            if (!_isArray(resource)){
                return resource;
            }

            // test for exact match
            for (var i = 0; i < resource.length; i++){
                var value = resource[i];
                var language = value['@language'];

                if (locale === language){
                    return <string>value['@value'];
                }
            }

            // test for inexact match
            var match = locale.substr(0, locale.indexOf('-'));

            for (var i = 0; i < resource.length; i++){
                var value = resource[i];
                var language = value['@language'];

                if (language === match){
                    return <string>value['@value'];
                }
            }

            return null;
        }

        static loadResource (uri: string): Promise<string> {

            return new Promise<any>((resolve, reject) => {
                var u = url.parse(uri);

                var request = http.request({
                    host: u.hostname,
                    port: u.port,
                    path: u.path,
                    method: "GET",
                    withCredentials: false
                }, (response) => {
                    var result = "";
                    response.on('data', (chunk) => {
                        result += chunk;
                    });
                    response.on('end', () => {
                        resolve(result);
                    });
                });

                request.on('error', (error) => {
                    reject(error);
                });

                request.end();
            });
        }

        static loadExternalResource(resource: IExternalResource,
            tokenStorageStrategy: string,
            clickThrough: (resource: IExternalResource) => Promise<void>,
            restricted: (resource: IExternalResource) => Promise<void>,
            login: (resource: IExternalResource) => Promise<void>,
            getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>,
            storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<void>,
            getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>,
            handleResourceResponse: (resource: IExternalResource) => Promise<any>,
            options?: IManifestoOptions): Promise<IExternalResource> {

            return new Promise<any>((resolve, reject) => {

                if (options && options.pessimisticAccessControl){

                    // pessimistic: access control cookies may have been deleted.
                    // always request the access token for every access controlled info.json request
                    // returned access tokens are not stored, therefore the login window flashes for every request.

                    resource.getData().then(() => {
                        if (resource.isAccessControlled()){
                            // if the resource has a click through service, use that.
                            if (resource.clickThroughService){
                                resolve(clickThrough(resource));
                            } else if(resource.restrictedService) {
                                resolve(restricted(resource));
                            } else {
                                login(resource).then(() => {
                                    getAccessToken(resource, true).then((token: IAccessToken) => {
                                        resource.getData(token).then(() => {
                                            resolve(handleResourceResponse(resource));
                                        })["catch"]((message) => {
                                            reject(Utils.createInternalServerError(message));
                                        });
                                    })["catch"]((message) => {
                                        reject(Utils.createInternalServerError(message));
                                    });
                                })["catch"]((message) => {
                                    reject(Utils.createInternalServerError(message));
                                });
                            }
                        } else {
                            // this info.json isn't access controlled, therefore no need to request an access token.
                            resolve(resource);
                        }
                    })["catch"]((message) => {
                        reject(Utils.createInternalServerError(message));
                    });
                } else {

                    // optimistic: access control cookies may not have been deleted.
                    // store access tokens to avoid login window flashes.
                    // if cookies are deleted a page refresh is required.

                    // try loading the resource using an access token that matches the info.json domain.
                    // if an access token is found, request the resource using it regardless of whether it is access controlled.
                    getStoredAccessToken(resource, tokenStorageStrategy).then((storedAccessToken: IAccessToken) => {
                        if (storedAccessToken) {
                            // try using the stored access token
                            resource.getData(storedAccessToken).then(() => {
                                // if the info.json loaded using the stored access token
                                if (resource.status === HTTPStatusCode.OK) {
                                    resolve(handleResourceResponse(resource));
                                } else {
                                    // otherwise, load the resource data to determine the correct access control services.
                                    // if access controlled, do login.
                                    Utils.authorize(
                                        resource,
                                        tokenStorageStrategy,
                                        clickThrough,
                                        restricted,
                                        login,
                                        getAccessToken,
                                        storeAccessToken,
                                        getStoredAccessToken).then(() => {
                                            resolve(handleResourceResponse(resource));
                                        })["catch"]((error) => {
                                            if (resource.restrictedService){
                                                reject(Utils.createRestrictedError());
                                            } else {
                                                reject(Utils.createAuthorizationFailedError());
                                            }
                                        });
                                }
                            })["catch"]((error) => {
                                reject(Utils.createAuthorizationFailedError());
                            });
                        } else {
                            Utils.authorize(
                                resource,
                                tokenStorageStrategy,
                                clickThrough,
                                restricted,
                                login,
                                getAccessToken,
                                storeAccessToken,
                                getStoredAccessToken).then(() => {
                                resolve(handleResourceResponse(resource));
                            })["catch"]((error) => {
                                reject(Utils.createAuthorizationFailedError());
                            });
                        }
                    })["catch"]((error) => {
                        reject(Utils.createAuthorizationFailedError());
                    });
                }
            });
        }

        static createError(name: string, message: string): Error {
            var error: Error = new Error();
            error.message = message;
            error.name = name;
            return error;
        }

        static createAuthorizationFailedError(): Error {
            return Utils.createError(manifesto.StatusCodes.AUTHORIZATION_FAILED.toString(), "Authorization failed");
        }

        static createRestrictedError(): Error {
            return Utils.createError(manifesto.StatusCodes.RESTRICTED.toString(), "Restricted");
        }

        static createInternalServerError(message: string): Error {
            return Utils.createError(manifesto.StatusCodes.INTERNAL_SERVER_ERROR.toString(), message);
        }

        static loadExternalResources(resources: IExternalResource[],
            tokenStorageStrategy: string,
            clickThrough: (resource: IExternalResource) => Promise<void>,
            restricted: (resource: IExternalResource) => Promise<void>,
            login: (resource: IExternalResource) => Promise<void>,
            getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>,
            storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<void>,
            getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>,
            handleResourceResponse: (resource: IExternalResource) => Promise<any>,
            options?: IManifestoOptions): Promise<IExternalResource[]> {

            return new Promise<IExternalResource[]>((resolve, reject) => {

                var promises = _map(resources, (resource: IExternalResource) => {
                    return Utils.loadExternalResource(
                        resource,
                        tokenStorageStrategy,
                        clickThrough,
                        restricted,
                        login,
                        getAccessToken,
                        storeAccessToken,
                        getStoredAccessToken,
                        handleResourceResponse,
                        options);
                });

                Promise.all(promises)
                    .then(() => {
                        resolve(resources)
                    })["catch"]((error) => {
                        reject(error);
                    });
            });
        }

        static authorize(
            resource: IExternalResource,
            tokenStorageStrategy: string,
            clickThrough: (resource: IExternalResource) => Promise<void>,
            restricted: (resource: IExternalResource) => Promise<void>,
            login: (resource: IExternalResource) => Promise<void>,
            getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>,
            storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<void>,
            getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>): Promise<IExternalResource> {

            return new Promise<IExternalResource>((resolve, reject) => {

                resource.getData().then(() => {
                    if (resource.isAccessControlled()) {
                        getStoredAccessToken(resource, tokenStorageStrategy).then((storedAccessToken: IAccessToken) => {
                            if(storedAccessToken) {
                                // try using the stored access token
                                resource.getData(storedAccessToken).then(() => {
                                    if (resource.status === HTTPStatusCode.OK){
                                        resolve(resource); // happy path ended
                                    } else {
                                        // the stored token is no good for this resource
                                        Utils.showAuthInteraction(
                                            resource,
                                            tokenStorageStrategy,
                                            clickThrough,
                                            restricted,
                                            login,
                                            getAccessToken,
                                            storeAccessToken,
                                            resolve,
                                            reject);
                                    }
                                })["catch"]((message) => {
                                    reject(Utils.createInternalServerError(message));
                                });
                            } else {
                                // There was no stored token, but the user might have a cookie that will grant a token
                                getAccessToken(resource, false).then((accessToken) => {
                                    if(accessToken) {
                                        storeAccessToken(resource, accessToken, tokenStorageStrategy).then(() => {
                                            // try using the fresh access token
                                            resource.getData(accessToken).then(() => {
                                                if (resource.status === HTTPStatusCode.OK){
                                                    resolve(resource);
                                                } else {
                                                    // User has a token, but it's not good enough
                                                    Utils.showAuthInteraction(
                                                        resource,
                                                        tokenStorageStrategy,
                                                        clickThrough,
                                                        restricted,
                                                        login,
                                                        getAccessToken,
                                                        storeAccessToken,
                                                        resolve,
                                                        reject);
                                                }
                                            })["catch"]((message) => {
                                                reject(Utils.createInternalServerError(message));
                                            });
                                        })["catch"]((message) => {
                                            // not able to store access token
                                            reject(Utils.createInternalServerError(message));
                                        });
                                    } else {
                                        // The user did not have a cookie that granted a token
                                        Utils.showAuthInteraction(
                                            resource,
                                            tokenStorageStrategy,
                                            clickThrough,
                                            restricted,
                                            login,
                                            getAccessToken,
                                            storeAccessToken,
                                            resolve,
                                            reject);
                                    }
                                })
                            }
                        })["catch"]((message) => {
                            reject(Utils.createInternalServerError(message));
                        });
                    } else {
                        // this info.json isn't access controlled, therefore there's no need to request an access token
                        resolve(resource);
                    }
                });
            });
        }

        private static showAuthInteraction(
            resource,
            tokenStorageStrategy,
            clickThrough,
            restricted,
            login,
            getAccessToken,
            storeAccessToken,
            resolve,
            reject) {
            if (resource.status === HTTPStatusCode.MOVED_TEMPORARILY && !resource.isResponseHandled) {
                // if the resource was redirected to a degraded version
                // and the response hasn't been handled yet.
                // if the client wishes to trigger a login, set resource.isResponseHandled to true
                // and call loadExternalResources() again passing the resource.
                resolve(resource);
            } else if (resource.restrictedService) {
                resolve(restricted(resource));
                // TODO: move to next etc
            } else if (resource.clickThroughService && !resource.isResponseHandled) {
                // if the resource has a click through service, use that.
                clickThrough(resource).then(() => {
                    getAccessToken(resource, true).then((accessToken) => {
                        storeAccessToken(resource, accessToken, tokenStorageStrategy).then(() => {
                            resource.getData(accessToken).then(() => {
                                resolve(resource);
                            })["catch"]((message) => {
                                reject(Utils.createInternalServerError(message));
                            });
                        })["catch"]((message) => {
                            reject(Utils.createInternalServerError(message));
                        });
                    })["catch"]((message) => {
                        reject(Utils.createInternalServerError(message));
                    });
                });
            } else {
                // get an access token
                login(resource).then(() => {
                    getAccessToken(resource, true).then((accessToken) => {
                        storeAccessToken(resource, accessToken, tokenStorageStrategy).then(() => {
                            resource.getData(accessToken).then(() => {
                                resolve(resource);
                            })["catch"]((message) => {
                                reject(Utils.createInternalServerError(message));
                            });
                        })["catch"]((message) => {
                            reject(Utils.createInternalServerError(message));
                        });
                    })["catch"]((message) => {
                        reject(Utils.createInternalServerError(message));
                    });
                });
            }
        };

        static getService(resource: any, profile: ServiceProfile | string): IService {

            var services: IService[] = this.getServices(resource);

            // coerce profile to string
            if (typeof profile !== 'string'){
                profile = (<ServiceProfile>profile).toString();
            }

            for (var i = 0; i < services.length; i++){
                var service: IService = services[i];

                if (service.getProfile().toString() === profile) {
                    return service;
                }
            }

            return null;
        }

        static getResourceById(parentResource: IJSONLDResource, id: string): IJSONLDResource {
            return [<IJSONLDResource>parentResource.__jsonld].en().traverseUnique(x => Utils.getAllArrays(x))
                .first(r => r['@id'] === id);
        }

        static getAllArrays(obj: any): exjs.IEnumerable<any> {
            var all = [].en();

            if (!obj) return all;

            for (var key in obj) {
                var val = obj[key];
                if (_isArray(val)) {
                    all = all.concat(val)
                }
            }

            return all;
        }

        static getServices(resource: any): IService[] {
            var service;

            // if passing a manifesto-parsed object, use the __jsonld.service property,
            // otherwise look for a service property (info.json services)
            if (resource.__jsonld){
                service = resource.__jsonld.service;
            } else {
                service = (<any>resource).service;
            }

            var services: IService[] = [];
            if (!service) return services;

            // coerce to array
            if (!_isArray(service)){
                service = [service];
            }

            for (var i = 0; i < service.length; i++){
                var s: any = service[i];

                if (_isString(s)){
                    var r: IJSONLDResource = this.getResourceById(resource.options.resource, s);

                    if (r){
                        services.push(new Service(r.__jsonld || r, resource.options));
                    }
                } else {
                    services.push(new Service(s, resource.options));
                }
            }

            return services;
        }
    }
}