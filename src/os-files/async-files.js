const fs = require("fs");

const file = process.argv[2];
if(!file) {
    throw new Error('You need to type the file path than you need to use');
}
const content = fs.readFile(file, (error, content) => {
  if (error) {
    console.error(error);
  }

  const lines = content.toString().split("\n").length;
  console.log(lines);
});
