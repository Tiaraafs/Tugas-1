// Parent Class → Enemys
class Enemys {
  constructor(name) {
    this.name = name;     // nama enemy
    this.speed = 2;       // kecepatan
    this.attack = 5;      // kekuatan serangan
    this.health = 100;    // darah
    this.defend = 2;      // pertahanan
  }

  // Method 1: attack
  attackEnemy() {
    console.log(`${this.name} attack!, attack = ${this.attack}`);
  }

  // Method 2: walk
  walk() {
    console.log(`${this.name} walk, speed = ${this.speed}`);
  }

  // Method 3: dash
  dash() {
    console.log(`${this.name} dash, speed = 5`);
  }

  // Method 4: getInformation
  getInformation() {
    console.log(
      `${this.name} memiliki speed=${this.speed}, attack=${this.attack}, health=${this.health}, dan defend=${this.defend}`
    );
  }
}

// Contoh penggunaan
const enemy1 = new Enemys("Goblin");
enemy1.attackEnemy();
enemy1.walk();
enemy1.dash();
enemy1.getInformation();
