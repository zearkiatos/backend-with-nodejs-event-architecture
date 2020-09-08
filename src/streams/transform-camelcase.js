const { Transform } = require('stream');
const { getCamelcase } = require('./utils/helper')

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(getCamelcase(chunk.toString().toUpperCase()));
        callback();
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);