const knex = require('../db/knex')

exports.getComments = function (req, res) {
    knex('comments')
        .then(comments => res.json(comments))
}

exports.getOneComment = function (req, res) {
    knex('comments')
        .where('id', req.params.id)
        .then(comments => res.json(comments))
}

exports.addComment = function (req, res) {
    knex('comments')
        .insert({
            ...req.body,
            created_at: new Date()
        })
        .returning('*')
        .then(newComment => res.json(newComment))
}

exports.updateComment = function (req, res) {
    knex('comments')
        .update(req.body)
        .where('id', req.params.id)
        .returning('*')
        .then(updatedComment => res.json(updatedComment))
}

exports.removeComment = function (req, res) {
    knex('comments')
        .del()
        .where('id', req.params.id)
        .returning('*')
        .then(deletedComment => res.json(deletedComment))
}