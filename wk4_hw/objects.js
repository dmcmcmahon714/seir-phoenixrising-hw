class Hamster {
    constructor(name) {
            this.owner = '';
            this.name = name;
            this.price = 15;
    }
    wheelRun () {
        console.log('squeak squeak');
                }
    eatFood () {
        console.log('nibble nibble')
    }
    getPrice () {
        return (15);
    }
};
const owner = new Hamster("");
const price = new Hamster(15);
class Person {
    constructor () {
        this.name = 0;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0; 
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name;  
    }
    getAge() {
        return this.age; 
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log('greetings' + this.name);
    }
    eat() {
        this.weight++
        this.mood++
    }
    exercise() {
        this.weight++;
        this.mood++
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
buyHamster(hamster) {
    this.hamster.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
}
}
const timmy = new Person('Timmy');
for(let i = 0; i < 5; i++) {
    timmy.ageUp();
}
console.log(timmy);
for(let i = 0; i < 5; i++) {
    timmy.eat();
}
console.log(timmy);
for(let i = 0; i < 5; i++) {
    timmy.exercise();
}
console.log(timmy);
for(let i = 0; i < 9; i++) {
    timmy.ageUp();
}
console.log(timmy);
const gus = new Hamster('Gus');
gus.owner = 'Timmy';
console.log(gus);
for(let i = 0; i < 15; i++) {
    timmy.ageUp();
}
console.log(timmy);
for(let i = 0; i < 2; i++) {
    timmy.eat();
}
console.log(timmy);
for(let i = 0; i < 2; i++) {
    timmy.exercise();
}
console.log(timmy);