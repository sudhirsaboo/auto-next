
import base64 from "./Base64";
import { APIConstants } from "./Config";
import {
    getOauthUrl,
    getSignInUrl,
    getSignUpUrl,
    getChangePassUrl,
    getRecoverUrl
} from "./urlUtils";
import { cookies } from 'next/headers';

 
 
 export function trialLogin() {
    const user = { loginname: "demo", password: "demo" };
    login(user);
}

// this is getting the bearer token with client id and password.
export async function login(user) {
    const oauth_url = getOauthUrl();
 
    const client_id = "mobile";
    const client_secret = "mobilesecret";

    const headers = new Headers();
    headers.append("Accept", "application/json, text/javascript, */*; q=0.01");
 
    const auth = {
        Authorization: base64.encode(client_id + ":" + client_secret)
    };
    headers.append("Authorization", "Basic " + auth.Authorization);

    const indata = {
        grant_type: "password",
        username: user.loginname,
        password: user.password,
        client_id
    };
    const body = new FormData();
    for (const key in indata) {
        body.append(key, indata[key]);
    }
    let data = {accessToken:"" };
    let error = null;
    try      {
       const response = await  fetch(oauth_url, {
            method: "POST",
            headers,
            body
        })
        if (response.status > 299) {
            throw response;
        }
        const rep  = await response.json();
        data.accessToken = rep.access_token;
        
    }
    catch(ex: any){
        console.error(ex);
        error = {exception: ex, message:"An Error has Occured" };
    }
    let data2 = {user:{} };

    data2.user = await setUser( data.accessToken);

console.log(data2);
    return {data:data2, error};
}
export async function setUser(accessToken: string){
    const headers = new Headers();
    if (accessToken) {
        cookies().set("accessToken", accessToken);
    }
    headers.append(
        "Accept",
        "application/json, text/javascript, */*; q=0.01"
    );
    let data = {user: null};
    let error = {};
    if (accessToken)
        headers.append("Authorization", "Bearer " + accessToken); 
        try {
            let response = await fetch(APIConstants.SIGNIN_URL, {
                method: "get",
                headers,
                mode: "cors",
                credentials: "include"
            }) 
            if (response.status > 299 && response.status != 401) {
                throw response;
            }
            if (response.status === 401) {
                // TODO Cookies.remove(COOKIE_PATH);
            }
           let json =  await response.json();
           // TODO const authed = new Authed(json);
           data.user = json;
            console.log("setting json");
            console.log(json);

        } catch (ex) {
            console.error(ex);
            error = {exception: ex, message:"An Error has Occured - fettching user" };
        }
        return {data, error};
    
}
export function signup(data) {
    const url = getSignUpUrl();

    const headers = new Headers();
    headers.append("Accept", "application/json, text/javascript, */*; q=0.01");
    headers.append("Content-Type", "application/json"); // required

    const body = JSON.stringify(data);

    const p1 = new Promise(function(resolve, reject) {
        fetch(url, {
            method: "POST",
            headers,
            body
        })
            .then(function(response) {
                if (response.status > 299) {
                    throw response;
                }
                resolve(response);
            })
            .catch(function(err) {
                err.json().then(function(json) {
                    reject({ err, body: json });
                });
            });
    });

    return p1;
}

export function changepass(data) {
    const url = getChangePassUrl();

    const headers = new Headers();
    headers.append("Accept", "application/json, text/javascript, */*; q=0.01");
    headers.append("Content-Type", "application/json"); // required

    const body = JSON.stringify(data);

    const p1 = new Promise(function(resolve, reject) {
        fetch(url, {
            method: "POST",
            headers,
            body
        })
            .then(function(response) {
                if (response.status > 299) {
                    throw response;
                }
                resolve(response);
            })
            .catch(function(err) {
                err.json().then(function(json) {
                    reject({ err, body: json });
                });
            });
    });

    return p1;
}

// this is getting the cookie with the bearer token
export function signin(data) {
    const url = getSignInUrl();

    const headers = new Headers();
    headers.append("Accept", "application/json, text/javascript, */*; q=0.01");
    if (data && data.access_token) {
        headers.append("Authorization", "Bearer " + data.access_token);
    }
    //    headers.append("Cache-Control", "no-cache ");

    const p1 = new Promise(function(resolve, reject) {
        fetch(url, {
            method: "GET",
            headers
        })
            .then(function(response) {
                // var cookie = response.headers.get('set-cookie');
                response.json().then(function(json) {
                    resolve(json);
                });
            })
            .catch(function(err) {
                reject(err);
            });
    });

    return p1;
}
export function recoverpass(data) {
    const url = getRecoverUrl();

    const headers = new Headers();
    headers.append("Accept", "application/json, text/javascript, */*; q=0.01");
    headers.append("Content-Type", "application/json"); // required

    const body = JSON.stringify(data);

    const p1 = new Promise(function(resolve, reject) {
        fetch(url, {
            method: "POST",
            headers,
            body
        })
            .then(function(response) {
                if (response.status > 299) {
                    throw response;
                }
                resolve(response);
            })
            .catch(function(err) {
                err.json().then(function(json) {
                    reject({ err, body: json });
                });
            });
    });

    return p1;
}
