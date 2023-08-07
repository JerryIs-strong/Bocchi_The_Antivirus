# Bocchi the antivirus api usage

## ${action}
1. Update
    - $_GET['current_version']
2. Get
    - No need, api will automatically return the latest version.(No need to add any ${additionVariable})
3. Download
    - No need, api will automatically choose the latest version to download.(No need to add any ${additionVariable})

```https://bocchi-the-antivirus-api.000webhostapp.com/script/update.php?action=${action}&${additionVariable}```