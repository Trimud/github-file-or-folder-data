import { request } from '@octokit/request';
import { Options, Request } from "./interfaces";

export default class GetFileOrFolderData {
    static async run(options: Options) {
        // Set defaults
        const path: string = 'GET /repos/:owner/:repo/contents/:path';
        const req: Request = {
            mediaType: {
                format: options.mediaFormat || 'raw'
            },
            owner: options.owner,
            repo: options.repository,
            path: options.path,
            ref: options.ref || 'master',
            type: options.type
        };

        // Authorize request with Personal Access Token if repo is private
        if (options.type === 'private') {
            req.headers = {
                authorization: `token ${options.token}`
            }
        }

        // Make the call to get file/folder data
        const result = await request(path, req).catch((error) => {
            // Log error and exit script
            console.error(`${error}`);
            process.exit(1);
        });

        // Return file/folder data
        return result.data;
    }
}
