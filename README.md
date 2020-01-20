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
import GetFileOrFolderData from 'github-file-or-folder-data';

const data = GetFileOrFolderData.run({
    token: '<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN',
    mediaFormat: 'raw',
    owner: '<REPO_OWNER>',
    repository: '<REPO_NAME>',
    ref: '<TARGET_BRANCH>',
    path: '<FILE_OR_FOLDER_PATH>',
    type: '<PRIVATE_OR_PUBLIC>'
});

data
    .then(file => console.log(file))
    .catch(error => console.log(error.message));
```
