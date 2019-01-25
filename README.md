# cleverPromise

import :

```ecmascript 6
let {arrayWrapper,objectWrapper} = require('cleverpromise')
```

## case :

```ecmascript 6
async function f() {
  var [p1Error, p1Result] = await arrayWrapper(promise1)
  console.log(p1Error, p1Result)
}
```
