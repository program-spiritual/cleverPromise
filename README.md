# cleverPromise

-   同步化异步编程，不要回调 arrayWrapper

-   封装处理路径方法 pathWrapper

-  封装常用的JS技巧 utilWrapper

## API 文档：

[documentation](https://xiaomiwujiecao.github.io/cleverPromise/)


导入方式 :

```js
let {arrayWrapper,objectWrapper} = require('cleverpromise')
```

## 案例 1:(promise wrapper)

```js
async function f() {
  var [p1Error, p1Result] = await arrayWrapper(promise1)
  console.log(p1Error, p1Result)
}
```

## 案例 2: (file)

```js

const {pathWrapper} = require('cleverpromise')
const fullPath = '/usr/local/bin/test.js'
const currentFileName = pathWrapper.getFileName(fullPath,'.js')
```

## 案例 3 (util )


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
 
 const exp2 = 0.756*0.22
 
 console.log(utilWrapper.safeNumber(exp2,20), typeof utilWrapper.safeNumber(exp2))
```


