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
  const photos = await unsplash.search.photos(`${body.search}`)
  res.json(await toJson(photos))
  console.log(photos.headers)
})

//Return a single random stock photo based on params set by user
unsplashRouter.get('/random', async (req, res) => {
  const params = req.query
  const q = { query: params.s }
  const qp = `&auto=format${params.w ? `&w=${params.w}` : ''}${
    params.h ? `&h=${params.h}` : ''
  }&fit=clip`
  if (!q.query) {
    const photo = await toJson(await unsplash.photos.getRandomPhoto())
    res.send(`<img src=${photo.urls.regular}/>`)
  } else {
    const photo = await toJson(await unsplash.photos.getRandomPhoto(q))
    if (params.w || params.h) {
      res.send(`<img src=${photo.urls.raw + qp}/>`)
    } else {
      res.send(`<img src=${photo.urls.regular}/>`)
    }
  }
})

module.exports = unsplashRouter
