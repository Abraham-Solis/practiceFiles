// const calculator = require('./calculator.js')

// const operation = process.argv[2]
// const a = process.argv[3]
// const b = process.argv[4]

// calculator(operation, a, b)

const movie = require(`./movie.js`)

const display = arr =>{
  arr.forEach(elem => console.log(elem))
}

display(movie)

module.exports = movie