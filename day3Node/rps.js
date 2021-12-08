const inquirer = require('inquirer');

//User Choices
count = 10
win = 0
loses = 0 
draws = 0 

const round = () =>{
  inquirer.prompt(
    [{
      type:'list',
      name: 'action',
      message: 'Choose Rock Paper or Scissors',
      choices:['Rock' , 'Paper', 'Scissors']

    }]
  )
        .then(data =>{
          // console.log(data)
          let comp = Math.floor(Math.random() * 3);
          let Rock = 0
          let Paper = 1
          let Scissors = 2
          // console.log(comp)
          // console.log(data.action)
          if (data.action === 'Paper' && comp == Paper ){
            draws++
            console.log('Draw')
          } else if (data.action === 'Rock' && comp == Scissors){
            win++
            console.log('You Win!')
          } else if (data.action === 'Paper' && comp == Rock) {
            win++
            console.log('You Win!')
          } else if (data.action === 'Scissors' && comp == Paper) {
            win++
            console.log('You Win!')
          } else if (data.action === 'Rock' && comp == Rock) {
            draws++
            console.log('Draw!')
          } else if (data.action === 'Scissors' && comp == Scissors) {
            draws++
            console.log('Draw!')
          } else if (data.action === 'Rock' && comp == Paper) {
            loses++
            console.log('Lose! Computer Wins')
          } else if (data.action === 'Paper' && comp == Scissors) {
            loses++
            console.log('Lose! Computer Wins')
          } else if (data.action === 'Scissors' && comp == Rock) {
            loses++
            console.log('Lose! Computer Wins')
          }

          count--
          
          if (count > 0){
            round()
          } else{
            console.log(`
            FINAL SCORE
            -----------
            Wins: ${win}
            Loses: ${loses}
            Draws: ${draws}
            
            
            `)
          }


        })
        .catch (error =>{
          console.log(error)
        })
      }

round()


