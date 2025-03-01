const messages = require("../db").getMessages()
const newMessageForm = (req, res, nex) => {
    res.render('form')
}

const postNewMessage = (req, res, next) => {
    const name = req.body.name
    const message = req.body.message
    const added = new Date()
    console.log(messages)
    messages.push({user:name, text:message, added:added})
    res.redirect('/')
 }
 
 const viewMessageDetails = (req, res, next) => {
    const userName = req.params.userName
    console.log(userName)
    let message = messages.find(m => m.user === userName)
    console.log(message)
    res.render('messageDetails', {title: 'message details', message: message})
 }

module.exports = {newMessageForm, postNewMessage, viewMessageDetails}