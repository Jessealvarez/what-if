const prompt = require('prompt-sync')();
const day = prompt("Input number: ");
const numDay = Number(day);


if (numDay === 1) {
    console.log("Monday");
}else if (numDay === 2) {
    console.log("Tuesday");
}else if (numDay === 3) {
    console.log("Wednesday");
}else if (numDay === 4) {
    console.log("Thursday");
}else if (numDay === 5) {
    console.log("Friday");
}else if (numDay === 6) {
    console.log("Saturday");
}else if (numDay === 7) {
    console.log("Sunday");
}else if (numDay <1) {
    console.log("error!");
}else if (numDay >7) {
    console.log("error!");
}