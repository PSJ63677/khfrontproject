function jsFunc1() {
    var pTag = document.querySelector("#p1");
    pTag.innerHTML = "JsFunc1() 함수 실행완료";
}

// 익명함수는 변수에 담아준다(변수명이 함수 이름이 됨)
var jsFunc2 = function() {
    document.querySelector("#p2").innerHTML
    = "JsFunc2() 함수 실행완료";
}

function resultJsFunc4() {
    jsFunc4(23,5,10);
}
function jsFunc4(value1, value2, value3) {
    document.querySelector("#p4").innerHTML
    = "결과 값 : " + (value1 + value2 + value3) + "<br>";
}

function resultJsFunc5() {
    var result = jsFunc5();
    document.querySelector("#p5").innerHTML = result;
}
function jsFunc5() {
    return Math.floor(Math.random()*100 + 1);
}
function calculatePlus(num1, num2, operator) {
    var result = 0;
    switch(operator) {
        case '+' : result = num1+num2; break;
    }
    return result;
}

function callFuncTenTimes(otherFunc) {
    for(var i = 0; i < 10; i++) {
        otherFunc(i);   // calleeFunc(0);
                        // calleeFunc(1);
                        // ...
                        // calleeFunc(9);
        // console.log(i);
    }
}
function calleeFunc(num) {
    // console.log(num);
    var pTag = document.querySelector("#p6");
    pTag.innerHTML += (num+1) + "번째 함수 호출 완료 <br>";
}
callFuncTenTimes(calleeFunc);

function jsReturnFunc() {
    var nameTag = document.querySelector("#name");
    var pTag = document.querySelector("#p7");
    // pTag.innerHTML = nameTag.value;
    return function() {
        pTag.innerHTML = nameTag.value;
    }();
}