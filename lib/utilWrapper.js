class UtilWrapper {
  /**
   * @constructor
   * */
  constructor(props) {
//    super(props);

  }

  /**
   * 简单 unique 一维数组
   * @param {Array} array - 正常的一维数组
   *
   * */
  uniqueArray(array) {
    if (!this.isArrayLike(array)) {
      throw new TypeError('请传递正常的一维数组')
    }
    const uniqueArray = [...new Set(array)];
    return uniqueArray
  }

  /**
   *
   * 快速循环
   * @param {array} array - 类数组对象
   * @param {function} processor - 函数对象 每次回调格式为  processor(array[i],index)
   * @example
   *
   * processor(array[i],index)
   *
   * */
  rapidForLoop(array, processor) {
    if ('function' != typeof processor) {
      throw new TypeError('请传递处理函数')
      return
    }
    if (!this.isArrayLike(array)) {
      throw new TypeError('该对象不是一个可迭代对象')
      return
    }
    for (let i = 0, length = array.length; i < length; i++) {
      /**
       * @inner
       * @param array - 数组的每一项
       * @param index, - 数组的索引
       * */
      processor(array[i], i)
    }
  }

  /**
   * 是否是类数组对象
   * @param {array} item - 类数组对象
   * */
  isArrayLike(item) {
    return (
      Array.isArray(item) ||
      (!!item &&
        typeof item === "object" &&
        typeof (item.length) === "number" &&
        (item.length === 0 ||
          (item.length > 0 &&
            (item.length - 1) in item)
        )
      )
    );
  }

  /**
   * 快速取整
   *
   * @param {number} num - 浮点数
   *
   *
   * */
  quickRounding(num) {
    return num | 0
  }

  /**
   *  安全数值
   * @param  {object} exp - 算数表达式
   *
   * @param {int } digits - 精度参数须在 0 与20 之间
   * */
  safeNumber(exp, digits = 10) {
    return parseFloat(exp.toFixed(digits))
  }

}


module.exports = {utilWrapper: new UtilWrapper()}
