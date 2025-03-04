const userStorage = require("../storages/userStorage")
const {body, validationResult} = require("express-validator")

const alphaErr = "Must only contain letters"
const lengthErr = "Must be between 1 and 10 characters"

const validateUser = [
    body("firstName").trim()
    .isAlpha().withMessage(`First Name ${alphaErr}`)
    .isLength({min: 1, max: 10}).withMessage(`First Name ${lengthErr}`),

    body("lastName").trim()
    .isAlpha().withMessage(`Last Name ${alphaErr}`)
    .isLength({min:1, max:10}).withMessage(`Last Name ${lengthErr}`)
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

            const {firstName, lastName} = req.body
            userStorage.addUser(firstName, lastName)
            console.log(userStorage.getUsers(), firstName, lastName)
            res.redirect("/")
}
]

