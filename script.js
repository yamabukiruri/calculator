let result = document.querySelector("#result");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let btn0 = document.querySelector("#btn0");
let btnPoint = document.querySelector("#btnPoint");
let btnPlus = document.querySelector("#btnPlus");
let btnMinus = document.querySelector("#btnMinus");
let btnTimes = document.querySelector("#btnTimes");
let btnDivide = document.querySelector("#btnDivide");
let btnRoot = document.querySelector("#btnRoot");
let btnEqual = document.querySelector("#btnEqual");
let btnClear = document.querySelector("#btnClear");
let btnAllClear = document.querySelector("#btnAllClear");


btn1.addEventListener("click", () => {
    result.value += "1";
});
btn2.addEventListener("click", () => {
    result.value += "2";
});
btn3.addEventListener("click", () => {
    result.value += "3";
});
btn4.addEventListener("click", () => {
    result.value += "4";
});
btn5.addEventListener("click", () => {
    result.value += "5";
});
btn6.addEventListener("click", () => {
    result.value += "6";
});
btn7.addEventListener("click", () => {
    result.value += "7";
});
btn8.addEventListener("click", () => {
    result.value += "8";
});
btn9.addEventListener("click", () => {
    result.value += "9";
});
btn0.addEventListener("click", () => {
    result.value += "0";
});
btnPoint.addEventListener("click", () => {
    result.value += ".";
});
btnPlus.addEventListener("click", () => {
    result.value += "+";
});
btnMinus.addEventListener("click", () => {
    result.value += "-";
});
btnTimes.addEventListener("click", () => {
    result.value += "*";
});
btnDivide.addEventListener("click", () => {
    result.value += "/";
});
btnRoot.addEventListener("click", () => {
    result.value = Math.sqrt(Number(result.value));
});
btnEqual.addEventListener("click", () => {
    result.value = eval(result.value);     //eval()は文字列を関数として実行する。悪用される恐れがあるため、あまり使わない方がよい。
});                                        //今回は対策として、htmlでテキストボックスにdisabledを指定している。

//後ろ一文字を削除
btnClear.addEventListener("click", () => {
    result.value = result.value.slice(0, -1);
});
//すべて削除
btnAllClear.addEventListener("click", () => {
    result.value = "";
});