const express = require("express")
const indexRouter = require("./routers/indexRouter")
const messageRouter = require("./routers/messageRouter")
const path = require("node:path")

const app = express()
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}))

app.use("/", indexRouter)
app.use("/message", messageRouter)
app.use("/new", messageRouter)


app.set("views", path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



app.listen(port, ()=> console.log(`server running on the port: ${port}`))