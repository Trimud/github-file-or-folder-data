# github-file-or-folder-data

Get File or Folder data from any public or private Github Repository

## Installation

```bash
    $ npm install github-file-or-folder-data
    # Or
    $ yarn add github-file-or-folder-data
```

## Use this package in your own project

```bash
import GetFileOrFolderData from 'github-file-or-folder-data';;

const data = GetFileOrFolderData.run({
    authentication: 'accessToken', // or 'githubApp' if authentication will be done as Github App
    appID: <APP_ID>,
    privateKey: '<APP_PRIVATE_KEY>', // APP_ID.pem file content where all line breaks are replaced with \n
    installationID: <APP_INSTALLATION_ID>,
    token: '<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN',
    mediaFormat: 'raw',
    owner: '<REPO_OWNER>',
    repository: '<REPO_NAME>',
    ref: '<TARGET_BRANCH>', // optional, will default to 'master'
    path: '<FILE_OR_FOLDER_PATH>',
    type: '<PRIVATE_OR_PUBLIC>'
});

data
    .then(file => console.log(file))
    .catch(error => console.log(error.message));
```
