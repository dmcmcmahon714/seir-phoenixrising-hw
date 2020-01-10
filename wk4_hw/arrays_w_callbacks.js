const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const moreThanZero = nums.map((num)=>{
        if (num >= 0) {
            return num }
        })
console.log(moreThanZero);
//all
const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]
const isLong = panagrams.map((str)=>{
    if (str.length > 8) {
        return str }
    })
//all shorter than eight characters
console.log(isLong);
const lessThanFour = nums.map((num)=>{
    if (num < 4) {
        return num }
    })
console.log(lessThanFour);
//0,1,2,3
const evenLength = panagrams.map((str)=>{
    if (str.length%2 ===0) {
        return str }
    })
console.log(evenLength);
//printed even strings in console
const divisibleFive = nums.map((num)=>{
    if (num%5 ===0) {
        return num }
    })
console.log(divisibleFive);
//5
const moreThanThree = panagrams.map((str)=>{
    if (str.length > 3) {
        return str }
    })
console.log(moreThanThree);
//'requires'
const divideThree = nums.map((num)=>{
    if (num%3 ===0) {
        return num }
    })
const indexThree = divideThree.indexOf(3);
console.log(indexThree);
//'3' has an index of [2]
const lessThanTwo = panagrams.map((str)=>{
    if (str.length < 2) {
        return str }
    })
console.log(lessThanTwo);
//no strings less than two characters
const timesThree = nums.map((num)=>{
    return num * 3 
    })
console.log(timesThree);
const addExclamation = panagrams.map((str)=>{
        return str + '!'
    })
console.log(addExclamation);
const timesHundred = nums.map((num)=>{
    return num * 100 
    })
console.log(timesHundred);
const allUpperCase = panagrams.map((str)=>{
    return str.toUpperCase()
})
console.log(allUpperCase);
const divisibleSeven = nums.map((num)=>{
    if (num%7 ===0) {
        return num }
    })
console.log(divisibleSeven);
const stringSplit = panagrams.map((str)=>{
    return str.split("")
})
const findA = stringSplit.map((str)=>{
    for (i = 0; i<=str.length; i++); {
        if (str === "a") {
        return str}
}
})
console.log(findA);
//yes there are a's