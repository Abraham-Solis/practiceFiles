const inquirer = require('inquirer');
const fs = require("fs");
const { initial } = require('lodash');

// RPG Data
// Create a character constructor with generic properties true of all characters in an RPG
// Create 3 smaller constructors for more specific types of characters(examples: Fighter, Archer, Wizard, etc.)
// Build inquirer prompts that allow a user to put together their RPG team
// When a user has finished building their team, give them the option to generate a character roster.This should generate a text file with all the characters' information listed

const attributes = [
  {
    type: `input`,
    name: `playerName`,
    message: `Whats ur Dungeon Name?`
  },
  {
    type: `input`,
    name: `characterHeight`,
    message: `Whats ur Height?`
  },
  {
    type: `list`,
    name: `job`,
    message: `Choose your Dungeon job!`,
    choices: ['Wizard', 'Theif', 'Beserker', 'Troll']
  },
];



function init() {
  inquirer.prompt
  (attributes)
    .then(data =>{




    }
      ) 

    .catch((error) => {
      if (error.isTtyError) {
        console.log(error)
      }
    })
  
}







const User = (playerName, characterHeight, job) => ({
  playerName, characterHeight, job,
  level: 1,
  printInfo() {
    console.log(`
      Name: ${data.playerName}
      Height: ${data.characterHeight}
      Job: ${data.job}
      Level: ${this.level}
    `)
  }
})


const theif = (playerName, characterHeight, job, level) =>({

  ...User(playerName, characterHeight, job, level),
  agility: true,
  pickPocket:true,
  stealth:true, 
})



const theif1 = User(playerName, characterHeight, job , level)


console.log(theif1)

init();

// const Wizard = (playerName, characterHeight, job, level) => ({

//   ...user(playerName, characterHeight, job, level),
//   agility: true,
//   pickPocket: true,
//   stealth: true,
// })

// const Beserker = (playerName, characterHeight, job, level) => ({

//   ...user(playerName, characterHeight, job, level),
//   agility: true,
//   pickPocket: true,
//   stealth: true,
// })

// const Troll = (playerName, characterHeight, job, level) => ({

//   ...user(playerName, characterHeight, job, level),
//   agility: true,
//   pickPocket: true,
//   stealth: true,
// })