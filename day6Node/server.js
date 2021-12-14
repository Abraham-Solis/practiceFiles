const express = require('express') //calling to express
const path = require('path') //call back
const app = express()



app.use(express.static(path.join(__dirname, 'public',)))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


const user = {

  name: 'Joe Doe',
  email: 'JoeDoe@gmail.com',
  username: 'JoeDoe1337',
  phone: 000001,
  address: '1234 Road Lane CityVille 9000'

}


app.get('/user', (req, res) => {
  res.json(user)
})

app.listen(3000)