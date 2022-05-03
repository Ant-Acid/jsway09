class Character {
    constructor(name, strength, health) {
      this.name = name;
      this.strength = strength;
      this.health = health
      this.xp = xp
      // ...
    }
    attack(target) {
      if(this.health > 0){
        const damage = this.strength
      }
    }
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} for strength and ${this.xp} XP points`
      // ...
    }
    // ...
  }
  const aurora = new Character('Aurora', 150, 25)
  const glacius= new Character('Glacius', 130, 30)

  console.log("Welcome to the Adventure! Here are our Heroes:")
  console.log(aurora.describe());;
  console.log(glacius.describe());

  const monster =  new Character('Spike', 40, 20)
  console.log(`A wild monster has appeared! It's name is ${monster.name}`);

  monster.attack(aurora)
  monster.attack(glacius)

  aurora.attack(monster)
  glacius.attack(monster)


  console.log(aurora.describe());;
  console.log(glacius.describe());

