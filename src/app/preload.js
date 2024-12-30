const { contextBridge, ipcRenderer } = require("electron");

// Expose a secure API to the renderer process
contextBridge.exposeInMainWorld("api", {
  send: (channel, data) => {
    const validChannels = []; // Add allowed channels for security
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, callback) => {
    const validChannels = []; // Add allowed channels for security
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => callback(...args));
    }
  },
});
