const path = require('path');
const fs = require('fs');
const http = require('http');


const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, req.url === '/'? 'home.html' : req.url);
    const extName = path.extname(filePath);
    let contentType = 'text/html';

    switch(extName){
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
    }

    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
               fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
                res.writeHead(200, `{Content-Type: ${contentType}}`)
                res.end(content, 'utf8')
               })
            }else{
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }else{
            res.writeHead(200, `{Content-Type: ${contentType}`)
            res.end(content, 'utf8')
        }
    })
});

server.listen(PORT)
