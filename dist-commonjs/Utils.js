"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Service_1 = require("./Service");
var StatusCode_1 = require("./StatusCode");
var Serialisation_1 = require("./Serialisation");
var ServiceProfileEnum = require('@iiif/vocabulary/dist-commonjs/').ServiceProfile;
var http = require('http');
var https = require('https');
var url = require('url');
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getMediaType = function (type) {
        type = type.toLowerCase();
        type = type.split(';')[0];
        return type.trim();
    };
    Utils.getImageQuality = function (profile) {
        if (profile === ServiceProfileEnum.IMAGE_0_COMPLIANCE_LEVEL_1 ||
            profile === ServiceProfileEnum.IMAGE_0_COMPLIANCE_LEVEL_2 ||
            profile === ServiceProfileEnum.IMAGE_1_COMPLIANCE_LEVEL_1 ||
            profile === ServiceProfileEnum.IMAGE_1_COMPLIANCE_LEVEL_2 ||
            profile === ServiceProfileEnum.IMAGE_0_CONFORMANCE_LEVEL_1 ||
            profile === ServiceProfileEnum.IMAGE_0_CONFORMANCE_LEVEL_2 ||
            profile === ServiceProfileEnum.IMAGE_1_CONFORMANCE_LEVEL_1 ||
            profile === ServiceProfileEnum.IMAGE_1_CONFORMANCE_LEVEL_2 ||
            profile === ServiceProfileEnum.IMAGE_1_LEVEL_1 ||
            profile === ServiceProfileEnum.IMAGE_1_PROFILE_LEVEL_1 ||
            profile === ServiceProfileEnum.IMAGE_1_LEVEL_2 ||
            profile === ServiceProfileEnum.IMAGE_1_PROFILE_LEVEL_2) {
            return 'native';
        }
        return 'default';
    };
    Utils.getInexactLocale = function (locale) {
        if (locale.indexOf('-') !== -1) {
            return locale.substr(0, locale.indexOf('-'));
        }
        return locale;
    };
    Utils.getLocalisedValue = function (resource, locale) {
        // if the resource is not an array of translations, return the string.
        if (!Array.isArray(resource)) {
            return resource;
        }
        // test for exact match
        for (var i = 0; i < resource.length; i++) {
            var value_1 = resource[i];
            var language_1 = value_1['@language'];
            if (locale === language_1) {
                return value_1['@value'];
            }
        }
        // test for inexact match
        var match = locale.substr(0, locale.indexOf('-'));
        for (var i = 0; i < resource.length; i++) {
            var value = resource[i];
            var language = value['@language'];
            if (language === match) {
                return value['@value'];
            }
        }
        return null;
    };
    Utils.generateTreeNodeIds = function (treeNode, index) {
        if (index === void 0) { index = 0; }
        var id;
        if (!treeNode.parentNode) {
            id = '0';
        }
        else {
            id = treeNode.parentNode.id + "-" + index;
        }
        treeNode.id = id;
        for (var i = 0; i < treeNode.nodes.length; i++) {
            var n = treeNode.nodes[i];
            Utils.generateTreeNodeIds(n, i);
        }
    };
    Utils.normaliseType = function (type) {
        type = type.toLowerCase();
        if (type.indexOf(':') !== -1) {
            var split = type.split(':');
            return split[1];
        }
        return type;
    };
    Utils.normaliseUrl = function (url) {
        url = url.substr(url.indexOf('://'));
        if (url.indexOf('#') !== -1) {
            url = url.split('#')[0];
        }
        return url;
    };
    Utils.normalisedUrlsMatch = function (url1, url2) {
        return Utils.normaliseUrl(url1) === Utils.normaliseUrl(url2);
    };
    Utils.isImageProfile = function (profile) {
        if (Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_0_COMPLIANCE_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_0_COMPLIANCE_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_0_COMPLIANCE_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_COMPLIANCE_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_COMPLIANCE_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_0_CONFORMANCE_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_0_CONFORMANCE_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_0_CONFORMANCE_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_CONFORMANCE_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_CONFORMANCE_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_PROFILE_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_PROFILE_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_PROFILE_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_2_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_2_PROFILE_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_2_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_2_PROFILE_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_2_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_2_PROFILE_LEVEL_2)) {
            return true;
        }
        return false;
    };
    Utils.isLevel0ImageProfile = function (profile) {
        if (Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_0_COMPLIANCE_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_COMPLIANCE_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_0_CONFORMANCE_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_CONFORMANCE_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_PROFILE_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_2_LEVEL_0) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_2_PROFILE_LEVEL_0)) {
            return true;
        }
        return false;
    };
    Utils.isLevel1ImageProfile = function (profile) {
        if (Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_0_COMPLIANCE_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_COMPLIANCE_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_0_CONFORMANCE_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_CONFORMANCE_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_PROFILE_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_2_LEVEL_1) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_2_PROFILE_LEVEL_1)) {
            return true;
        }
        return false;
    };
    Utils.isLevel2ImageProfile = function (profile) {
        if (Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_0_COMPLIANCE_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_COMPLIANCE_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_0_CONFORMANCE_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_CONFORMANCE_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_1_PROFILE_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_2_LEVEL_2) ||
            Utils.normalisedUrlsMatch(profile, ServiceProfileEnum.IMAGE_2_PROFILE_LEVEL_2)) {
            return true;
        }
        return false;
    };
    Utils.parseManifest = function (manifest, options) {
        return Serialisation_1.Deserialiser.parse(manifest, options);
    };
    Utils.loadManifest = function (uri) {
        return new Promise(function (resolve, reject) {
            var u = url.parse(uri);
            var req;
            var opts = {
                host: u.hostname,
                port: u.port,
                path: u.path,
                method: "GET",
                withCredentials: false
            };
            switch (u.protocol) {
                case 'https:':
                    req = https.request(opts, function (response) {
                        var result = "";
                        response.on('data', function (chunk) {
                            result += chunk;
                        });
                        response.on('end', function () {
                            resolve(result);
                        });
                    });
                    req.on('error', function (error) {
                        reject(error);
                    });
                    req.end();
                    break;
                case 'dat:':
                    var xhr_1 = new XMLHttpRequest();
                    xhr_1.onreadystatechange = function () {
                        if (xhr_1.readyState === 4) {
                            resolve(xhr_1.response);
                        }
                    };
                    xhr_1.open("GET", uri, true);
                    xhr_1.send();
                    break;
                default:
                    req = http.request(opts, function (response) {
                        var result = "";
                        response.on('data', function (chunk) {
                            result += chunk;
                        });
                        response.on('end', function () {
                            resolve(result);
                        });
                    });
                    req.on('error', function (error) {
                        reject(error);
                    });
                    req.end();
                    break;
            }
        });
    };
    Utils.loadExternalResourcesAuth1 = function (resources, openContentProviderInteraction, openTokenService, getStoredAccessToken, userInteractedWithContentProvider, getContentProviderInteraction, handleMovedTemporarily, showOutOfOptionsMessages) {
        return new Promise(function (resolve, reject) {
            var promises = resources.map(function (resource) {
                return Utils.loadExternalResourceAuth1(resource, openContentProviderInteraction, openTokenService, getStoredAccessToken, userInteractedWithContentProvider, getContentProviderInteraction, handleMovedTemporarily, showOutOfOptionsMessages);
            });
            Promise.all(promises)
                .then(function () {
                resolve(resources);
            })["catch"](function (error) {
                reject(error);
            });
        });
    };
    Utils.loadExternalResourceAuth1 = function (resource, openContentProviderInteraction, openTokenService, getStoredAccessToken, userInteractedWithContentProvider, getContentProviderInteraction, handleMovedTemporarily, showOutOfOptionsMessages) {
        return __awaiter(this, void 0, void 0, function () {
            var storedAccessToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getStoredAccessToken(resource)];
                    case 1:
                        storedAccessToken = _a.sent();
                        if (!storedAccessToken) return [3 /*break*/, 6];
                        return [4 /*yield*/, resource.getData(storedAccessToken)];
                    case 2:
                        _a.sent();
                        if (!(resource.status === HTTPStatusCode.OK)) return [3 /*break*/, 3];
                        return [2 /*return*/, resource];
                    case 3: 
                    // the stored token is no good for this resource
                    return [4 /*yield*/, Utils.doAuthChain(resource, openContentProviderInteraction, openTokenService, userInteractedWithContentProvider, getContentProviderInteraction, handleMovedTemporarily, showOutOfOptionsMessages)];
                    case 4:
                        // the stored token is no good for this resource
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (resource.status === HTTPStatusCode.OK || resource.status === HTTPStatusCode.MOVED_TEMPORARILY) {
                            return [2 /*return*/, resource];
                        }
                        throw Utils.createAuthorizationFailedError();
                    case 6: return [4 /*yield*/, resource.getData()];
                    case 7:
                        _a.sent();
                        if (!(resource.status === HTTPStatusCode.MOVED_TEMPORARILY || resource.status === HTTPStatusCode.UNAUTHORIZED)) return [3 /*break*/, 9];
                        return [4 /*yield*/, Utils.doAuthChain(resource, openContentProviderInteraction, openTokenService, userInteractedWithContentProvider, getContentProviderInteraction, handleMovedTemporarily, showOutOfOptionsMessages)];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        if (resource.status === HTTPStatusCode.OK || resource.status === HTTPStatusCode.MOVED_TEMPORARILY) {
                            return [2 /*return*/, resource];
                        }
                        throw Utils.createAuthorizationFailedError();
                }
            });
        });
    };
    Utils.doAuthChain = function (resource, openContentProviderInteraction, openTokenService, userInteractedWithContentProvider, getContentProviderInteraction, handleMovedTemporarily, showOutOfOptionsMessages) {
        return __awaiter(this, void 0, void 0, function () {
            var externalService, kioskService, clickThroughService, loginService, serviceToTry, lastAttempted, kioskInteraction, contentProviderInteraction, contentProviderInteraction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // This function enters the flowchart at the < External? > junction
                        // http://iiif.io/api/auth/1.0/#workflow-from-the-browser-client-perspective
                        if (!resource.isAccessControlled()) {
                            return [2 /*return*/, resource]; // no services found
                        }
                        externalService = resource.externalService;
                        if (externalService) {
                            externalService.options = resource.options;
                        }
                        kioskService = resource.kioskService;
                        if (kioskService) {
                            kioskService.options = resource.options;
                        }
                        clickThroughService = resource.clickThroughService;
                        if (clickThroughService) {
                            clickThroughService.options = resource.options;
                        }
                        loginService = resource.loginService;
                        if (loginService) {
                            loginService.options = resource.options;
                        }
                        if (!(!resource.isResponseHandled && resource.status === HTTPStatusCode.MOVED_TEMPORARILY)) return [3 /*break*/, 2];
                        return [4 /*yield*/, handleMovedTemporarily(resource)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, resource];
                    case 2:
                        serviceToTry = null;
                        lastAttempted = null;
                        // repetition of logic is left in these steps for clarity:
                        // Looking for external pattern
                        serviceToTry = externalService;
                        if (!serviceToTry) return [3 /*break*/, 4];
                        lastAttempted = serviceToTry;
                        return [4 /*yield*/, Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, resource];
                    case 4:
                        // Looking for kiosk pattern
                        serviceToTry = kioskService;
                        if (!serviceToTry) return [3 /*break*/, 7];
                        lastAttempted = serviceToTry;
                        kioskInteraction = openContentProviderInteraction(serviceToTry);
                        if (!kioskInteraction) return [3 /*break*/, 7];
                        return [4 /*yield*/, userInteractedWithContentProvider(kioskInteraction)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, resource];
                    case 7:
                        // The code for the next two patterns is identical (other than the profile name).
                        // The difference is in the expected behaviour of
                        //
                        //    await userInteractedWithContentProvider(contentProviderInteraction);
                        // 
                        // For clickthrough the opened window should close immediately having established
                        // a session, whereas for login the user might spend some time entering credentials etc.
                        // Looking for clickthrough pattern
                        serviceToTry = clickThroughService;
                        if (!serviceToTry) return [3 /*break*/, 11];
                        lastAttempted = serviceToTry;
                        return [4 /*yield*/, getContentProviderInteraction(resource, serviceToTry)];
                    case 8:
                        contentProviderInteraction = _a.sent();
                        if (!contentProviderInteraction) return [3 /*break*/, 11];
                        // should close immediately
                        return [4 /*yield*/, userInteractedWithContentProvider(contentProviderInteraction)];
                    case 9:
                        // should close immediately
                        _a.sent();
                        return [4 /*yield*/, Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry)];
                    case 10:
                        _a.sent();
                        return [2 /*return*/, resource];
                    case 11:
                        // Looking for login pattern
                        serviceToTry = loginService;
                        if (!serviceToTry) return [3 /*break*/, 15];
                        lastAttempted = serviceToTry;
                        return [4 /*yield*/, getContentProviderInteraction(resource, serviceToTry)];
                    case 12:
                        contentProviderInteraction = _a.sent();
                        if (!contentProviderInteraction) return [3 /*break*/, 15];
                        // we expect the user to spend some time interacting
                        return [4 /*yield*/, userInteractedWithContentProvider(contentProviderInteraction)];
                    case 13:
                        // we expect the user to spend some time interacting
                        _a.sent();
                        return [4 /*yield*/, Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry)];
                    case 14:
                        _a.sent();
                        return [2 /*return*/, resource];
                    case 15:
                        // nothing worked! Use the most recently tried service as the source of
                        // messages to show to the user.
                        if (lastAttempted) {
                            showOutOfOptionsMessages(resource, lastAttempted);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Utils.attemptResourceWithToken = function (resource, openTokenService, authService) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenService, tokenMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenService = authService.getService(ServiceProfileEnum.AUTH_1_TOKEN);
                        if (!tokenService) return [3 /*break*/, 3];
                        return [4 /*yield*/, openTokenService(resource, tokenService)];
                    case 1:
                        tokenMessage = _a.sent();
                        if (!(tokenMessage && tokenMessage.accessToken)) return [3 /*break*/, 3];
                        return [4 /*yield*/, resource.getData(tokenMessage)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, resource];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Utils.loadExternalResourcesAuth09 = function (resources, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options) {
        return new Promise(function (resolve, reject) {
            var promises = resources.map(function (resource) {
                return Utils.loadExternalResourceAuth09(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options);
            });
            Promise.all(promises)
                .then(function () {
                resolve(resources);
            })["catch"](function (error) {
                reject(error);
            });
        });
    };
    // IIIF auth api pre v1.0
    // Keeping this around for now until the auth 1.0 implementation is stable
    Utils.loadExternalResourceAuth09 = function (resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options) {
        return new Promise(function (resolve, reject) {
            if (options && options.pessimisticAccessControl) {
                // pessimistic: access control cookies may have been deleted.
                // always request the access token for every access controlled info.json request
                // returned access tokens are not stored, therefore the login window flashes for every request.
                resource.getData().then(function () {
                    if (resource.isAccessControlled()) {
                        // if the resource has a click through service, use that.
                        if (resource.clickThroughService) {
                            resolve(clickThrough(resource));
                            //} else if(resource.restrictedService) {
                            resolve(restricted(resource));
                        }
                        else {
                            login(resource).then(function () {
                                getAccessToken(resource, true).then(function (token) {
                                    resource.getData(token).then(function () {
                                        resolve(handleResourceResponse(resource));
                                    })["catch"](function (message) {
                                        reject(Utils.createInternalServerError(message));
                                    });
                                })["catch"](function (message) {
                                    reject(Utils.createInternalServerError(message));
                                });
                            })["catch"](function (message) {
                                reject(Utils.createInternalServerError(message));
                            });
                        }
                    }
                    else {
                        // this info.json isn't access controlled, therefore no need to request an access token.
                        resolve(resource);
                    }
                })["catch"](function (message) {
                    reject(Utils.createInternalServerError(message));
                });
            }
            else {
                // optimistic: access control cookies may not have been deleted.
                // store access tokens to avoid login window flashes.
                // if cookies are deleted a page refresh is required.
                // try loading the resource using an access token that matches the info.json domain.
                // if an access token is found, request the resource using it regardless of whether it is access controlled.
                getStoredAccessToken(resource, tokenStorageStrategy).then(function (storedAccessToken) {
                    if (storedAccessToken) {
                        // try using the stored access token
                        resource.getData(storedAccessToken).then(function () {
                            // if the info.json loaded using the stored access token
                            if (resource.status === HTTPStatusCode.OK) {
                                resolve(handleResourceResponse(resource));
                            }
                            else {
                                // otherwise, load the resource data to determine the correct access control services.
                                // if access controlled, do login.
                                Utils.authorize(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken).then(function () {
                                    resolve(handleResourceResponse(resource));
                                })["catch"](function (error) {
                                    // if (resource.restrictedService){
                                    //     reject(Utils.createRestrictedError());
                                    // } else {
                                    reject(Utils.createAuthorizationFailedError());
                                    //}
                                });
                            }
                        })["catch"](function (error) {
                            reject(Utils.createAuthorizationFailedError());
                        });
                    }
                    else {
                        Utils.authorize(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken).then(function () {
                            resolve(handleResourceResponse(resource));
                        })["catch"](function (error) {
                            reject(Utils.createAuthorizationFailedError());
                        });
                    }
                })["catch"](function (error) {
                    reject(Utils.createAuthorizationFailedError());
                });
            }
        });
    };
    Utils.createError = function (name, message) {
        var error = new Error();
        error.message = message;
        error.name = String(name);
        return error;
    };
    Utils.createAuthorizationFailedError = function () {
        return Utils.createError(StatusCode_1.StatusCode.AUTHORIZATION_FAILED, "Authorization failed");
    };
    Utils.createRestrictedError = function () {
        return Utils.createError(StatusCode_1.StatusCode.RESTRICTED, "Restricted");
    };
    Utils.createInternalServerError = function (message) {
        return Utils.createError(StatusCode_1.StatusCode.INTERNAL_SERVER_ERROR, message);
    };
    Utils.authorize = function (resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken) {
        return new Promise(function (resolve, reject) {
            resource.getData().then(function () {
                if (resource.isAccessControlled()) {
                    getStoredAccessToken(resource, tokenStorageStrategy).then(function (storedAccessToken) {
                        if (storedAccessToken) {
                            // try using the stored access token
                            resource.getData(storedAccessToken).then(function () {
                                if (resource.status === HTTPStatusCode.OK) {
                                    resolve(resource); // happy path ended
                                }
                                else {
                                    // the stored token is no good for this resource
                                    Utils.showAuthInteraction(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject);
                                }
                            })["catch"](function (message) {
                                reject(Utils.createInternalServerError(message));
                            });
                        }
                        else {
                            // There was no stored token, but the user might have a cookie that will grant a token
                            getAccessToken(resource, false).then(function (accessToken) {
                                if (accessToken) {
                                    storeAccessToken(resource, accessToken, tokenStorageStrategy).then(function () {
                                        // try using the fresh access token
                                        resource.getData(accessToken).then(function () {
                                            if (resource.status === HTTPStatusCode.OK) {
                                                resolve(resource);
                                            }
                                            else {
                                                // User has a token, but it's not good enough
                                                Utils.showAuthInteraction(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject);
                                            }
                                        })["catch"](function (message) {
                                            reject(Utils.createInternalServerError(message));
                                        });
                                    })["catch"](function (message) {
                                        // not able to store access token
                                        reject(Utils.createInternalServerError(message));
                                    });
                                }
                                else {
                                    // The user did not have a cookie that granted a token
                                    Utils.showAuthInteraction(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject);
                                }
                            });
                        }
                    })["catch"](function (message) {
                        reject(Utils.createInternalServerError(message));
                    });
                }
                else {
                    // this info.json isn't access controlled, therefore there's no need to request an access token
                    resolve(resource);
                }
            });
        });
    };
    Utils.showAuthInteraction = function (resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject) {
        if (resource.status === HTTPStatusCode.MOVED_TEMPORARILY && !resource.isResponseHandled) {
            // if the resource was redirected to a degraded version
            // and the response hasn't been handled yet.
            // if the client wishes to trigger a login, set resource.isResponseHandled to true
            // and call loadExternalResources() again passing the resource.
            resolve(resource);
            // } else if (resource.restrictedService) {
            //     resolve(restricted(resource));
            //     // TODO: move to next etc
        }
        else if (resource.clickThroughService && !resource.isResponseHandled) {
            // if the resource has a click through service, use that.
            clickThrough(resource).then(function () {
                getAccessToken(resource, true).then(function (accessToken) {
                    storeAccessToken(resource, accessToken, tokenStorageStrategy).then(function () {
                        resource.getData(accessToken).then(function () {
                            resolve(resource);
                        })["catch"](function (message) {
                            reject(Utils.createInternalServerError(message));
                        });
                    })["catch"](function (message) {
                        reject(Utils.createInternalServerError(message));
                    });
                })["catch"](function (message) {
                    reject(Utils.createInternalServerError(message));
                });
            });
        }
        else {
            // get an access token
            login(resource).then(function () {
                getAccessToken(resource, true).then(function (accessToken) {
                    storeAccessToken(resource, accessToken, tokenStorageStrategy).then(function () {
                        resource.getData(accessToken).then(function () {
                            resolve(resource);
                        })["catch"](function (message) {
                            reject(Utils.createInternalServerError(message));
                        });
                    })["catch"](function (message) {
                        reject(Utils.createInternalServerError(message));
                    });
                })["catch"](function (message) {
                    reject(Utils.createInternalServerError(message));
                });
            });
        }
    };
    ;
    Utils.getService = function (resource, profile) {
        var services = this.getServices(resource);
        for (var i = 0; i < services.length; i++) {
            var service = services[i];
            if (service.getProfile() === profile) {
                return service;
            }
        }
        return null;
    };
    Utils.getResourceById = function (parentResource, id) {
        return Utils.traverseAndFind(parentResource.__jsonld, '@id', id);
    };
    /**
     * Does a depth first traversal of an Object, returning an Object that
     * matches provided k and v arguments
     * @example Utils.traverseAndFind({foo: 'bar'}, 'foo', 'bar')
     */
    Utils.traverseAndFind = function (object, k, v) {
        if (object.hasOwnProperty(k) && object[k] === v) {
            return object;
        }
        for (var i = 0; i < Object.keys(object).length; i++) {
            if (typeof object[Object.keys(object)[i]] === "object") {
                var o = Utils.traverseAndFind(object[Object.keys(object)[i]], k, v);
                if (o != null) {
                    return o;
                }
            }
        }
        return undefined;
    };
    Utils.getServices = function (resource) {
        var service;
        // if passing a manifesto-parsed object, use the __jsonld.service property,
        // otherwise look for a service property (info.json services)
        if (resource.__jsonld) {
            service = resource.__jsonld.service;
        }
        else {
            service = resource.service;
        }
        var services = [];
        if (!service)
            return services;
        // coerce to array
        if (!Array.isArray(service)) {
            service = [service];
        }
        for (var i = 0; i < service.length; i++) {
            var s = service[i];
            if (typeof (s) === 'string') {
                var r = this.getResourceById(resource.options.resource, s);
                if (r) {
                    services.push(new Service_1.Service(r.__jsonld || r, resource.options));
                }
            }
            else {
                services.push(new Service_1.Service(s, resource.options));
            }
        }
        return services;
    };
    Utils.getTemporalComponent = function (target) {
        var temporal = /t=([^&]+)/g.exec(target);
        var t = null;
        if (temporal && temporal[1]) {
            t = temporal[1].split(',');
        }
        return t;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map