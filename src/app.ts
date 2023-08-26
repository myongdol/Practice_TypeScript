function 사용자(로그인알림: string) {
    return function (constructor: Function) {
        console.log(로그인알림);
        console.log(constructor); 
    };
};


@사용자('로그인')
class 사람 {
    name = '김씨';

    constructor() {
        console.log('사람 object 만드는중..')
    }
}

const 두번째사람 = new 사람();
console.log(두번째사람);