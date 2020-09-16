const express = require('express')
const cors = require('cors')
const unsplashRouter = require('./controllers/unsplash')
require('express-async-errors')
const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/', unsplashRouter)

module.exports = app
