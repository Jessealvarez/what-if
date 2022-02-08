const prompt = require('prompt-sync')();
const age = prompt("How old are you?");
const numberAge = Number(age);

if (numberAge <16) {
    console.log("You can't drive");
}else if (numberAge === 16) {
    console.log("You can drive but not vote.");
}else if (numberAge === 17) {
    console.log("You can drive but not vote.");
}else if (numberAge === 18) {
    console.log("You can vote but not rent a car.");
}else if (numberAge === 19) {
    console.log("You can vote but not rent a car.");
}else if (numberAge === 20) {
    console.log("You can vote but not rent a car.");
}else if (numberAge === 21) {
    console.log("You can vote but not rent a car.");
}else if (numberAge === 22) {
    console.log("You can vote but not rent a car.");
}else if (numberAge === 23) {
    console.log("You can vote but not rent a car.");
}else if (numberAge === 24) {
    console.log("You can vote but not rent a car.");
}else if (numberAge === 25) {
    console.log("You can do pretty much anything.");
}else if (numberAge > 25) {
    console.log("You can do pretty much anything.");
}