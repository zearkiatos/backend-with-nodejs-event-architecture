const EventEmitter = require("events");

class Logger extends EventEmitter {
  execute(cb) {
    console.log("Before");
    this.emit("start");
    cb();
    console.log("After");
  }
}

const logger = new Logger();

logger.on("start", () => {
  console.log("Starting");
});

logger.on("finish", () => {
  console.log("Finishing");
});

logger.on("finish", () => {
  console.log("It is Done");
});

logger.execute(() => console.log("Hello World!"));
