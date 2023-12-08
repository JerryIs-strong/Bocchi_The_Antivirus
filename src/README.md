# Bocchi the antivirus api usage

## ${action}
1. update
    - $_GET['current_version']
2. get
    - No need, api will automatically return the latest version.(No need to add any ${additionVariable})
3. download
    - No need, api will automatically choose the latest version to download.(No need to add any ${additionVariable})

```https://bocchi-the-antivirus-api.000webhostapp.com/?action=${action}&${additionVariable}```
