# cleverPromise

![](https://img.shields.io/travis/xiaomiwujiecao/cleverPromise?style=for-the-badge)

![](https://img.shields.io/bundlephobia/min/cleverpromise)

## Classes



-    `pathWrapper` :封装处理路径方法

-    `utilWrapper` :封装常用的JS技巧 

-    `DateWrapper` :封装时间操作辅助方法

#  Modules

-    `arrayWrapper`   :同步化异步编程，数组化处理 `promise`
-    `objectWrapper`   :同步化异步编程，对象化处理 `promise`

## API Documentation：

[documentation](https://xiaomiwujiecao.github.io/cleverPromise/)


## 示例：

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

## 案例4 (date )

```js
const {DateWrapper} = require('cleverpromise')
const  date1 = '2018-12-2 11:22'
const  date2 = '2018/12/2 11:22'
console.log(DateWrapper.transDateStringStandard(date1))
console.log(DateWrapper.transDateStringStandard(date2))
```
