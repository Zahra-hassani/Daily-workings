const num1 = document.getElementById("num1");

const num2 = document.getElementById("num2");

const equal = document.getElementById("equal");

function plus(a,b){
    let number = a+b;
    equal.textContent = number;
}
function minus(a,b){
    let number = a-b;
    equal.textContent = number;
}

function multiple(a,b){
    let number = a*b;
    equal.textContent = number;
}
function per(a,b){
    let number = a/b;
    equal.textContent = number;
}

function clear(){
    equal.innerHTML = "";
}

