// ---------------------
// Define a function max() that takes two numbers as 
// arguments and returns the largest of them. Use the 
// if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
  if (num1 > num2){
    return num1;  
  }else{
    return num2;  
  }
}

console.assert(max(2,3) === 3);
console.assert(max(23,24) === 24);
console.assert(max(-23, 12) === 12);

// ---------------------
// Define a function maxOfThree() that takes three 
// numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
  if (num1 > num2 && num1 > num3){
    return num1;  
  }else if (num2 > num1 && num2 > num3){
    return num2;
  }else{
    return num3;  
  }  
}

console.assert(maxOfThree(2,56,3) === 56);
console.assert(maxOfThree(12,3,4) === 12);
console.assert(maxOfThree(-12,4,-5) === 4);

// ---------------------
// Write a function isVowel() that takes a character (i.e. a 
// string of length 1) and returns true if it is a 
// vowel, false otherwise.
// ---------------------

function isVowel(str){
  if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u' || str === 'A' || str === 'E' || str === 'I' || str === 'O' || str === 'U'){
    return true;  
  }else{
    return false;  
  }  
}

// function isVowel(str){
//   let a = str.toLowerCase;
  
//   if (a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u'){
//     return true;  
//   }else{
//     return false;  
//   } 
// }

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);
console.assert(isVowel("2") === false);

// ---------------------
// Write a function rovarspraket() that will translate 
// a text into "Rovarspraket". That is, double every 
// consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return 
// the string "tothohisos isos fofunon".
// ---------------------

function check(letter) {
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  var isConsonant = false;

  for (let i = 0; i < consonants.length; i++) {
    if (letter == consonants[i]) {
      isConsonant = true;
    }
  }
  return isConsonant;
}

function rovarspraket(str, letterO) {
  let newString = '';

  for (let i = 0; i < str.length; i++) {
    if (check(str[i])) {
      newString += str[i] + letterO + str[i];
    } else {
      newString += str[i];
    }
  }
  return newString;
}
rovarspraket('this is fun', 'o');

console.assert(rovarspraket("a") === "a");
console.assert(rovarspraket("b") === "bob");
console.assert(rovarspraket("cat") === "cocatot");
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot");
console.assert(rovarspraket(0) === "0");


// ---------------------
// Define a function reverse() that computes the reversal 
// of a string. For example, reverse("jag testar") should 
// return the string "ratset gaj".
// ---------------------

function reverse(str){ 
  return str.split('').reverse().join('');
}

console.assert(reverse("books") === "skoob");
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew");