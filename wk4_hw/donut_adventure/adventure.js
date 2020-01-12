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

}