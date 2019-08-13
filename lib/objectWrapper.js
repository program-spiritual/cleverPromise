/**
 *
 * @module objectWrapper
 * */

/**
 * objectWrapper
 * @param {Promise} promise - Promise 化的执行体
 * @return {ArrayLike}
 * @example
 * var [p1Error, p1Result] = await objectWrapper(promise1)
 console.log(p1Error, p1Result)
 *
 * */
module.exports.objectWrapper = (promise) => {
  return promise.then(data => {
    return {
      err: null,
      data
    }
  })
    .catch(err => {
      return {
        err: err,
        data: null
      }
    })
}
