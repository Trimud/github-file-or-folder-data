// import { appAuthentication } from './auth';
import { createAppAuth } from '@octokit/auth-app';
import { request } from '@octokit/request';
import { GHOptions } from "./interfaces";

export default class GetFileOrFolderData {
    static async run(options: GHOptions) {
        // Set defaults
        const path: string = 'GET /repos/:owner/:repo/contents/:path';
        let defaultRequest = request.defaults({
            mediaType: {
                format: options.mediaFormat || 'raw'
            },
            owner: options.owner,
            repo: options.repository,
            path: options.path,
            ref: options.ref || 'master',
            type: options.type
        });

        // Authorize request with Personal Access Token if repo is private
        // and authentication type is 'accessToken'
        if (options.authentication === 'accessToken' && options.type === 'private') {
            defaultRequest = defaultRequest.defaults({
                headers: {
                    authorization: `token ${options.token}`
                }
            });
        }

        // Authorize request as Github App Installation
        if (options.authentication === 'githubApp') {
            const auth = createAppAuth({
                id: options.appID!,
                privateKey: options.privateKey!,
                installationId: options.installationID!
            });

            // Set default request header and mediaType
            defaultRequest = defaultRequest.defaults({
                request: {
                    hook: auth.hook
                },
                mediaType: {
                    previews: ['machine-man']
                }
            });
        }

        // Make the call to get file/folder response
        const data = await defaultRequest(path);

        return data;
    }
}
