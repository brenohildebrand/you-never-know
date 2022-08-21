'use strict';

var electron = require('electron');

electron.contextBridge.exposeInMainWorld('stdout', (msg) => {
  electron.ipcRenderer.invoke('stdout', msg);
});

electron.contextBridge.exposeInMainWorld('db', {
  write: (node) => electron.ipcRenderer.invoke('db:write', node),
});
