const http = require('http')
const dt = require('./2-demoNodeModules')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`The date and time is ${dt.myDateTime()}`)
    res.end()
}).listen(8080)