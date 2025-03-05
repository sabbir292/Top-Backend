const { name } = require("ejs")
const { use } = require("../routes/userRouter")
const userStorage = require("../storages/userStorage")
const {body, validationResult} = require("express-validator")

const alphaErr = "Must only contain letters"
const lengthErr = "Must be between 1 and 10 characters"
const emailErr = "Entered is invalid"
const numErr = "Must only contain Numbers"
const ageLenthErr = "Must be between 1 and 120"
const bioLenthErr = "Must be between 1 and 200 characters"

const validateUser = [
    body("firstName").trim()
    .isAlpha().withMessage(`First Name ${alphaErr}`)
    .isLength({min: 1, max: 10}).withMessage(`First Name ${lengthErr}`),

    body("lastName").trim()
    .isAlpha().withMessage(`Last Name ${alphaErr}`)
    .isLength({min:1, max:10}).withMessage(`Last Name ${lengthErr}`),
    body("email").trim()
    .isEmail().withMessage(`Email ${emailErr}`),

    body("age").trim()
    .optional({checkFalsy: true})
    .isNumeric().withMessage(`Age ${numErr}`)
    .isLength({min:1, max:120}).withMessage(`Age ${ageLenthErr}`),
    
    body("bio").trim()
    .optional({checkFalsy: true})
    .matches(/^[A-Za-z\s]*$/).withMessage(`Bio ${alphaErr}`)
    .isLength({min:1, max:200}).withMessage(`Bio ${bioLenthErr}`)
]

exports.userListGet = (req, res) => {
    res.render('index', {
        title: "User Lists",
        users: userStorage.getUsers()
    })
    
}
exports.userCreateGet = (req, res) => {
    res.render('createUser', {title: "Create User"})
}

exports.userCreatePost = [
    validateUser,
    (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).render("createUser", {
                title: "Create User",
                errors: errors.array()
            })
        }

            const {firstName, lastName, email, age, bio} = req.body
            userStorage.addUser(firstName, lastName, email, age, bio)
            console.log(userStorage.getUsers(),)
            res.redirect("/")
}
]

exports.userUpdateGet = (req, res) => {
    const id = req.params.id
    const user = userStorage.getUser(id)

    res.render('updateUser', {
        title: "Update User",
        user: user,
    })
}

exports.userUpdatePost = [
    validateUser,

    (req, res) => {
    const errors = validationResult(req)
    const user = userStorage.getUser(req.params.id)
    if(!errors.isEmpty()){
        return res.status(400).render('updateUser',{
            title: "update Error",
            user: user,
            errors: errors.array()
        })
    }
    
    const {firstName, lastName, email, age, bio} = req.body
    const {id} = req.params

    userStorage.updateUser(id, {firstName, lastName, email, age, bio})
    res.redirect("/")
}]

exports.userDeletePost = (req, res) => {
    userStorage.deleteUser(req.params.id)
    res.redirect("/")
}


exports.userSearchGet = (req, res) => {
    const {sname, semail} = req.query
    const user = userStorage.searchUser(sname, semail)
    console.log(user)
    res.render("search", {
        title: "Search Result",
        user: user
    })
}