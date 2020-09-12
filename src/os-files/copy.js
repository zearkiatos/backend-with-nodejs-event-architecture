const fs = require('fs');

fs.copyFile("src/os-files/lorem.txt", "lorem2.txt", (error) => {
    if(error) {
        console.error(error);
    }

    console.log("lorem.txt was copy as lorem2.txt");
});