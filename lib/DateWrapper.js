/**
 * 处理日期的常用包装器
 *
 * @class
 *
 * */

class DateWrapper {
  constructor(props) {
//    super(props);

  }

  /**
   * 转化时间字符串为标准时间
   *@public
   * @param {string | Date } date - 标准时间字符创
   * @version 1.1.4
   * @example
   *
   * // 时间字符串的标准为： 2018-02-02 11:22
   *
   * // chrome 内核字符串 2018-02-02 11:22
   * // safari 内核字符串  2018/02/02 11:22
   *
   const {DateWrapper} = require('cleverpromise')
   const  date1 = '2018-12-2 11:22'
   const  date2 = '2018/12/2 11:22'
   console.log(DateWrapper.transDateStringStandard(date1))
   console.log(DateWrapper.transDateStringStandard(date2))
   * */
  transDateStringStandard(date) {
    if ('string' != typeof date) {
      return date
    }
    return new Date(date.replace(/\-/g, '/'))
  }

}

module.exports = {DateWrapper:new DateWrapper()}
