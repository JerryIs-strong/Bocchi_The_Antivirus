const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 850,
    height: 550,
    minHeight: 500,
    maxHeight: 580,
    minWidth: 750,
    maxWidth: 900,
    icon: __dirname + '/web/icon.png',
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})