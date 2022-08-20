import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';

ipcMain.handle('stdout', (event, msg) => {
  console.log(msg);
});

ipcMain.handle('db:saveNode', async (event, node) => {
  console.log('db:saveNode was called!');
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform === 'linux' || process.platform === 'win32') {
    app.quit();
  }
})