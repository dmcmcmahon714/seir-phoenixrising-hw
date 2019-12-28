// 1. The argument is the input, the parameter is how the input is represented in the function.
// 2. A function is defined by a return value and is not necessarily displayed in the console log. The output value of a function cannot come from a console.log().
//
function checkPalindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));
// //Sum Array
var num = [1, 2, 3, 4, 5, 6]; 
var sumArray = 0
  for (var i = 0; i < num.length; i++) {
    sumArray += num[i];
}
console.log(sumArray);
