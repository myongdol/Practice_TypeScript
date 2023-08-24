const names:Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1234);
    }, 3000);
});


promise.then(data => {
    data.split(' ');
})