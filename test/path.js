const {pathWrapper} = require('../index')
const filepath = __filename
console.log('pathWrapper:',pathWrapper)
console.log(pathWrapper.getFileName(filepath))

//console.log(pathWrapper.resolveFilePath('/a','b/','c'))

console.log(pathWrapper.joinFilePath('/foo', 'bar', 'baz/asdf', 'quux', '..'))
