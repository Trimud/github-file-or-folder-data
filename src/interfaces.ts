/**
 * @param {String} authentication Authentication type: `accessToken | githubApp`
 * @param {String} appID Github App ID if authentication type is `githubApp`
 * @param {String} privateKey Github App Private key content if authentication type is `githubApp`. Replace new lines with '\n'
 * @param {String} installationID Github App ID if authentication type is `githubApp`
 * @param {String} token Personal Access Token for private repos if authentication type is `accessToken`
 * @param {String} mediaFormat Media type param: `raw | html | full`
 * @param {String} owner Repository owner
 * @param {String} repository Repository name
 * @param {String} ref Repository branch: Defaults to `master`
 * @param {String} path Path to file or folder
 * @param {String} type Repository type: `public | private`
 *
 * TODO: Make appID, privateKey and installationID required if
 * 'authentication' is set to 'githubApp'
 */
 export interface GHOptions {
    authentication: 'accessToken' | 'githubApp',
    appID?: number,
    privateKey?: string,
    installationID?: number,
    token?: string;
    mediaFormat?: 'raw' | 'html' | 'full';
    owner: string;
    repository: string;
    ref?: string;
    path: string;
    type?: string;
}

export interface GHRequest {
    token?: string,
    headers?: {
        authorization?: string;
    };
    mediaType?: {
        format: string;
    };
    owner: string;
    repo: string;
    path: string;
    ref?: string;
    type?: string;
}
