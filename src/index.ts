import { RequestInterface } from '@octokit/auth-app/dist-types/types';
import { appAuthentication, personalTokenAuthentication } from './auth';
import { Options, Request } from "./interfaces";

let result: RequestInterface;

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
        // and authentication type is 'accessToken'

        if (options.authentication === 'accessToken') {
            result = personalTokenAuthentication(options.token!);
        } else {
            result = appAuthentication(options.appID!, options.privateKey!, options.installationID!);
        }

        const appFunc = async () => {
            const data = await result(path, req);

            return data;
        }

        // Return file/folder data
        return appFunc();
    }
}
