"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: '김씨' }, { age: 999 });
console.log(mergedObj.name);
console.log(mergedObj.age);
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = '값이 없습니다.';
    if (element.length === 1) {
        descriptionText = '값을 하나 얻었습니다.';
    }
    else if (element.length > 1) {
        descriptionText = '값이 ' + element.length + '개 입니다.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('안녕하세요?'));
function 추출및변환(obj, key) {
    return '값은: ' + obj[key];
}
추출및변환({ name: '김씨' }, 'name');
