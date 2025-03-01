const Router = require("express")
const { newMessageForm, postNewMessage, viewMessageDetails} = require("../controllers/messageController")
const messageRouter = Router()


messageRouter.get("/", newMessageForm)
messageRouter.post("/", postNewMessage)
messageRouter.get("/:userName", viewMessageDetails)

module.exports = messageRouter