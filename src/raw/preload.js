import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('stdout', (msg) => {
  ipcRenderer.invoke('stdout', msg);
});

contextBridge.exposeInMainWorld('db', {
  write: (node) => ipcRenderer.invoke('db:write', node),
  read: (id) => ipcRenderer.invoke('db:read', id),
});