const http = require('http');
const os = require('os')
const path = require('path')
const fs = require('fs')


// create server
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    // res.write(req.url);
    res.write('hi');
    res.end();
}).listen(8080);
// console.log(http);
// console.log(__filename);


// console.log(os);
const systemUptime = os.uptime();
const machine = os.machine();
const userInfo = os.userInfo();
const cpus = os.cpus();
const release = os.release();
const type = os.type();
const totalMem = os.totalmem();
const version = os.version();

const otherInfo = {
    name: os.type(),
    version: os.version(),
    freeMam: os.freemem(),
    release: os.release()
}
console.log(otherInfo);


// console.log(cpus)
// console.log(userInfo);
// console.log(systemUptime);
// console.log(machine);
// console.log(cpus);
// console.log(release);
// console.log(type);
// console.log(totalMem);
// console.log(version);


