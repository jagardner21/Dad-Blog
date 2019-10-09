const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 8000
const knex = require('./db/knex')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get(`/users`, (req, res) => {
    knex.raw(`SELECT * FROM users`)
        .then(result => {
            res.json(result.rows)
        })
})

app.get(`/users/:id`, (req, res) => {
    knex.raw(`SELECT * FROM users WHERE id = ${req.params.id}`)
        .then(result => {
            if (!result.rows.length) {
                res.status(400).json({
                    status: 400,
                    message: "The user you are looking for does not exist"
                })
            } else {
                res.json(result.rows)
            }
        })
})

// post for users

// patch for users

// delete for users

app.get(`/posts`, (req, res) => {
    knex.raw(`SELECT * FROM posts`)
        .then(result => {
            res.json(result.rows)
        })
})

app.get(`/posts/:id`, (req, res) => {
    knex.raw(`SELECT * FROM posts WHERE id = ${req.params.id}`)
        .then(result => {
            if (!result.rows.length) {
                res.status(400).json({
                    status: 400,
                    message: "The post you are looking for does not exist"
                })
            } else {
                res.json(result.rows)
            }
        })
})

app.listen(port, () => console.log(`Listening on port ${port}...`))