document.title = "calculator"

let body = document.querySelector("body");
let div = document.createElement("div");
let output = document.createElement("input");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");
let btn5 = document.createElement("button");
let btn6 = document.createElement("button");
let btn7 = document.createElement("button");
let btn8 = document.createElement("button");
let btn9 = document.createElement("button");
let btn10 = document.createElement("button");
let btn11 = document.createElement("button");
let btn12 = document.createElement("button");
let btn13 = document.createElement("button");
let btn14 = document.createElement("button");
let btn15 = document.createElement("button");
let btn16 = document.createElement("button");
let btn17 = document.createElement("button");
let btn18 = document.createElement("button");
let btn19 = document.createElement("button");



output.type = "text";
output.placeholder = "0";



body.style = " display: flex;justify-content: center;align-items: center;height: 100vh;background-color: #202020;";
div.style = "display: grid;grid-template-columns: repeat(4, 60px);"
output.style = "grid-column: span 4;border: none;height: 100px;text-align: right;padding: 0 15px;font-size: 35px;font-family: monospace;outline: none;";

btn1.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;background-color: #e313d4;";
btn2.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn3.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn4.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn5.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn6.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn7.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn8.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn9.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn10.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn11.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn12.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn13.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn14.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn15.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn16.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn17.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn18.style = "width: 60px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
btn19.style = "width: 120px;height: 60px;background-color: white;border: none;outline: none;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;background-color: #2ab0e5";


// طريقة الحل الأولي
// btn1.onclick = function() {
//     output.value = ""
// }

// btn2.onclick = function() {
//     output.value = output.value.slice(0, -1)
// }

// طريقة الحل الثانية
btn1.onclick = () => output.value = "";

btn2.onclick = () => output.value = output.value.slice(0, -1);

btn19.onclick = function() {
    try {
        output.value = eval(output.value)
    } catch {
        output.value = "ERROR"
    }
}


// طريقة الحل الأولي
// btn3.onclick = function() {
//     output.value = `${output.value}%`
// }
// btn4.onclick = function() {
//     output.value = `${output.value}/`
// }
// btn5.onclick = function() {
//     output.value = `${output.value}7`
// }
// btn6.onclick = function() {
//     output.value = `${output.value}8`
// }
// btn7.onclick = function() {
//     output.value = `${output.value}9`
// }
// btn8.onclick = function() {
//     output.value = `${output.value}*`
// }
// btn9.onclick = function() {
//     output.value = `${output.value}4`
// }
// btn10.onclick = function() {
//     output.value = `${output.value}5`
// }
// btn11.onclick = function() {
//     output.value = `${output.value}6`
// }
// btn12.onclick = function() {
//     output.value = `${output.value}+`
// }
// btn13.onclick = function() {
//     output.value = `${output.value}1`
// }
// btn14.onclick = function() {
//     output.value = `${output.value}2`
// }
// btn15.onclick = function() {
//     output.value = `${output.value}3`
// }
// btn16.onclick = function() {
//     output.value = `${output.value}-`
// }
// btn17.onclick = function() {
//     output.value = `${output.value}0`
// }
// btn18.onclick = function() {
//     output.value = `${output.value}.`
// }

// طريقة الحل الثانية
btn3.onclick = () => output.value = `${output.value}%`;
btn4.onclick = () => output.value = `${output.value}/`;
btn5.onclick = () => output.value = `${output.value}7`;
btn6.onclick = () => output.value = `${output.value}8`;
btn7.onclick = () => output.value = `${output.value}9`;
btn8.onclick = () => output.value = `${output.value}*`;
btn9.onclick = () => output.value = `${output.value}4`;
btn10.onclick = () => output.value = `${output.value}5`;
btn11.onclick = () => output.value = `${output.value}6`;
btn12.onclick = () => output.value = `${output.value}+`;
btn13.onclick = () => output.value = `${output.value}1`;
btn14.onclick = () => output.value = `${output.value}2`;
btn15.onclick = () => output.value = `${output.value}3`;
btn16.onclick = () => output.value = `${output.value}-`;
btn17.onclick = () => output.value = `${output.value}0`;
btn18.onclick = () => output.value = `${output.value}.`;



document.body.appendChild(div);
div.appendChild(output);
div.appendChild(btn1).innerHTML = "Cl";
div.appendChild(btn2).innerHTML = "Del";
div.appendChild(btn3).innerHTML = "%";
div.appendChild(btn4).innerHTML = "/";
div.appendChild(btn5).innerHTML = "7";
div.appendChild(btn6).innerHTML = "8";
div.appendChild(btn7).innerHTML = "9";
div.appendChild(btn8).innerHTML = "*";
div.appendChild(btn9).innerHTML = "4";
div.appendChild(btn10).innerHTML = "5";
div.appendChild(btn11).innerHTML = "6";
div.appendChild(btn12).innerHTML = "+";
div.appendChild(btn13).innerHTML = "1";
div.appendChild(btn14).innerHTML = "2";
div.appendChild(btn15).innerHTML = "3";
div.appendChild(btn16).innerHTML = "-";
div.appendChild(btn17).innerHTML = "0";
div.appendChild(btn18).innerHTML = ".";
div.appendChild(btn19).innerHTML = "=";