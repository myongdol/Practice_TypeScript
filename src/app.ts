const button = document.querySelector('button');

button?.addEventListener('click', () => {
    console.log('클릭')
})

function example() {
    const usedMessage = "안녕 하세요";
    const unusedMessage = "안녕히 가세요"; // 이 줄의 변수가 사용되지 않는 경우
    console.log(usedMessage);
   }

function exampleFunc(params: string) {
    console.log('매개변수를 사용하지 않았습니다.')
}

function add(a: number, b:number) {
    if(a > 0){
        return a + b;
    }
}

const data = { name: "Myongdol", age: 99 };
const key = "email";
const value = data[key]; // data 객체에 "email" 속성이 없으면 value는 undefined이므로 경고 발생