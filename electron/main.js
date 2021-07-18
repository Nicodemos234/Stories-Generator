const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')


function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        autoHideMenuBar: true,
    })

    const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`

    win.loadURL(startURL)
    win.once('ready-to-show', () => {
        win.show()
        win.maximize()
    });

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);