const path = require('path');
const paths = require('path');
console.log(paths);

const myPath = "D:\nodejs\basics\index.js";

const pathInfo = {
    filName: path.basename(myPath),
    folderName: path.dirname(myPath),
    extenName: path.extname(myPath),
    parseName: path.parse(myPath),

}

console.log(myPath);
