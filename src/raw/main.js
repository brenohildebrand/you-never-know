import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import fs from 'node:fs/promises';

const paths = {
  preload: path.join(__dirname, 'preload.js'),
  html: path.join(__dirname, '..', 'index.html'),
  database: path.join(__dirname, '..', 'database'), 
}

/**
 * App Startup
 */
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: paths.preload,
    }
  })

  win.loadFile(paths.html)
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


/**
 * Handlers
 */
ipcMain.handle('stdout', (event, msg) => {
  console.log(msg);
});

ipcMain.handle('db:write', async (event, node) => {
  console.log('db:write was called!');
  // check if it's a valid node
  // important for security

  // IMPORTANT: during the installation of the app, mkdir on paths.database

  // stringify
  const str = JSON.stringify(node); 

  // try to save
  try {
    const filePath = path.join(paths.database, node.id);
    await fs.writeFile(filePath, str);
  } catch ( err ) {
    return err;
  }
  
  // return success
  return 'The node was successfully stored.';
});

ipcMain.handle('db:read', async (event, id) => {
  console.log('db:read was called!');
  
  try {
    const filePath = path.join(paths.database, id);
    const str = await fs.readFile(filePath, { encoding: 'utf8' });
    const node = JSON.parse(str);

    return node;
  } catch ( err ) {
    return err;
  }
});