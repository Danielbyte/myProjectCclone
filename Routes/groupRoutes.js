
const path = require('path')
const express = require('express')
const router = express.Router()
const list = require('../public/scripts/Data/data.js')

router.get('/createGroup', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'account', 'createGroup.html'))
})

function addGroup (name) {
  list.groupList.push({ groupName: name })
  return list.groupList
}
// RESTful api
router.get('/api/list', function (req, res) {
  console.log('fetch')
  res.json(list.groupList) // Respond with JSON
})

router.post('/api/createGroup', function (req, res) {
  console.log('Creating the following Group:', req.body.groupName)
  const group = addGroup(req.body.groupName)
  res.redirect(req.baseUrl + '/api/list')
  console.log(group)
})

module.exports = {
  router: router,
  addGroup: addGroup
}
