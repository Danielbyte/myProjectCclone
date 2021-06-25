'use strict'
const express = require('express')
const app = express()

// loading body-parser
const bodyParser = require('body-parser')

const layoutRouter = require('./Routes/layoutRoutes.js')
const CreateAccRouter = require('./Routes/accountRoutes.js')
const ProfileRouter = require('./Routes/profileRoutes.js')
const loginRouter = require('./Routes/loginRoutes.js')
// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', layoutRouter)
app.use('/account', CreateAccRouter.router)
app.use('/profile', ProfileRouter.router)
app.use('/account', loginRouter.router)
app.use('/cdn', express.static('public'))

const port = process.env.PORT || 3000

app.listen(port)

console.log('listening on port', port)
