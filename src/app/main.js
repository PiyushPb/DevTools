const { app, BrowserWindow } = require("electron");
const path = require("path");
require("dotenv").config(); // Load environment variables from .env

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Optional, for secure communication
    },
  });

  const isDev = process.env.NODE_ENV === "development";

  console.log("Environment:", process.env.NODE_ENV);
  console.log("Is Development Mode:", isDev);

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173"); // URL for dev server
    mainWindow.webContents.openDevTools(); // Open dev tools in development mode
  } else {
    mainWindow.loadFile(path.join(__dirname, "../build/index.html")); // File for production
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
