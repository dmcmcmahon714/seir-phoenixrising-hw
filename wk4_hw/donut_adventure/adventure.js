class Hero {
    constructor (name) {
        this.name: = name;
        this.health = 15;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        this.catchphrases: ['i\'m fresher than day old pizza', 'you can\'t count my calories!']
    }
    talkSass() {
        console.log(this.catchphrases[Math.random() * this.length)]);
    }
    announceHealth() {
        console.log(this.health)
    }
    fight() {
        console.log('I\'m ready to rumble!');
    }

}
const dougie = new Hero('Dougie');
class Enemy {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        }
        this.catchphrases = ['i\'m youtube famous', 'i\'m more dangerous than an uncovered sewer']
    }
    talkSmack() {
        console.log(this.catchphrases[Math.random() * this.length)]);
    }
    announceHealth() {
        console.log(this.health);
    }
    fight () {
        console.log('i\'m gonna flatten you like a slice of pepperoni');
    }
}
const pizzaRat = new Enemy('Pizza Rat');