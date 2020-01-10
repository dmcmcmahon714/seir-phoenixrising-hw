const crayonBox = ["red", "green", "blue"];
console.log(crayonBox[1]);
const bottle = {
    cap: {
        color:'blue',
        material: 'plastic'
    }
};
console.log(bottle.cap.color);
const receipt = [
    {name: "chocolate", price: 500}
];
console.log(receipt[0].name);
const apartmentBuilding = [
    
    {name: 'Marshall',
    address: 1629
},
{
    name: 'Walter',
    address: 1842
}
];
console.log(apartmentBuilding[0].name);
// Combining objects, arrays, and functions more than one level deep
const findItem = (size, item)=>{
    if (size === '6ft') {
        return 'scarf';
    } else {
        return '6ft'
    }
    }
    console.log(findItem('scarf'));

const crayonSelector = ()=>{
    return { 
        colorChoice: ['red', 'green', 'yellow']
    }
};
console.log(crayonSelector().colorChoice[1]);

const options = () => {
    console.log('Select a song');
      };
const powerButton = () => {
      return options()
}
powerButton();

const vendingMachine = [    
    {name: 'fritos',
    price: 'two'
},
{
    name: 'cheetos',
    price: 'one'
},
{   name: 'doritos',
    price: 'two'    
}
];
const vend = (num)=>{
 if (num === 1) {
     return console.log(vendingMachine[0].name);
 } 
else if (num === 2) {
     return console.log(vendingMachine[1].name);
 }
else if (num === 3) {
    return console.log(vendingMachine[2].name);
} else {
    return "sorry"
};
}
vend(2)
const add = (num1, num2)=>{
    return num1 + num2
}
console.log(add(1,2));
const subtract = (num1, num2)=>{
    return num1 - num2
}
console.log(subtract(4,2));
const multiply = (num1, num2)=>{
    return num1 * num2
}
console.log(multiply(6,2));
const divide = (num1, num2)=>{
    return num1/num2
}
console.log(divide(18,3));
const operates = (num1, num2, operation)=>{
    return operation(num1, num2);
}
console.log(operates(8, 4, multiply));
console.log(operates(6, 3, divide));
console.log(operates(19, 4, subtract));
console.log(operates(5, 9, add));

const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();
// foo();

// const foo ()=>{
//     console.log('hi');
//}
//The function is invoked before it can be defined.




