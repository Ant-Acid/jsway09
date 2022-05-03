// class Character {
//   constructor(name, strength, health) {
//     this.name = name;
//     this.strength = strength;
//     this.health = health
//     this.xp = 0
//     this.gold = 10
//     this.keys = 1
//     // ...
//   }
//   attack(target) {
//     if (this.health > 0) {
//       const damage = this.strength
//       console.log(
//         `${this.name} attacks ${target.name} and causes ${damage} damage points`
//       );
//       target.health -= damage
//       if (target.health > 0) {
//         console.log(`${target.name} has ${target.health} health points left`);
//       } else {
//         target.health = 0
//         const bonusXP = 10
//         console.log(
//           `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold, and ${target.keys} key(s).`
//         );
//         this.xp += bonusXP
//         this.gold += target.gold
//         this.key += target.keys
//         target.gold = 0
//         target.keys = 0
//       }
//     } else {
//       console.log(`${this.name} cant attack (they've been eliminated)`);
//     }
//   }
//   describe() {
//     return `${this.name} has ${this.health} health points, ${this.strength} for strength and ${this.xp} XP points, ${this.gold} gold, and ${this.keys} keys.`
//     // ...
//   }
//   // ...
// }
// const aurora = new Character('Aurora', 25, 150)
// const glacius = new Character('Glacius', 30, 130)

// console.log("Welcome to the Adventure! Here are our Heroes:")
// console.log(aurora.describe());;
// console.log(glacius.describe());

// const monster = new Character('Spike', 40, 20)
// console.log(`A wild monster has appeared! It's name is ${monster.name}`);

// monster.attack(aurora)
// monster.attack(glacius)

// aurora.attack(monster)
// glacius.attack(monster)


// console.log(aurora.describe());;
// console.log(glacius.describe());

// class Dog {
// constructor (name, species, size){
//   this.name = name
//   this.species = species
//   this.size = size
// }

// bark() {
//   return (this.size > 60) ? 'Grrr' : 'Woof'
// }

// }


// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);


class Account {
  constructor (accountHolder) {
    this.name = accountHolder
    this.balance = 0
  }

  credit (amount) {
    this.balance += amount
  }

  describe () {
    return `owner: ${this.name}, balance: ${this.balance}`
  }
}

const accountList = [new Account('Sean'), new Account('Brad'), new Account('Georges')] 

accountList.forEach(item => {
  item.credit(+(1000))
  console.log(item.describe());
})