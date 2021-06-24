'use strict'
const path = require('path')
const express = require('express')
const layoutRout = express.Router()

layoutRout.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'layout', 'layout.html'))
})

layoutRout.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'layout', 'about.html'))
})

module.exports = layoutRout
