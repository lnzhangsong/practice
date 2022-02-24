const {
  app, //  控制应用生命周期的模块
  BrowserWindow // 创建原生浏览器窗口的模块
} = require('electron')
const isDev = require('electron-is-dev');


function createWindow() {
  // 创建窗口
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })

  // 加载 页面内容
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${__dirname}/../build/index.html`);
  // 开启 开发者工具
  mainWindow.openDevTools()
  // win.loadURL('https://github.com')

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})