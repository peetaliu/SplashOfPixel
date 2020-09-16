const unsplashRouter = require('express').Router()
require('express-async-errors')
const fetch = require('node-fetch')
global.fetch = fetch
const Unsplash = require('unsplash-js').default
const toJson = require('unsplash-js').toJson
const config = require('../utils/config')
const unsplash = new Unsplash({ accessKey: config.ACCESS_KEY })

//Search for photos based on params set by user
unsplashRouter.post('/', async (req, res) => {
  const body = req.body
  console.log('body', body)
  const photos = await unsplash.search.photos(`${body.search}`)
  res.json(await toJson(photos))
  console.log(photos.headers)
})

module.exports = unsplashRouter
