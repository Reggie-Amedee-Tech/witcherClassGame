// witchers can take potions and equip armor


class Witcher {
    constructor(name) { // I created a class with a name constructor. This means that upon instatiation of the class, you MUST provide this variable for the class to be created. The other attributes will by default be attached to the witcher object. 
        this.name = name;
        this.health = 100;
        this.magic = 100;
        this.toxicityLevel = 100;
    }

    takePotion(potion) { // This method takes a potion argument which should be assigned specific values that will increase the base stats of the witcher object. 
        this.health += potion.healthRegen;
        this.magic += potion.magicRegen;
        this.toxicityLevel += potion.toxicityIncrease;
    }

    equipArmor(armor) { // This method takes an armor argument and increases the stats of the witcher object, similar to potions
        this.health += armor.armorRating;
        this.magic += armor.magicRating;
    }

    attack(monster) {
        let damage = Math.floor(Math.random() * 20);
        monster.health = monster.health - damage
        console.log(`${this.name} did ${damage} points of damage!`)
    }
}

class Potion { // I created a potion class that's purpose is to increase the stats of the witcher object. 
    constructor(name) {
        this.name = name;
        this.healthRegen = 0;
        this.magicRegen = 0;
        this.toxicityIncrease = 0;
    }

    setPotionAttributes(healthReg, magicReg, toxicityInc) {
        this.healthRegen = healthReg;
        this.magicRegen = magicReg;
        this.toxicityIncrease = toxicityInc;
    }
}

class Armor {
    constructor(name) { // I created an armor class that's purpose is to increase the stats of the witcher object.
        this.name = name;
        this.armorRating = 0;
        this.magicRating = 0;
    }

    setArmorStats(armorStat, magicStat) {
        this.armorRating = armorStat;
        this.magicRating = magicStat;

    }
}

class Monster {
    constructor(name, health) {
        this.name = name;
        this.health = health
    }

    attack(witcher) {
        let damage = Math.floor(Math.random() * 20);
        witcher.health = witcher.health - damage;
        console.log(`${this.name} did ${damage} points of damage!`)
    }
}



const battle = (witcher, monster) => { // this method simulates a battle between a witcher and a monster. This method takes a witcher object/monster object argument and we create logic that depletes the health of these objects.
    console.log(`Witcher ${witcher.name} joins the battle!`) 
    console.log(`A wild ${monster.name} appears!`)

    do {    // I used a do...while loop because it allows code to be ran sequentially until a certain condition is met. With this loop, I stated that it will continuosly run while the health of both the witcher or the monster is ABOVE zero, signifying that their still alive! 
        witcher.attack(monster);
        monster.attack(witcher);
        if (witcher.health < 0 || monster.health < 0) { // I set a condition that states IF our witcher/monster object is less than zero, the battle is over because they have no more health left! 
            console.log('battle over!')
            if (witcher.health > monster.health) {  // I set a condition that states whatever witcher/monster object is above zero, AFTER the previous condition said to stop whenever any witcher/monster object is below zero, is the official winner of the battle!
                console.log(`${witcher.name} wins!`)
            } else if (monster.health > witcher.health) {
                console.log(`${monster.name} wins!`)
            }
            break; // I break the loop once all of these conditions are met!


        }
    } while (witcher.health > 0 || monster.health > 0) 
}



// object instantiations 

const swallow = new Potion('Swallow')

const joseph = new Witcher('Joseph')

const meteoriteCuirass = new Armor('Meteorite Cuirass');

const chort = new Monster('Chort', 150)

// methods called on objects

meteoriteCuirass.setArmorStats(100, 100);

swallow.setPotionAttributes(50, 0, 0)

joseph.equipArmor(meteoriteCuirass);

joseph.attack(chort)

// log object activity

console.log(chort);


// battlefield!

battle(joseph, chort)