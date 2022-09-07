import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import './handlers.js';

const pathToPreload = path.join(__dirname, 'preload.js');
const pathToHTML = path.join(__dirname, '..', 'index.html');

const createMainWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: pathToPreload,
    }
  })

  window.loadFile(pathToHTML);
}

const main = async () => {
  // Windows and Linux
  app.on('window-all-closed', () => {
    if (process.platform === 'linux' || process.platform === 'win32')
      app.quit();
  })

  // MacOS
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
      createMainWindow();
  })

  // Wait till it's ready
  await app.whenReady();

  // Create the main window
  createMainWindow();
}

main();