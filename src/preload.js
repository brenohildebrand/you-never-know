import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('stdout', (msg) => {
  ipcRenderer.invoke('stdout', msg);
});

contextBridge.exposeInMainWorld('db', {
  saveNode: (node) => ipcRenderer.invoke('db:saveNode', node),
});