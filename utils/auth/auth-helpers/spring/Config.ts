import { ENVConstants } from "./Config-gen";

export const CLIENT_ID = "f4323c6f7c0cd73d2d786a2b1cdae80c";
export const HOME_URL = "f4323c6f7c0cd73d2d786a2b1cdae80c";


const API_ROOT_URL = ENVConstants.API_ROOT_URL + "/";
console.log(API_ROOT_URL)

export const APIConstants = {
    API_ROOT_URL,
    API_BASE_URL: API_ROOT_URL + "api",
    OAUTH_URL: API_ROOT_URL + "oauth/token",
    SIGNIN_URL: API_ROOT_URL + "signin/check",
    SIGNIN_URL2: API_ROOT_URL + "signin",
    SIGNOUT_URL: API_ROOT_URL + "signout",
    SIGNUP_URL: API_ROOT_URL + "signup",
    CHANGEPASS_URL: API_ROOT_URL + "api/user/changePass",
    RECOVERPASS_URL: API_ROOT_URL + "api/user/recoverPass",

    UPLOAD_URL: API_ROOT_URL + "api/upload",
    DATA_URL: API_ROOT_URL + "api/art/data",
};console.log(APIConstants)

