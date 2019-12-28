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
// test primes
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(52));
// print primes
function printPrimes(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

console.log(printPrimes(200));

var choice = ['rock', 'paper', 'scissors'];
var randomMove = choice[Math.floor(Math.random() * choice.length)];
var rockPaperScissors = function(choice1,randomMove) {
    if(choice1===randomMove){
        return "The result is a tie!";
    }
    if(choice1==="rock"){
        if(randomMove==="scissors"){
            return "you chose rock! you rock!";
        }
        else{
            return "Computer beat you with paper";
        }
    }
    if(choice1==="paper"){
        if(randomMove==="rock"){
            return "Computer chose rock. You win with paper!";
        }
        else{
            return "Computer beat you with scissors.";
        }
    }
    if(choice1==="scissors"){
        if(randomMove==="rock"){
            return "Computer beat scissors with rock.";
        }
        else{
            return "scissors wins";
        }
    }
};
console.log(rockPaperScissors('scissors', randomMove));
