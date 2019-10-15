const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts')

router.get('/', postsController.getPosts)
router.get('/:id', postsController.getOnePost)
router.post('/', postsController.addPost)
router.patch('/:id', postsController.updatePost)
router.delete('/:id', postsController.removePost)

module.exports = router