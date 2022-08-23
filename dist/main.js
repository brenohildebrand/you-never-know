'use strict';

var electron = require('electron');
var path = require('node:path');
var fs = require('node:fs/promises');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);

/**
 * App Startup
 */
const createWindow = () => {
  const win = new electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path__default["default"].join(__dirname, 'preload.js'),
    }
  });

  win.loadFile(path__default["default"].join(__dirname, 'index.html'));
};

electron.app.whenReady().then(() => {
  createWindow();

  electron.app.on('activate', () => {
    if (electron.BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

electron.app.on('window-all-closed', () => {
  if (process.platform === 'linux' || process.platform === 'win32') {
    electron.app.quit();
  }
});


/**
 * Handlers
 */
const dbPath = path__default["default"].join(__dirname, 'db');

electron.ipcMain.handle('stdout', (event, msg) => {
  console.log(msg);
});

electron.ipcMain.handle('db:write', async (event, node) => {
  console.log('db:write was called!');
  // check if it's a valid node
  // important for security

  // IMPORTANT: during the installation of the app, mkdir on dbPath

  // stringify
  const str = JSON.stringify(node); 

  // try to save
  try {
    const filePath = path__default["default"].join(dbPath, node.id);
    await fs__default["default"].writeFile(filePath, str);
  } catch ( err ) {
    return err;
  }
  
  // return success
  return 'The node was successfully stored.';
});

electron.ipcMain.handle('db:read', async (event, id) => {
  console.log('db:read was called!');
  
  try {
    const filePath = path__default["default"].join(dbPath, id);
    const str = await fs__default["default"].readFile(filePath, { encoding: 'utf8' });
    const node = JSON.parse(str);

    return node;
  } catch ( err ) {
    return err;
  }
});
