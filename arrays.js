// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
function greatestNum(arr){
  let output = 0;
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > output){
      output = arr[i];  
    }  
  }
  return output;
}
greatestNum(numbers);

// ---------------------------
// 2. Find longest string
// ---------------------------

var strings = ['this','is','a','collection','of','words'];

function longestString(arr){
  let output = [];
  let longestString = 0;
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > longestString.length){
      longestString = arr[i].length;  
      output = arr[i];
    }  
  }
  return output;
}
longestString(strings);

// ---------------------------
// 3. Find even numbers
// ---------------------------

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
function evenNums(arr){
  let output = [];
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      output.push(arr[i]);  
    }  
  }
  return output;
}
evenNums(numbers);

// ---------------------------
// 4. Find odd numbers
// ---------------------------

function evenNums(arr){
  let output = [];
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0){
      output.push(arr[i]);  
    }  
  }
  return output;
}

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var strings = ['this','is','a','collection','of','words'];

function findWord(arr, word){
  let output = '';
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === word){
      output.push(arr[i]);  
    }  
  }
  return output;
}

findWord(strings, 'is');


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];

function joinArr(arr1, arr2){
  let newArr = arr1.concat(arr2);
  return newArr;  
}

joinArr(numbers, strings);


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

function instructorSort(arr){
  let output = [];
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i].teaches === 'JavaScript'){
      output.push(arr[i].firstname);  
    }  
  }
  return output.sort();
}
instructorSort(instructors);