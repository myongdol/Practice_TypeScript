"use strict";
let userInput;
let userName;
userInput = 1234;
userInput = 'Myongdol';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('에러발생', 500);
