const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url);
    const extName = path.extname(req.url)

    if(req.url === '/') filePath = path.join(__dirname, 'home.html')
    else if(!extName) filePath+= '.html'

    let contentType = 'text/html'

    switch(extName){
        case '.css':
            contentType = 'text/css'
            break
    }

    fs.readFile(filePath, (err, content) => {
        if (err){
            if(err.code === 'ENOENT'){
                fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
                    if(err){
                        res.writeHead(500)
                        res.end('Server Error')
                    }
                    res.writeHead(200, {'Content-Type': contentType})
                    res.end(content, 'utf8')
                })
            }
        }
        else{
            res.writeHead(200, {"Content-Type": contentType})
            res.end(content, 'utf8')
        }
    })
})

server.listen(8080, () => console.log('server is running'))

