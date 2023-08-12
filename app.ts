let userInput: unknown;
let userName: string;

userInput = 1234;
userInput = 'Myongdol';

if(typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number):never {
    throw {message: message, errorCode: code};
}

generateError('에러발생', 500);