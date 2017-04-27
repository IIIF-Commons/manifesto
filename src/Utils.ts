var http = require("http");
var https = require("https");
var url = require("url");

declare var manifesto: IManifesto;

namespace Manifesto {
    export class Utils {

        static getResourceFormat(format: string): string {
            format = format.toLowerCase();
            format = format.split(';')[0];
            return format.trim();
        }

        static getImageQuality(profile: Manifesto.ServiceProfile): string {

            const p: string = profile.toString();

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

        static getInexactLocale(locale: string): string {
            if (locale.indexOf('-') !== -1) {
                return locale.substr(0, locale.indexOf('-'));
            }
            
            return locale;
        }

        static getLocalisedValue(resource: any, locale: string): string | null {

            // if the resource is not an array of translations, return the string.
            if (!Array.isArray(resource)){
                return resource;
            }

            // test for exact match
            for (let i = 0; i < resource.length; i++){
                const value = resource[i];
                const language = value['@language'];

                if (locale === language) {
                    return <string>value['@value'];
                }
            }

            // test for inexact match
            const match: string = locale.substr(0, locale.indexOf('-'));

            for (let i = 0; i < resource.length; i++) {
                var value = resource[i];
                var language = value['@language'];

                if (language === match){
                    return <string>value['@value'];
                }
            }

            return null;
        }

        static generateTreeNodeIds(treeNode: ITreeNode, index: number = 0): void {

            let id: string;

            if (!treeNode.parentNode){
                id = '0';
            } else {
                id = treeNode.parentNode.id + "-" + index;
            }

            treeNode.id = id;

            for (let i = 0; i < treeNode.nodes.length; i++) {
                var n: ITreeNode = treeNode.nodes[i];
                Utils.generateTreeNodeIds(n, i);
            }
        }

        static isImageProfile(profile: Manifesto.ServiceProfile): boolean {
            if (profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL0PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL0PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL1PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL2PROFILE.toString()){
                return true;
            }

            return false;
        }

        static isLevel0ImageProfile(profile: Manifesto.ServiceProfile): boolean {
            if (profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL0PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL0PROFILE.toString()){
                return true;
            }

            return false;
        }

        static isLevel1ImageProfile(profile: Manifesto.ServiceProfile): boolean {
            if (profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL1PROFILE.toString()){
                return true;
            }

            return false;
        }

        static isLevel2ImageProfile(profile: Manifesto.ServiceProfile): boolean {
            if (profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL2PROFILE.toString()){
                return true;
            }

            return false;
        }

        static loadResource (uri: string): Promise<string> {

            return new Promise<any>((resolve, reject) => {
                const u: any = url.parse(uri);

                var request: any;

                var opts: any = {
                    host: u.hostname,
                    port: u.port,
                    path: u.path,
                    method: "GET",
                    withCredentials: false
                };
                
                if (u.protocol === 'https:'){
                    request = https.request(opts, (response: any) => {
                        var result = "";
                        response.on('data', (chunk: any) => {
                            result += chunk;
                        });
                        response.on('end', () => {
                            resolve(result);
                        });
                    });
                } else {
                    request = http.request(opts, (response: any) => {
                        var result = "";
                        response.on('data', (chunk: any) => {
                            result += chunk;
                        });
                        response.on('end', () => {
                            resolve(result);
                        });
                    });
                }              

                request.on('error', (error: any) => {
                    reject(error);
                });

                request.end();
            });
        }

        static loadExternalResourcesAuth1(
            resources: IExternalResource[],
            openContentProviderWindow: (service: Manifesto.IService) => Window,
            openTokenService: (tokenService: Manifesto.IService) => Promise<any>,
            userInteractionWithContentProvider: (contentProviderWindow: Window) => Promise<any>,
            getContentProviderWindow: (service: Manifesto.IService) => Promise<Window>,
            showOutOfOptionsMessages: (service: Manifesto.IService) => void): Promise<IExternalResource[]> {

            return new Promise<IExternalResource[]>((resolve, reject) => {

                const promises = resources.map((resource: IExternalResource) => {
                    return Utils.loadExternalResourceAuth1(
                        resource,
                        openContentProviderWindow,
                        openTokenService,
                        userInteractionWithContentProvider,
                        getContentProviderWindow,
                        showOutOfOptionsMessages);
                });

                Promise.all(promises)
                    .then(() => {
                        resolve(resources)
                    })["catch"]((error) => {
                        reject(error);
                    });
            });
        }

        static async loadExternalResourceAuth1(
            resource: IExternalResource, 
            openContentProviderWindow: (service: Manifesto.IService) => Window,
            openTokenService: (tokenService: Manifesto.IService) => Promise<void>,
            userInteractionWithContentProvider: (contentProviderWindow: Window) => Promise<void>,
            getContentProviderWindow: (service: Manifesto.IService) => Promise<Window>,
            showOutOfOptionsMessages: (service: Manifesto.IService) => void): Promise<IExternalResource> {

            await resource.getData();

            if (resource.status === HTTPStatusCode.MOVED_TEMPORARILY || resource.status === HTTPStatusCode.UNAUTHORIZED) {
                await Utils.doAuthChain(resource, openContentProviderWindow, openTokenService, userInteractionWithContentProvider, getContentProviderWindow, showOutOfOptionsMessages);
            }
            
            return resource;
        }

        static async doAuthChain(
            resource: IExternalResource, 
            openContentProviderWindow: (service: Manifesto.IService) => Window,
            openTokenService: (tokenService: Manifesto.IService) => Promise<any>,
            userInteractionWithContentProvider: (contentProviderWindow: Window) => Promise<any>,
            getContentProviderWindow: (service: Manifesto.IService) => Promise<Window>,
            showOutOfOptionsMessages: (service: Manifesto.IService) => void): Promise<Manifesto.IExternalResource | void> {

            // This function enters the flowchart at the < External? > junction
            // http://iiif.io/api/auth/1.0/#workflow-from-the-browser-client-perspective
            if (!resource.isAccessControlled()) {
                return resource; // no services found
            }

            let serviceToTry: Manifesto.IService | null = null;
            let lastAttempted: Manifesto.IService | null = null;

            // repetition of logic is left in these steps for clarity:
            
            // Looking for external pattern
            serviceToTry = resource.externalService;

            if (serviceToTry) {
                serviceToTry.options = <IManifestoOptions>resource.options;
                lastAttempted = serviceToTry;
                //let success = 
                await Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry);
                //if (success) return resource;
            }

            // Looking for kiosk pattern
            serviceToTry = resource.kioskService;

            if (serviceToTry) {
                serviceToTry.options = <IManifestoOptions>resource.options;
                lastAttempted = serviceToTry;
                let kioskWindow = openContentProviderWindow(serviceToTry);
                if (kioskWindow) {
                    await userInteractionWithContentProvider(kioskWindow);
                    //let success = 
                    await Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry);
                    //if (success) return resource;
                } else {
                    // Could not open kiosk window
                }
            }

            // The code for the next two patterns is identical (other than the profile name).
            // The difference is in the expected behaviour of
            //
            //    await userInteractionWithContentProvider(contentProviderWindow);
            // 
            // For clickthrough the opened window should close immediately having established
            // a session, whereas for login the user might spend some time entering credentials etc.

            // Looking for clickthrough pattern
            serviceToTry = resource.clickThroughService;

            if (serviceToTry) {
                serviceToTry.options = <IManifestoOptions>resource.options;
                lastAttempted = serviceToTry;
                let contentProviderWindow = await getContentProviderWindow(serviceToTry);
                if (contentProviderWindow) {
                    // should close immediately
                    await userInteractionWithContentProvider(contentProviderWindow);
                    //let success = 
                    await Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry);
                    //if (success) return resource;
                } 
            }

            // Looking for login pattern
            serviceToTry = resource.loginService;

            if (serviceToTry) {
                serviceToTry.options = <IManifestoOptions>resource.options;
                lastAttempted = serviceToTry;
                let contentProviderWindow = await getContentProviderWindow(serviceToTry);
                if (contentProviderWindow) {
                    // we expect the user to spend some time interacting
                    await userInteractionWithContentProvider(contentProviderWindow);
                    await Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry);
                    return resource;
                } 
            }

            // nothing worked! Use the most recently tried service as the source of
            // messages to show to the user.
            if (lastAttempted) {
                showOutOfOptionsMessages(lastAttempted);
            }
        }

        static async attemptResourceWithToken(
            resource: Manifesto.IExternalResource,
            openTokenService: (tokenService: Manifesto.IService) => Promise<any>,
            authService: Manifesto.IService): Promise<Manifesto.IExternalResource | void> {

            // attempting token interaction for " + authService["@id"]
            const tokenService: Manifesto.IService | null = authService.getService(ServiceProfile.AUTH1TOKEN.toString());

            if (tokenService) {
                // found token service: " + tokenService["@id"]);
                let tokenMessage: any = await openTokenService(tokenService); 

                if (tokenMessage && tokenMessage.accessToken) {
                    await resource.getData();
                    return resource;
                }  
            }
            // Didn't get a 200 info response.
            //return resource;
        }

        static loadExternalResourcesAuth09(
            resources: IExternalResource[],
            tokenStorageStrategy: string,
            clickThrough: (resource: IExternalResource) => Promise<any>,
            restricted: (resource: IExternalResource) => Promise<any>,
            login: (resource: IExternalResource) => Promise<any>,
            getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>,
            storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<any>,
            getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>,
            handleResourceResponse: (resource: IExternalResource) => Promise<any>,
            options?: IManifestoOptions): Promise<IExternalResource[]> {

            return new Promise<IExternalResource[]>((resolve, reject) => {

                const promises = resources.map((resource: IExternalResource) => {
                    return Utils.loadExternalResourceAuth09(
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

        // IIIF auth api pre v1.0
        // Keeping this around for now until the auth 1.0 implementation is stable
        static loadExternalResourceAuth09(
            resource: IExternalResource,
            tokenStorageStrategy: string,
            clickThrough: (resource: IExternalResource) => Promise<any>,
            restricted: (resource: IExternalResource) => Promise<any>,
            login: (resource: IExternalResource) => Promise<any>,
            getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>,
            storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<any>,
            getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>,
            handleResourceResponse: (resource: IExternalResource) => Promise<any>,
            options?: IManifestoOptions): Promise<IExternalResource> {

            return new Promise<any>((resolve, reject) => {

                if (options && options.pessimisticAccessControl) {

                    // pessimistic: access control cookies may have been deleted.
                    // always request the access token for every access controlled info.json request
                    // returned access tokens are not stored, therefore the login window flashes for every request.

                    resource.getData().then(() => {
                        if (resource.isAccessControlled()) {
                            // if the resource has a click through service, use that.
                            if (resource.clickThroughService){
                                resolve(clickThrough(resource));
                            //} else if(resource.restrictedService) {
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
                                            // if (resource.restrictedService){
                                            //     reject(Utils.createRestrictedError());
                                            // } else {
                                                reject(Utils.createAuthorizationFailedError());
                                            //}
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
            const error: Error = new Error();
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

        static authorize(
            resource: IExternalResource,
            tokenStorageStrategy: string,
            clickThrough: (resource: IExternalResource) => Promise<any>,
            restricted: (resource: IExternalResource) => Promise<any>,
            login: (resource: IExternalResource) => Promise<any>,
            getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>,
            storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<any>,
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
            resource: IExternalResource,
            tokenStorageStrategy: any,
            clickThrough: any,
            restricted: any,
            login: any,
            getAccessToken: any,
            storeAccessToken: any,
            resolve: any,
            reject: any) {
            if (resource.status === HTTPStatusCode.MOVED_TEMPORARILY && !resource.isResponseHandled) {
                // if the resource was redirected to a degraded version
                // and the response hasn't been handled yet.
                // if the client wishes to trigger a login, set resource.isResponseHandled to true
                // and call loadExternalResources() again passing the resource.
                resolve(resource);
            // } else if (resource.restrictedService) {
            //     resolve(restricted(resource));
            //     // TODO: move to next etc
            } else if (resource.clickThroughService && !resource.isResponseHandled) {
                // if the resource has a click through service, use that.
                clickThrough(resource).then(() => {
                    getAccessToken(resource, true).then((accessToken: IAccessToken) => {
                        storeAccessToken(resource, accessToken, tokenStorageStrategy).then(() => {
                            resource.getData(accessToken).then(() => {
                                resolve(resource);
                            })["catch"]((message) => {
                                reject(Utils.createInternalServerError(message));
                            });
                        })["catch"]((message: string) => {
                            reject(Utils.createInternalServerError(message));
                        });
                    })["catch"]((message: string) => {
                        reject(Utils.createInternalServerError(message));
                    });
                });
            } else {
                // get an access token
                login(resource).then(() => {
                    getAccessToken(resource, true).then((accessToken: IAccessToken) => {
                        storeAccessToken(resource, accessToken, tokenStorageStrategy).then(() => {
                            resource.getData(accessToken).then(() => {
                                resolve(resource);
                            })["catch"]((message) => {
                                reject(Utils.createInternalServerError(message));
                            });
                        })["catch"]((message: string) => {
                            reject(Utils.createInternalServerError(message));
                        });
                    })["catch"]((message: string) => {
                        reject(Utils.createInternalServerError(message));
                    });
                });
            }
        };

        static getService(resource: any, profile: ServiceProfile | string): IService | null {

            const services: IService[] = this.getServices(resource);

            // coerce profile to string
            if (typeof(profile) !== 'string'){
                profile = (<ServiceProfile>profile).toString();
            }

            for (let i = 0; i < services.length; i++){
                const service: IService = services[i];

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

            for (let key in obj) {
                var val = obj[key];
                if (Array.isArray(val)) {
                    all = all.concat(<never[]>val)
                }
            }

            return all;
        }

        static getServices(resource: any): IService[] {
            let service: any;

            // if passing a manifesto-parsed object, use the __jsonld.service property,
            // otherwise look for a service property (info.json services)
            if (resource.__jsonld) {
                service = resource.__jsonld.service;
            } else {
                service = (<any>resource).service;
            }

            const services: IService[] = [];
            if (!service) return services;

            // coerce to array
            if (!Array.isArray(service)) {
                service = [service];
            }

            for (let i = 0; i < service.length; i++) {
                const s: any = service[i];

                if (typeof(s) === 'string') {
                    const r: IJSONLDResource = this.getResourceById(resource.options.resource, s);

                    if (r) {
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