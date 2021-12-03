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


// Bank Lotto Function

const lottoNumber =

  Math.floor(Math.random() * 49) + 1


const lotto = () => {

  if (lottoNumber <= 25) {
    moneyFlow(deposit(10))
  } else {
    moneyFlow(withdraw(.25))
  }
}



//Inputs

const moneyFlow = (cashFlow, money) => {
  switch (cashFlow) {
    case 'deposit':
      deposit(money)
      console.log(`Money Deposited!`)
      break
    case 'withdraw':
      withdraw(money)
      console.log(`Money Withdrawn!`)
      break
      case 'lotto':
        lotto(lottoNumber)
      console.log(`Good Luck!`)
      break
    case 'balance':
      balance(cashFlow)

  }
}

// money flow function for cashFlow and money
moneyFlow(cashFlow, money)







function balance(op) {
  fs.readFile('bank.txt', 'utf8', (err, data) => {
    const dataString = data.split(`,`);

    let total = 0
    for (let i = 0; i < dataString.length; i++) {
      total += parseFloat(dataString[i]);


    }

    console.log(`Your Current Balance: $${total}`)
    if (err) { console.log(err) }
  })

}

  
