const {Router} = require('express')
const indexRouter = Router()

indexRouter.get('/', (req, res) => res.send("Welcome to Index Page"))
module.exports = indexRouter