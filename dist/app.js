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
class 데이터보관함 {
    constructor() {
        this.data = [];
    }
    추가하기(item) {
        this.data.push(item);
    }
    ;
    제거하기(item) {
        if (this.data.indexOf(item) === 1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    ;
    획득하기() {
        return [...this.data];
    }
}
const 글자보관함 = new 데이터보관함();
글자보관함.추가하기('김씨');
글자보관함.추가하기('헬로');
글자보관함.제거하기('헬로');
console.log(글자보관함.획득하기());
