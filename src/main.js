import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import fs from 'node:fs/promises';

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

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}


// Handlers
const handlers = {
  "stdout": (event, msg) => {
    console.log(msg);
  },
  "db:write": async (event, node) => {
    const str = JSON.stringify(node);

    try {
      const filePath = path.join(__dirname, 'db', node.id);
      await fs.writeFile(filePath, str);
    } catch ( err ) {
      return err;
    }

    return 'the node was successfully stored!';
  },
  "db:read": async (event, id) => {
    try {
      const filePath = path.join(__dirname, 'db', id);
      const str = await fs.readFile(filePath, { encoding: 'utf-8' });
      const node = JSON.parse(str);
      return node;
    } catch ( err ) {
      return err;
    }
  }
};

// activate handlers
for(const key in handlers) {
  ipcMain.handle(key, handler[key]);
}