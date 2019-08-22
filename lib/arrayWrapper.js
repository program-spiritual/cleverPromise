/**
 * @module arrayWrapper
 * */
 /**
  * arrayWrapper
  * @param {Promise} promise - Promise 化的执行体
  * @return {ArrayLike}
  * @example
  * // 你可以根据返回的标准结果来处理数据
  * // 传递的参数必须是Promise包装过的函数
  * var [p1Error, p1Result] = await arrayWrapper(promise1)
  console.log(p1Error, p1Result)
  *
  * */
module.exports.arrayWrapper = (promise) => {
  return promise.then(data => [null, data])
    .catch(err => [err, null])
}
