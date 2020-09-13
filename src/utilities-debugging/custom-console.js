const fs = require("fs");
const { Console } = require('console')

const out = fs.createWriteStream("./out.log");
const error = fs.createWriteStream("./error.log");

const consoleFile = new Console(out,error);
consoleFile.log("Test logs");