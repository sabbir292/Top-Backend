const express = require('express')
const app = express()
const path = require("path")
const port = process.env.PORT || 8000

app.use((req, res, next) => {
    const ext = path.extname(req.url)
    if(!ext && req.url !== '/') req.url += '.html'
    next()
})

app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
})
app.listen(port, ()=> console.log(`Server is running on the port ${port}`))




// app.get("/", (req, res) => {
//     let filePath = path.join(__dirname, req.url)
//     const ext = path.extname(filePath)
//     console.log(filePath)

//     if(!ext && req.url !== '/') filePath += '.html'
//     console.log(filePath)
//     res.sendFile(filePath)
// })
// app.get("/about", (req, res) => {
//     let filePath = path.join(__dirname, req.url)
//     const ext = path.extname(filePath)
//     console.log(filePath)

//     if(!ext && req.url !== '/') filePath += '.html'
//     console.log(filePath)
//     res.sendFile(filePath)
// })
// app.get("/contact-me", (req, res) => {
//     let filePath = path.join(__dirname, req.url)
//     const ext = path.extname(filePath)
//     console.log(filePath)

//     if(!ext && req.url !== '/') filePath += '.html'
//     console.log(filePath)
//     res.sendFile(filePath)
// })
// app.get("/", (req, res) => {
//     let filePath = path.join(__dirname, req.url)
//     const ext = path.extname(filePath)
//     console.log(filePath)

//     if(!ext && req.url !== '/') filePath += '.html'
//     console.log(filePath)
//     res.sendFile(filePath)
// })