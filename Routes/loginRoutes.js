'use strict'
const path = require('path')
const express = require('express')
const router = express.Router()
const list = require('../dataBase/database.js')

router.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'account', 'login.html'))
})

router.get('/invalidUserOrId', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'account', 'invalidIdPassword.html'))
})

router.get('/api/profile', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'profile.html'))
})

router.get('/api/list', function (req, res) {
  res.json(list.studentList) // Respond with JSON
})

router.post('/api/login', function (req, res) {
  const username = req.body.username
  const studentNumber = req.body.studentnumber
  const password = req.body.password

  const isvalid = Login(studentNumber, password)

  if (isvalid === 'false') {
    res.redirect('/account/invalidUserOrId')
  } else {
    res.redirect(req.baseUrl + '/api/profile')
  }
})

function Login (studentNumber, password) {
  let valid = ''
  list.studentList.forEach(function (element) {
    console.log(element.studentId)
    if (element.studentId !== studentNumber || element.password !== password) {
      valid = 'false'
    } else {
      valid = 'true'
    }
  })
  return valid
}

module.exports = {
  router: router,
  Login: Login

}
