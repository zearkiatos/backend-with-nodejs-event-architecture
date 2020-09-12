const fs = require('fs');

fs.mkdir("platzi/escuela.js/node", {recursive: true}, (error) => {
    if(error) {
        return console.error(error);
    }
});