const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res)=>{
    console.log(res.url);
    // res.writeHead(200, {"Content-Type": "application/json"});
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(`<h4>llll</h4>`);
    res.end();
});
server.listen(PORT, () => {
    console.log(`Server is listening on port ${5000}`);
});