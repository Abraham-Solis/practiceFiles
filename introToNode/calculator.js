const calculator = (op, a, b) => {
  switch (op) {
    case 'add':
      console.log(a + b)
      break
    case 'subtract':
      console.log(a - b)
      break
    case 'multiply':
      console.log(a * b)
      break
    case 'divide':
      console.log(a / b)
      break
  }
}

module.exports = calculator
