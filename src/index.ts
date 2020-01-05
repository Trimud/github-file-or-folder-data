"use strict";

import { request } from '@octokit/request';

/**
 * @param {String} token Personal Access Token for private repos
 * @param {String} mediaFormat Media type param, such as `raw`, `html`, or `full`
 * @param {String} owner Repository owner
 * @param {String} repository Repository name
 * @param {String} ref Repository branch (Defaults to default branch for the repo)
 * @param {String} path Path to file
 */
class Options {
    constructor(
        public token: string,
        public mediaFormat: string,
        public owner: string,
        public repository: string,
        public ref: string,
        public path: string
    ) {};
}
export default class GetFile {
    static async run(options: Options) {
        const result = await request('GET /repos/:owner/:repo/contents/:path', {
            headers: {
                authorization: `token ${options.token}`
            },
            mediaType: {
                format: options.mediaFormat
            },
            owner: options.owner,
            repo: options.repository,
            path: options.path,
            ref: options.ref,
            type: 'private'
        }).catch((error) => {
            console.error(`${error}`);
            process.exit(1);
        });

        return result.data;
    }
}
