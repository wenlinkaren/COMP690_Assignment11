//STEP 1
let x = prompt("Please enter user's name.");
alert(x.length);
//STEP 2
let x = prompt("Please enter user's name.");
let y = prompt("Please enter a numeric value of the letter you want to find.");
alert(x.charAt(y));
//STEP 3
let x = prompt("Please enter user's first name.");
let y = prompt("Please enter user's last name.");
alert(`Your name is: ${x.concat(y)}`);
//STEP 4
let x = "The quick brown fox jumps over the lazy dog.";
alert(x.indexOf("fox"));
//STEP 5
let x = "The quick brown fox jumps over the lazy fox.";
alert(x.lastIndexOf("fox"));
//STEP 6
let x = "The quick brown fox jumps over the lazy dog.";
let y = prompt("Please enter user's full name.");
alert(x.replace("the lazy dog", y));
//STEP 7
let x = "The quick brown fox jumps over the lazy dog.";
let y = prompt("Please enter a word.");
alert(x.search(y));
//STEP 8
let old_string = "The quick brown fox jumps over the lazy dog.";
let new_string = old_string.slice(31, old_string.length - 1);
alert(new_string.toUpperCase());
//STEP 9
let x = "           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
alert(x.trim().toLowerCase());
//STEP 10
let x = "the quick brown fox jumps over the lazy dog.";
let y = x.replace(x.charAt(0), "T");
alert(y);