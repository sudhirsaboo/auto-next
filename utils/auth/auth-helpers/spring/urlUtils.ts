import { APIConstants } from "./Config";

export function getOauthConfig() {
    return {
        accessTokenUri: APIConstants.OAUTH_URL,
        clientId: "mobile",
        clientSecret: "mobilesecret"
    };
}
export function getOauthUrl() {
    return APIConstants.OAUTH_URL;
}

export function getSignInUrl() {
    return APIConstants.SIGNIN_URL;
}

export function getSignUpUrl() {
    return APIConstants.SIGNUP_URL;
}
export function getChangePassUrl() {
    return APIConstants.CHANGEPASS_URL;
}
export function getRecoverUrl() {
    return APIConstants.RECOVERPASS_URL;
}

