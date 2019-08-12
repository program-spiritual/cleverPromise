# cleverPromise

import :

```js
let {arrayWrapper,objectWrapper} = require('cleverpromise')
```

## case 1:(promise wwrapper)

```js
async function f() {
  var [p1Error, p1Result] = await arrayWrapper(promise1)
  console.log(p1Error, p1Result)
}
```

## case 2: (file)

```js

const {pathWrapper} = require('cleverpromise')
const fullPath = '/usr/local/bin/test.js'
const currentFileName = pathWrapper.getFileName(fullPath,'.js')
```

