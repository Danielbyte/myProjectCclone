'use strict'

const add = require('../../Routes/accountRoutes.js')
const list = require('../../dataBase/database.js')

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
