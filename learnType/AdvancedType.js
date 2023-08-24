"use strict";
var _a;
const e1 = {
    name: 'myongdol',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
;
const result = add('계', '란');
result.split(' ');
const fetchedUserData = {
    id: 'user1',
    name: '김회장',
    job: { title: 'CEO', description: '김회장 컴퍼니' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
