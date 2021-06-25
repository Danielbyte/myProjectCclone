'use strict'

const add = require('../../Routes/accountRoutes.js')
const list = require('../../dataBase/database.js')
const deleteStudent = require('../../Routes/profileRoutes.js')
const login = require('../../Routes/loginRoutes.js')

describe('create account', () => {
  test('should add student to data base', () => {
    const input = [{ name: 'Nsika', studentId: 1222, password: 123, confpassword: 123 },
      { name: 'Edward', studentId: 1333, password: 345, confpassword: 345 }
    ]
    add.addStudent('Nsika', 1222, 123, 123)
    add.addStudent('Edward', 1333, 345, 345)

    const output = list.studentList

    const a = JSON.stringify(output)
    const b = JSON.stringify(input)
    expect(a).toEqual(b)
  })
})

describe('Delete the student', () => {
  test('A student is deleted from data Base', () => {
    list.studentList = []
    const output = [{ name: 'Edward', studentId: 1333, password: 345, confpassword: 345 }]

    add.addStudent('Nsika', 1222, 123, 123)
    add.addStudent('Edward', 1333, 345, 345)

    deleteStudent.deleteProfile('Nsika', 1222, 123)
    const output2 = list.studentList

    const a = JSON.stringify(output)
    const b = JSON.stringify(output2)
    expect(a).toEqual(b)
  })
})

describe('Log in', () => {
  test('Correct log in details', () => {
    list.studentList = []
    let isvalid = ''
    add.addStudent('Nsika', 1222, 123, 123)
    add.addStudent('Edward', 1333, 345, 345)

    console.log(list.studentList)
    isvalid = login.Login(1222, 123)
    console.log('THe value for  is valid ', isvalid)
    console.log(isvalid)
    const output = 'false'
    expect(isvalid).toEqual(output)
  })
})
