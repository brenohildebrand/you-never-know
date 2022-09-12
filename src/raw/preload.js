import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('stdout', (msg) => {
  ipcRenderer.invoke('stdout', msg);
});

contextBridge.exposeInMainWorld('database', {
  write: (node) => ipcRenderer.invoke('database::write', node),
  read: (id) => ipcRenderer.invoke('database::read', id),
  fetch: () => ipcRenderer.invoke('database::fetch'), 
});