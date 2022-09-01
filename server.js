const express = require('express')
const app = express()
const path = require('path')
require("dotenv").config()
const cors = require('cors')

const { ROLLBARTOKEN } = process.env


app.use(express.json())
app.use(cors())


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: ROLLBARTOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
rollbar.log('rollbar is still being dumb')
rollbar.warning('your pc is overheating')
rollbar.critical('your pc exploded')


const port = process.env.port

app.listen(port, () => console.log(`server listening on ${port}`))