const express = require('express') //calling to express
const path = require('path') //call back
const app = express() //express fuction

// app.get('/movies', (req, res) => {
//   res.sendFile(path.join(__dirname, 'movies.html'))
// })

// app.get('/games', (req, res) => {
//   res.sendFile(path.join(__dirname, 'games.html'))
// })

// app.get('/music', (req, res) => {
//   res.sendFile(path.join(__dirname, 'Music.html'))
// })


// app.get('/food', (req, res) => {
//   res.sendFile(path.join(__dirname, 'food.html'))
// })


// const dataGames = {

//   Games: ['Battle Field, Rocket League, League of Legends']

// }

// app.get('/dataGames', (req, res) =>{
//   res.json(dataGames)
// })

// const dataFood = {

//   Food: ['Mexian, Chineese, Italian']

// }

// app.get('/dataFood', (req, res) => {
//   res.json(dataFood)
// })


// const dataMovies = {

//   movies: ['Shrek, Shrek 2, Shrek 3']

// }

// app.get('/dataMovies', (req, res) => {
//   res.json(dataMovies)
// })


// const dataMusic = {

//   Music: ['Lofi, Rock, Hip-Hop']

// }

// app.get('/dataMusic', (req, res) => {
//   res.json(dataMusic)
// })



app.use(express.static(path.join(__dirname, 'public',)))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'food.html'))
})

const myFood = {

  name: 'Chicken',
  name1: 'Steak',
  name2: 'Pasta'

}

app.get('/myFood', (req, res) => {
  res.json(myFood)
})




app.listen(3000)