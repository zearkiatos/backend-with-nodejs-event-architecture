const fs = require("fs");

const out = fs.createWriteStream("./out.log");
const error = fs.createWriteStream("./error.log");

const consoleFile = new console.Console(out, error);

const customConsole = new console.Console(out, error);

customConsole.log = (message) => {
  consoleFile.log(`%c 📄 Logger: ${message}`, "color: #00ff00;");
};

customConsole.error = (message) => {
  consoleFile.error(` ⛔ Error: ${message}`);
};

customConsole.info = (message) => {
  consoleFile.info(` 🗨 Info: ${message}`);
};

customConsole.warn = (message) => {
  consoleFile.warn(` ⚠ Warning: ${message}`);
};

setInterval(() => {
  customConsole.log("Test Message");

  customConsole.error("Test error");

  customConsole.info("Test info");

  customConsole.warn("Test warning");
}, 2000);
