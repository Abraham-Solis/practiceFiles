const inquirer = require('inquirer');






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
          console.log('Draw')
        } else if (data.action === 'Rock' && comp == Scissors){
          console.log('You Win!')
        } else if (data.action === 'Paper' && comp == Rock) {
          console.log('You Win!')
        } else if (data.action === 'Scissors' && comp == Paper) {
          console.log('You Win!')
        } else if (data.action === 'Rock' && comp == Rock) {
          console.log('Draw!')
        } else if (data.action === 'Scissors' && comp == Scissors) {
          console.log('Draw!')
        } else if (data.action === 'Rock' && comp == Paper) {
          console.log('Lose! Computer Wins')
        } else if (data.action === 'Paper' && comp == Scissors) {
          console.log('Lose! Computer Wins')
        } else if (data.action === 'Scissors' && comp == Rock) {
          console.log('Lose! Computer Wins')
        }


      })
      .catch (error =>{
        console.log(error)
      })

//   function runGame(params) {
//     for (let i = 0; i < 1; i++) {
//       if (data.action === answer) {
//        console.log('ping') 
    
//   }
// }}





