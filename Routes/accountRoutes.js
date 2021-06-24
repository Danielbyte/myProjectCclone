const path = require('path')
const express = require('express')
const router = express.Router()
const list = require('../dataBase/database.js')

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'account', 'creatingAcc.html'))
})

router.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'account', 'login.html'))
})

router.get('/api/welcome', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'account', 'welcome.html'))
})

router.get('/api/list', function (req, res) {
  res.json(list.studentList) // Respond with JSON
})

// create account by adding the student to the list
router.post('/api/create', function (req, res) {
  const username = req.body.username
  const studentNumber = req.body.studentnumber
  const password = req.body.createpassword
  const confpassword = req.body.confirmpassword

  // create account by assing a student
  const List = addStudent(username, studentNumber, password, confpassword)
  res.redirect(req.baseUrl + '/api/welcome')
  console.log(List)
})

// add students to data base
function addStudent (name, studentId, password, confpassword) {
  list.studentList.push({ name: name, studentId: studentId, password: password, confpassword: confpassword })

  return list.studentList
}

module.exports = {
  router: router,
  addStudent: addStudent
}
