const express = require('express')
const unsplashRouter = require('./controllers/unsplash')
require('express-async-errors')
const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json)

app.use('/splash', unsplashRouter)

module.exports = app
