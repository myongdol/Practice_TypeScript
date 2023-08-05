function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 10;
var number2 = 2.5;
var printResult = true;
var resultPhrase = '정답은 : ';
add(number1, number2, printResult, resultPhrase);
