"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1234);
    }, 3000);
});
promise.then(data => {
    data.split(' ');
});
