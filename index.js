const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const add = document.querySelector("#add");
const extract = document.querySelector("#extract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const dot = document.querySelector("#dot");
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");
const equals = document.querySelector("#equals");
let display = document.querySelector(".input_result");  
const numbers = [zero, one, two, three, four, five, six, seven, eight, nine]
const operations = [add, extract, multiply, divide]
const operations_string = {
    "add": "+",
    "extract": "-",
    "multiply": "x",
    "divide": "÷"
}
is_result = true;

function ciloe() {
    if(Object.values(operations_string).includes(display.textContent.at(-1)) || display.textContent == ""){
        return true;
    } else{
        return false;   
    }

    
}
// zero.addEventListener("click", function() {
//     if(is_result == true) {
//         display.textContent = "";
//     }
//     is_result = false;
//     display.textContent += "0";
// })

numbers.forEach(function(button, index) {
    button.addEventListener("click", function() {
        if(is_result == true) {
            display.textContent = "";
        }
        is_result = false;
        display.textContent += index.toString();
    })
})

// add.addEventListener("click", function() {
//     if(is_result == true){
//         display.textContent += "+";
//     }

// })

operations.forEach(function(button, index) {
    button.addEventListener("click",function(){
        if(ciloe() || display.textContent.at(-1) == "."){
            return;
        }else {
            display.textContent += operations_string[Object.keys(operations_string)[index]];
        }

    })
})

dot.addEventListener("click", function(){
    if(display.textContent.at(-1) == "+"){
        return
    }else if (display.textContent.at(-1) == "."){
        return
    }else if (display.textContent.at(-1) == "-"){
        return
    }else if (display.textContent.at(-1) == "x"){
        return
    }else if (display.textContent.at(-1) == "÷"){
        return
    }else if (display.textContent == "") {
        display.textContent = "0.";
    }else{
        display.textContent += ".";
    }
    is_result = false;

})

clear.addEventListener("click", function(){
    display.textContent = "";

})

del.addEventListener("click", function(){
    display.textContent = display.textContent.slice(0, -1);
    is_result = false;
})

equals.addEventListener("click", function(){
    if (display.textContent == "") {
        return;
    let result = display.textContent.replaceAll("x", "*").replaceAll("÷", "/");
    result = eval(result);
    result = Math.round(result * 100000000) / 100000000;
    display.textContent = result.toString();
    is_result = true;
})
