import { createAppAuth } from '@octokit/auth-app';
import { request } from '@octokit/request';

// Authenticate as App installation
export const appAuthentication = (appID: number, privateKey: string, installationID: number) => {
    // Create app authentication
    const auth = createAppAuth({
        id: appID,
        privateKey: privateKey,
        installationId: installationID
    });

    // Set default request header and mediaType
    const requestWithAuth = request.defaults({
        request: {
            hook: auth.hook
        },
        mediaType: {
            previews: ['machine-man']
        }
    });

console.log(requestWithAuth);

    return requestWithAuth;
}

export const personalTokenAuthentication = (token: string) => {
    const requestWithToken = request.defaults({
        request: {
            headers: {
                authorization: `token ${token}`
            }
        }
    });

    console.log(requestWithToken);

    return requestWithToken;
}
