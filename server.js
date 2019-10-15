const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 8000
const logger = require('morgan')
const users = require('./routes/users')
const posts = require('./routes/posts')
const comments = require('./routes/comments')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/users', users)
app.use('/posts', posts)
app.use('/comments', comments)

app.listen(port, () => console.log(`Listening on port ${port}...`))