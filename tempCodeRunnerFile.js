class Witcher  {
    constructor(name, health, magic, toxicityLevel) {
        this.name = name;
        this.health = 100;
        this.magic = 100;
        this.toxicityLevel = 100;
    }

    // witchers can take potions and equip armor
}

class Potion {
    constructor(name) {
        this.name;
        this.healthRegen = 0;
        this.magicRegen = 0;
        this.toxicityIncrease = 0;
    }
}