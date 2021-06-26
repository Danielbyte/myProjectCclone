'use strict'
/* eslint-env jest */

// const add = require('../../Routes/groupRoutes.js')
const list = require('../../public/scripts/Data/data.js')

describe('empty group', () => {
  test('empty list return empty', () => {
    const input = []
    list.groupList = []
    const output = list.groupList

    const a = JSON.stringify(output)
    const b = JSON.stringify(input)
    expect(a).toEqual(b)
  })
})

describe('create group', () => {
  test('should add group to data base', () => {
    const input = [{ groupName: 'Software' }, { groupName: 'Design' }]

    list.groupList.push({ groupName: 'Software' })
    list.groupList.push({ groupName: 'Design' })
    const output = list.groupList

    const a = JSON.stringify(output)
    const b = JSON.stringify(input)
    expect(a).toEqual(b)
  })
})
