/**
 * @param {String} token Personal Access Token for private repos
 * @param {String} mediaFormat Media type param: `raw | html | full`
 * @param {String} owner Repository owner
 * @param {String} repository Repository name
 * @param {String} ref Repository branch: Defaults to `master`
 * @param {String} path Path to file or folder
 * @param {String} type Repository type: `public | private`
 */
 export interface Options {
    token?: string;
    mediaFormat?: string;
    owner: string;
    repository: string;
    ref?: string;
    path: string;
    type?: string;
}

export interface Request {
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
