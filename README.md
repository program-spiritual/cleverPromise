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

## case 3 (util )


```js

// uniqe 
const {utilWrapper} = require('cleverpromise')


 const u = utilWrapper.uniqueArray(arr)

// rapidLoop

const fn = item => {
        const a = item ** 2;
        console.log(a)
        return a
      };

      utilWrapper.rapidForLoop([1, 23, 4,,23,2,3,23,12,312,3,21,3,21,3,12321], fn)
      
// quickrounding
   const num1 = 24.5
   const num2 = -24.3
   const num3 = 2323.123245784565
   console.log(utilWrapper.quickRounding(num1))
   console.log(utilWrapper.quickRounding(num2))
   console.log(utilWrapper.quickRounding(num3))
 
// safeNumber

 const exp1 = 0.1 + 0.2
 console.log(utilWrapper.safeNumber(exp1), typeof utilWrapper.safeNumber(exp1))
      
```


