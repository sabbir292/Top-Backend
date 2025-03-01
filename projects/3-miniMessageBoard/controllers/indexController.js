const db = require('../db')
const path = require("node:path")

const getMessages = (req, res, next) => {
    let messages = db.getMessages()
    console.log(messages)

    res.render('index', {title: "Mini MessageBoard", messages: messages})
}

module.exports = {getMessages}