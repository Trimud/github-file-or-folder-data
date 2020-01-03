"use strict";

import { request } from '@octokit/request';

class Options {
    constructor(
        public token: string,
        public mediaFormat: string,
        public owner: string,
        public repo: string,
        public ref: string,
        public path: string
    ) {};
}
export default class GetFile {
    static async run(options: Options) {
        try {
            const result = await request('GET /repos/:owner/:repo/contents/:path', {
                headers: {
                    authorization: `token ${options.token}`
                },
                mediaType: {
                    format: options.mediaFormat
                },
                owner: options.owner,
                repo: options.repo,
                path: options.path,
                ref: options.ref,
                type: 'private'
            });

            return result.data;
        } catch (error) {
            console.error(error);
        }
    }
}
