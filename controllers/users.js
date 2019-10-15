const knex = require('../db/knex')

exports.getUsers = function (req, res) {
    knex('users')
        .then(users => res.json(users))
}

exports.getOneUser = function (req, res) {
    knex('users')
        .where('id', req.params.id)
        .then(users => res.json(users))
}

exports.addUser = function (req, res) {
    knex('users')
        .insert({
            ...req.body,
            created_at: new Date()
        })
        .returning('*')
        .then(newUser => res.json(newUser))
}

exports.updateUser = function (req, res) {
    knex('users')
        .update(req.body)
        .where('id', req.params.id)
        .returning('*')
        .then(updatedUser => res.json(updatedUser))
}

exports.removeUser = function (req, res) {
    knex('users')
        .del()
        .where('id', req.params.id)
        .returning('*')
        .then(deletedUser => res.json(deletedUser))
}