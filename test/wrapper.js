let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect
let {arrayWrapper} = require('../index')
let {objectWrapper} = require('../index')

describe(
  'wrapper tests:', async (done) => {
    // 2 promise instance for Promise Wrapper
    var promise1 = new Promise((resolve, reject) => {
      resolve('data1')
    })
    var promise2 = new Promise((resolve, reject) => {
      reject(new Error('error2'))
    })
    var [p1Error, p1Result] = await arrayWrapper(promise1)
    console.log(p1Error, p1Result)
    //     下面的运行结果会导致报错
    var {err, data} = await objectWrapper(promise2)
    console.log('err:', err, 'data', data)
  }
)
