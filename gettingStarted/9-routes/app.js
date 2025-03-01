const express = require('express')
const authorRouter = require('./routes/authorRouter')
const bookRouter = require('./routes/bookRouter')
const indexRouter = require('./routes/indexRouter')
const path = require('node:path')
const app = express()

const port = process.env.PORT || 8000
const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
  ];

const users = ["kate", "fate", "mate"]
const assetPath = path.join(__dirname, 'public')
app.use(express.static(assetPath))

app.get('/', (req, res) => {
    res.render("index", {links:links, users:users, message: 'hardcoded Message'})
})
app.get('/about', (req, res) => {
    res.render("about", {message: 'welcome to about page'})
})


app.use('/', indexRouter)
app.use('/author', authorRouter)
app.use('/books', bookRouter)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.listen(port, ()=> console.log(`Server running on the port ${port}`))

