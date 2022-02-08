const prompt = require('prompt-sync')();
const input = prompt("Input number: ");
const numInput = Number(input);

if (numInput % 15 == 0) {
    console.log("FizzBuzz");
}else if (numInput % 3 == 0) {
    console.log("Fizz") 
}else if (numInput % 5 == 0) { 
    console.log("Buzz")
}else console.log("error!");