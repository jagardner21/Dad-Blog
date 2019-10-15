const knex = require('../db/knex')

exports.getPosts = function (req, res) {
    knex('posts')
        .then(posts => res.json(posts))
}

exports.getOnePost = function (req, res) {
    knex('posts')
        .where('id', req.params.id)
        .then(posts => res.json(posts))
}

exports.addPost = function (req, res) {
    knex('posts')
        .insert({
            ...req.body,
            created_at: new Date()
        })
        .returning('*')
        .then(newPost => res.json(newPost))
}

exports.updatePost = function (req, res) {
    knex('posts')
        .update(req.body)
        .where('id', req.params.id)
        .returning('*')
        .then(updatedPost => res.json(updatedPost))
}

exports.removePost = function (req, res) {
    knex('posts')
        .del()
        .where('id', req.params.id)
        .returning('*')
        .then(deletedPost => res.json(deletedPost))
}