require('dotenv').config()

let PORT = process.env.PORT || 3001
let ACCESS_KEY = process.env.ACCESS_KEY
let SECRET_KEY = process.env.SECRET_KEY

module.exports = { PORT, ACCESS_KEY, SECRET_KEY }
