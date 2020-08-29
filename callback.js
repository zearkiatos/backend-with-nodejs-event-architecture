const asyncCallback = function(cb) {
    setTimeout(() => {
        if(Math.random() < 0.5) {
            return cb(null, 'hello world')
        }
        else {
            cb(new Error('hello error'))
        }
    }, 2000);
}

asyncCallback((error, message) => {
    if(error) {
        console.error(`Error ${error}`)
    }
    else {
        console.log(`Message ${message}`)
    }
})