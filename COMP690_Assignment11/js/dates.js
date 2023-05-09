//STEP 1
let x = new Date();
console.log(x.getDate());
//STEP 2
let x = new Date();
console.log(x.toLocaleString('default', {month: 'long'}));
//STEP 3
let x = new Date();
if (x.getDay() !== 0 && 6) {
    console.log(x.toLocaleDateString('default', {weekday: 'long'})); 
}
//STEP 4
let today = new Date();
let yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
console.log(yesterday.toLocaleDateString('default', {weekday: 'long'}));
//STEP 5
let today = new Date();
console.log(today.toDateString().charAt(0));