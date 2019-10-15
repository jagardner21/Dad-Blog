const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/comments')

router.get('/', commentsController.getComments)
router.get('/:id', commentsController.getOneComment)
router.post('/', commentsController.addComment)
router.patch('/:id', commentsController.updateComment)
router.delete('/:id', commentsController.removeComment)

module.exports = router