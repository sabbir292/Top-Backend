const express = require("express")
const path = require("node:path")
const userRouter = require('./routes/userRouter')

const app = express()

app.use(express.urlencoded({extended: true}))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use("/", userRouter)


const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`server running on the port: ${port}`))