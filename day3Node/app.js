//constructors
function Potion(name, cost, description) {
  this.name = name
  this.cost = cost
  this.description = description
}

function Weapon(name, cost, description, damage) {
  this.name = name
  this.cost = cost
  this.description = description
  this.damage = damage
}

const potion1 = new Potion('Potion of Minor Healing', '10 gold', 'Heals 25 HP over 5 seconds')
const potion2 = new Potion('Potion of Great Healing', '20 gold', 'Heals 50 HP over 5 seconds')

const weapon1 = new Weapon('Longsword of the Lion', '100 gold', 'Long sword that swings quickly', '10 damage')
const weapon2 = new Weapon(`Goblins' Greatsword`, '150 gold', 'Uses goblin arm as the hilt', '15 damage')
const weapon3 = new Weapon(`Billy Bob's Battle Axe `, '200 gold', 'The notorious BBB', '20 damage')

console.log(potion1, potion2)

console.log(weapon1, weapon2, weapon3)


function inventory() {
    console.log(`
      Inventory
  ------------------
    Potions:
    - ${potion1.name}
        ${potion1.cost}
        ${potion1.description}
  
     -${potion2.name}
        ${potion2.cost}
        ${potion2.description}

    Weapons: 
    -${ weapon1.name} 
        ${weapon1.cost}
        ${ weapon1.description }
        ${ weapon1.damage }

    -${ weapon2.name} 
        ${weapon2.cost}
        ${weapon2.description}
        ${weapon2.damage }

     -${ weapon3.name} 
        ${weapon3.cost}
        ${weapon3.description}
        ${weapon3.damage }

   `)
  }

inventory()