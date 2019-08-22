const assert = require('chai').assert
const should = require('chai').should()
const expect = require('chai').expect
const {DateWrapper} = require('../index')

describe('测试时间辅助类',()=>{
  it('should be translated as standard Date', function () {
    const  date1 = '2018-12-2 11:22'
    const  date2 = '2018/12/2 11:22'
    console.log(DateWrapper.transDateStringStandard(date1))
    console.log(DateWrapper.transDateStringStandard(date2))
    expect(DateWrapper.transDateStringStandard(date1)).to.be.a('Date')
    expect(DateWrapper.transDateStringStandard(date2)).to.be.a('Date')

  });
})
