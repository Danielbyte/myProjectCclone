'use strict'
const path = require('path')
const express = require('express')
const router = express.Router()
const list = require('../dataBase/database.js')
let found = ''

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'delete.html'))
})

router.get('/api/removed', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'removed.html'))
})

router.get('/api/notRegistered', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'profile', 'notRegistered.html'))
})

router.get('/api/list', function (req, res) {
  res.json(list.studentList) // Respond with JSON
})

router.post('/api/delete', function (req, res) {
  const username = req.body.username
  const studentNumber = req.body.studentnumber
  const password = req.body.password

  // Then here i will check the student in the list then delete
  deleteProfile(username, studentNumber, password)

  if (found === 'true') {
    res.redirect(req.baseUrl + '/api/removed')
  } else {
    res.redirect(req.baseUrl + '/api/notRegistered')
  }
})

function deleteProfile (username, studentNumber, password) {
  list.studentList.forEach(function (element, index) {
    if (element.name === username && element.studentId === studentNumber && element.password === password) {
      list.studentList.splice(index, 1)
      console.log('List is spliced')
      found = 'true'
    } else {
      found = 'false'
    }
  })
  return found
}

module.exports = {
  router: router,
  deleteProfile: deleteProfile
}
