//STEP 1
let x = Number(prompt("Please enter a number."));
console.log(Math.abs(x));
//STEP 2
let x = Number(prompt("Please enter a decimal value."));
console.log(Math.round(x));
//STEP 3
let x = Number(prompt("Please enter a decimal value."));
console.log(Math.floor(x));
//STEP 4
let x = prompt("Please enter 5 numbers with comma delimited each other. (eg: 1,2,3,4,5)");
let y = JSON.parse(`[${x}]`);
console.log(`The largest is ${Math.max(...y)}.`);
console.log(`The smallest is ${Math.min(...y)}.`);
//STEP 5
let x = Number(prompt("Please enter a number."));
console.log(`The square root is ${Math.sqrt(x)}.`);