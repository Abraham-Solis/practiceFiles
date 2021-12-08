const express = require('express')

const app = express()

app.get('/movies',(req, res) =>{
  res.send(`Shrek, Shrek 2, Shrek 3`)
})

app.get('/games', (req, res) => {
  res.send(`Battle Field, Rocket League, League of Legends`)
})

app.get('/music', (req, res) => {
  res.send(`Lofi, Rock, Hip-Hop`)
})



app.listen(3000)