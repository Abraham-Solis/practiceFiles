const fs = require('fs')


// 12, 700, -54, -0.25, 10, -0.25, -70, 103


const cashFlow = process.argv[2]

const money = parseInt(process.argv[3])

const deposit = (money) => {
  fs.appendFile(`bank.txt`, `, ${money}`, err => {
    if (err) { console.log(err) }
  })
}

const withdraw = (money) => {
  fs.appendFile(`bank.txt`, `, -${money}`, err => {
    if (err) { console.log(err) }
  })
}


const moneyFlow = (cashFlow, money) => {
  switch (cashFlow) {
    case 'deposit':
      deposit(money)
      break
    case 'withdraw':
      withdraw(money)
      break

  }
}

// money flow function for cashFlow and money
moneyFlow(cashFlow, money)


// Bank Lotto

Math.floor(Math.random() *49) +1
