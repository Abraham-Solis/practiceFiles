const fs =require('fs')

const movie = require(`./movie.js`)

fs.writeFile('example.txt', `${movie}` , err =>{
  if (err) {console.log(err)}

})