const {
  app, //  控制应用生命周期的模块
  BrowserWindow // 创建原生浏览器窗口的模块
} = require('electron')
const path = require('path')


function createWindow() {
  // 创建窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  // 加载 页面内容
  win.loadFile(`file://${__dirname}/build/index.html`)
  // win.loadURL('https://github.com')
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