'use strict';

var electron = require('electron');

electron.contextBridge.exposeInMainWorld('stdout', (msg) => {
  electron.ipcRenderer.invoke('stdout', msg);
});

electron.contextBridge.exposeInMainWorld('db', {
  saveNode: (node) => electron.ipcRenderer.invoke('db:saveNode', node),
});
