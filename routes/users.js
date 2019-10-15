const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

router.get('/', usersController.getUsers)
router.get('/:id', usersController.getOneUser)
router.post('/', usersController.addUser)
router.patch('/:id', usersController.updateUser)
router.delete('/:id', usersController.removeUser)

module.exports = router