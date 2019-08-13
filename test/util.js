const {utilWrapper} = require('../index')
let assert = require('chai').assert
let should = require('chai').should()
let expect = require('chai').expect

// test 1 uniqueArray

//  [1, 1, 2, 3, 5, 5, 1]


describe(
  'util wrapper tests:', () => {

    it('uniq array should be fine ', (done) => {
      const arr = [1, 1, 2, 3, 5, 5, 1]
      console.log(utilWrapper.uniqueArray(arr) instanceof Array)
      console.log([1, 2, 3, 5] instanceof Array)
      const u = utilWrapper.uniqueArray(arr)
//      console.log('u== [1,2,3,5] ',u==[1,2,3,5])
      assert(u.sort().toString() == [1, 2, 3, 5].sort().toString())

    })

    it('should rapidForLoop be fine ', function () {
      const fn = item => {
        const a = item ** 2;
        console.log(a)
        return a
      };

      utilWrapper.rapidForLoop([1, 23, 4, , 23, 2, 3, 23, 12, 312, 3, 21, 3, 21, 3, 12321], fn)
    });

    it('should be fine with quickrounding', function () {
      const num1 = 24.5
      const num2 = -24.3
      const num3 = 2323.123245784565
      console.log(utilWrapper.quickRounding(num1))
      console.log(utilWrapper.quickRounding(num2))
      console.log(utilWrapper.quickRounding(num3))
    });

    it('should be fine withe safeNumber', function () {
      const exp1 = 0.1 + 0.2
      const exp2 = 0.756*0.22
      console.log(utilWrapper.safeNumber(exp1), typeof utilWrapper.safeNumber(exp1))
      console.log(utilWrapper.safeNumber(exp2,20), typeof utilWrapper.safeNumber(exp2))
      assert(utilWrapper.safeNumber(exp1) == 0.3)
      assert(utilWrapper.safeNumber(0.3 / 0.1) == 3)

    });
  }
)
