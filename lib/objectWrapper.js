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
