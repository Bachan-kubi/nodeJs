const http = require('http');
const fs = require('fs');
const PORT = 5000;

// read files
const server = http.createServer((req, res) => {
    fs.readFile('demoFile.html', (err, data) => {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("File not found");
            return res.end();
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    });
});

// create files
// fs.appendFile('newFile.html', 'kisu dite hobe', (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('file is saved');
// });
// create new file with empty content
// fs.open("open.html", 'w', (error)=>{
//     if(error){
//         throw error;
//     }
//     console.log('new file created');
// });
// replace with file or create new one if doesnt exist
// fs.writeFile('newFiles.html', 'marse', (error)=>{
//     if(error){
//         throw error;
//     }
//     console.log('replaced or created one!');
// });
// update files
// fs.appendFile();
// fs.writeFile()

// delete files
// fs.unlink('open.html', (err)=>{
//     if(err) throw err;
//     console.log('file deleted!!')
// });
// rename files
fs.rename('newFiles.html', 'allFiles.html', (error)=>{
    if(error) throw error;
    console.log('renamed!')
});


server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
