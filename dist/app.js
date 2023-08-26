"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function 사용자(로그인알림) {
    return function (constructor) {
        console.log(로그인알림);
        console.log(constructor);
    };
}
;
let 사람 = class 사람 {
    constructor() {
        this.name = '김씨';
        console.log('사람 object 만드는중..');
    }
};
사람 = __decorate([
    사용자('로그인')
], 사람);
const 두번째사람 = new 사람();
console.log(두번째사람);
