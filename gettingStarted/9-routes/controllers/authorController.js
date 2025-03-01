const db = require('../db')
const NotFoundError = require('../errors/customNotFoundError')
const asyncHandler = require('express-async-handler')

const getAuthorById = asyncHandler( async (req, res) =>{
    const {authorId} = req.params

    const authors = await db.getAuthorById(Number(authorId))
    if(!authors) throw new NotFoundError(`Author Not found with the AuthorId: ${authorId}`)
    res.status(200).send(`Author Name: ${authors.name}`)
})

module.exports = {getAuthorById}