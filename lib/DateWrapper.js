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

  /**
   *
   * 转换标准时间为  单位为毫秒的时间戳
   * @param {stirng | Date} date -标准时间 或标准时间字符串
   *
   * */
  dateToMs(date) {
    let result = new Date(date).getTime();
    return result;
  }

  /**
   * 标准时间戳 或 标准时间对象 转换为 标准时间字符串
   * @param { string | Date } msec
   * @returns {Object} obj -  返回处理好的格式
   * @returns  obj.hasTime - 标准时间字符串
   * @returns  obj.withoutTime -  不带时间的标准日期字符串
   * @returns  obj.withoutSecond -  不带秒数的标准时间字符串
   *
   * @example
   const date3 = new Date()
   console.log(DateWrapper.msToDateString(date3))
   // 结果应该是这样子的:
   { hasTime: '2019-08-23 13:21:07',
  withoutTime: '2019-08-23',
  withoutSecond: '2019-08-23 13:21' }
   * */
  msToDateString(msec) {
    const datetime = new Date(msec);
    const year = datetime.getFullYear();
//    console.log('year:',year)
    const month = datetime.getMonth();
//    console.log('month:',month)
    const date = datetime.getDate();
//    console.log('date:',date)

    const hour = datetime.getHours();
//    console.log('hour:',hour)

    const minute = datetime.getMinutes();
//    console.log('minute:',minute)

    const second = datetime.getSeconds();
//    console.log('second:',second)

//  第一种 返回标准时间
    const hasTime = year +
      '-' +
      ((month + 1) >9 ? (month + 1) : '0' + (month + 1)) +
      '-' +
      ((date + 1) <= 10 ? '0' + date : date) +
      ' ' +
      ((hour + 1) <= 10 ? '0' + hour : hour) +
      ':' +
      ((minute + 1) <= 10 ? '0' + minute : minute) +
      ':' +
      ((second + 1) <= 10 ? '0' + second : second);
// 第二种 返回日期格式
    const withoutTime = year +
      '-' +
      ((month + 1) > 9 ? (month + 1) : '0' + (month + 1)) +
      '-' +
      ((date + 1) <= 10 ? '0' + date : date);
// 第三种 返回不带秒数的标砖时间
    const withoutSecond = year +
      '-' +
      ((month + 1) > 9 ? (month + 1) : '0' + (month + 1)) +
      '-' +
      ((date + 1) <= 10 ? '0' + date : date) +
      ' ' +
      ((hour + 1) <= 10 ? '0' + hour : hour) +
      ':' +
      ((minute + 1) <= 10 ? '0' + minute : minute)
    return {
      hasTime,
      withoutTime,
      withoutSecond,
    }

  }


}

module.exports = {DateWrapper: new DateWrapper()}
