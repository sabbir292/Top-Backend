const {Router} = require('express')
const bookRouter = Router()

bookRouter.get('/', (req, res) => res.send("welcome to bookRouter"))
bookRouter.get('/:bookId', (req, res) => {
    const {bookId} = req.params
    res.send(`Book Id: ${bookId}`)
})

module.exports = bookRouter