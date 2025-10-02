function calculate(){
    let result = 10;
    if(true){
        let result = 20;
        console.log("Result(if) = " + result);
    }
    console.log("Result = " + result);
}

calculate();

const secretNumber = 21 % 10
let userNumber = prompt("Введи число від 0 до 9")
if (userNumber == secretNumber) {
    alert("Correct!")
} else {
    alert("Wrong!")
}

let name = prompt("Введи своє ім'я")
let num1 = prompt("Введи перше число")
let num2 = prompt("Введи друге число")
let sum = Number(num1) + Number(num2)
console.log("Hello, " + name + "! The sum of " + num1 + " and " + num2 + " is " + sum)