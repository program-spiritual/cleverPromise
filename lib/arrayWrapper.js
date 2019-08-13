/**
 * @module arrayWrapper
 * */
 /**
  * arrayWrapper
  * @param {Promise} promise - Promise 化的执行体
  * @return {ArrayLike}
  * @example
  * var [p1Error, p1Result] = await arrayWrapper(promise1)
  console.log(p1Error, p1Result)
  *
  * */
module.exports.arrayWrapper = (promise) => {
  return promise.then(data => [null, data])
    .catch(err => [err, null])
}
