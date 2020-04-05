---
id: jsAll
title: JS Questions
sidebar_label: ALL
---


## Array

### reduce

> [JavaScript Interview Exercises With Solutions 2019] (https://www.strictmode.io/articles/javascript-interview-exercises-with-solutions-2019/)


#### Syntax
<details>
  <summary>Click to expand!</summary>

  ```javascript
/**
 * callback: 回调
 * initailValue: 初始值（可选）
 * accumulator: 累加器，返回值的累加值
 * index: 索引，有初始值从 0 开始，无初始值从 1 开始（可选）
 * array: 数组（可选）
 */
arr.reduce(callback(accumulator,currentValue,index,array),initialValue) 

//Example
let sum = (acc,cur) => acc + cur;

//Have Initial Value
[1,2,3].reduce(sum,0); //6

  //only Initial Value
  [].reduce(sum,0); //0,直接返回初始值，不执行回调

//No Initial Value
[1,2,3].reduce(sum); //6

  //only one value in array
  [1].reduce(sum); //1,直接返回，不执行回调

//No initial value and array is empty
[].reduce(sum) //TypeError
  ```
</details>




###### 
<li class="custom-light">
  What is reduce? Please implement the 
   <strong>&nbsp;map&nbsp;</strong> and <strong>&nbsp;filter&nbsp;</strong>
  functions with reduce.
</li> 

<details>
  <summary>Click to expand!</summary>

  ```javascript {4}
//map
function map(arr, mapper) {
    return arr.reduce((acc, el) => {
    return [...acc, mapper(el)]
    }, [])
}
map([1, 2, 3], x => x * x) // => [1, 4, 9]

//filter
function filter(arr, f) {
    return arr.reduce((acc, el) => (f(el) ? [...acc, el] : acc), [])
}
filter([-1, 0, 1, 2], x => x > 0) // => [1, 2]
  ```
</details>



###### 
<li class="custom-light">
  Write the uniq function that <strong>&nbsp;removes repeated elements&nbsp;</strong> from the array.
</li>



###### 
<li class="custom-light">Flatten is a function that puts elements from the inner arrays into the top array.</li>


