const express = require('express') //calling to express
const path = require('path') //call back
const app = express() //express fuction

app.get('/movies',(req, res) =>{
  res.sendFile(path.join (__dirname, 'movies.html'))
})

app.get('/games', (req, res) => {
  res.sendFile(path.join(__dirname,  'games.html'))
})

app.get('/music', (req, res) => {
  res.sendFile(path.join(__dirname, 'Music.html'))
})


app.get('/food', (req, res) => {
  res.sendFile(path.join(__dirname, 'food.html'))
})



app.listen(3000)