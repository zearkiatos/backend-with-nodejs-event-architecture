// %s is stream
// %d is number
// %j is json

console.log("A %s and a %s","dog", "cat");

console.info("Hello world!");

console.warn("Hello error");

console.assert(42 == "42");
console.assert(42 === "42");

console.trace("Hello");

const util = require('util');

const debugLog = util.debuglog("foo");

util.debuglog("Hello from foo");