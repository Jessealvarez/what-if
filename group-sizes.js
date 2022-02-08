const prompt = require('prompt-sync')();

let size = Number(prompt("Input class size: "));

    if (size % 3 === 0) {
        console.log ("There can be " + size/3 + " groups of 3");
    }else if (size % 3 === 1) {
        console.log ("There can be " + (size - 4)/3 + " groups of 3 and 2 groups of 2");
    }else if (size % 3 ===2){
        console.log ("There can be " + (size - 2)/3 + " groups of 3 and 1 group of 2")
    }


