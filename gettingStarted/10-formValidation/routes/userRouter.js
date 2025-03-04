const {Router} = require("express")
const userRouter = Router()
const userController = require("../controllers/userController")

userRouter.get("/", userController.userListGet)
userRouter.get("/create", userController.userCreateGet)
userRouter.post("/create", userController.userCreatePost)


module.exports = userRouter;