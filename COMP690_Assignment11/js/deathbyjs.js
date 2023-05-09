//STEP 1
function alphabet_order(str) {
    return str.split('').sort().join('');
}
console.log(alphabet_order('webmaster'));
//STEP 2
function uppercase(str) {
  let arr = str.toLowerCase().split(' ');
  for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
}
console.log(uppercase('the quick brown fox'));
//STEP 3
function vowelCount(str) { 
    return str.toLowerCase().match(/[aeiou]/g).length; 
}
console.log(vowelCount('The quick brown fox'));
//STEP 4
function stringId(n) {
let text = "";
let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < n; i++ ) {  
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
return text;
}
console.log(stringId(8));
//STEP 5
function longest_Country_Name(arr) {
   let max = 0;
   for (let country of arr) {
       max = Math.max(max, country.length);
   }
   for (let country of arr) {
       if (country.length == max) {
        return country;
        }
    }
}
console.log(longest_Country_Name(["Australia", "Germany", "UK", "USA"])); 