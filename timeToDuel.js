class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience) {
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        target.resilience -= this.power;
    }
    showStats() {
        console.log(this.name, this.power, this.resilience);
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        target[this.stat] += this.magnitude;
    }
}

const rb = new Unit('Red Belt Ninja', 3, 3, 4);
const bb = new Unit('Black Belt Ninja', 4, 5, 4);
const hardAlgorithm = new Effect ('Hard Algorithm', 2, "increase target's resilience by 3", 'resilience', 3)
const unhandledPromiseRejection = new Effect ('Unhandled Promise Rejection', 1, "reduce target's resilience by 2", 'resilience', -2)
const pairProgramming = new Effect ('Pair Programming', 3, "increase target's power by 2", 'power', 2)

hardAlgorithm.play(rb);
unhandledPromiseRejection.play(rb);
pairProgramming.play(rb);
rb.attack(bb);
rb.showStats();
bb.showStats();