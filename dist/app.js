"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: '김씨' }, { age: 999 });
console.log(mergedObj.name);
console.log(mergedObj.age);
