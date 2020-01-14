class Hero {
    constructor (name) {
        this.name = name;
        this.health = 15;
        this.weapons = [{
            name: "sprinkle spray",
            hp: 5
        },
        {
            name: "sugar shock",
            hp: 10
        }
    ];
        this.catchphrases = ['i\'m fresher than day old pizza', 'you can\'t count my calories!']
    }
    talkSass() {
        console.log(this.catchphrases[Math.random() * this.length]);
    }
    announceHealth() {
        console.log(this.health)
    }
    randNUmGenerator (arr) {
        return Math.floor(Math.random() * arr.length)
    }
    randomWeapon() {
        return this.weapons[this.randNUmGenerator(this.weapons)];
    }
    fight(enemy) {
        let weapon = this.randomWeapon();
        enemy.health -= weapon.hp;
        console.log(`${this.name} used ${weapon.name}, it hits ${enemy.name} for ${weapon.hp}`);
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
        console.log(this.catchphrases[Math.random() * this.length]);
    }
    announceHealth() {
        console.log(this.health);
    }
    fight (enemy) {
        enemy.health -= this.weapons.pepperoniStars;
        console.log(`${this.name} used ${Object.keys(this.weapons)[0]}, it hits ${enemy.name} for ${this.weapons.pepperoniStars}`);
    }
}
const pizzaRat = new Enemy('Pizza Rat');

dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

dougie.fight(pizzaRat);
pizzaRat.fight(dougie);
dougie.announceHealth();
pizzaRat.announceHealth();
