num1 = parseInt(process.argv[3])
num2 = parseInt(process.argv[4])


if(process.argv[2]=== `add`){
const add = num1+num2;
console.log(add)
}

if (process.argv[2] === `subtract`) {
  const subtract = num1-num2;
  console.log(subtract)
}

if (process.argv[2] === `multiply`) {
  const multiply = num1*num2;
  console.log(multiply)
}

if (process.argv[2] === `divide`) {
  const divide = num1/num2;
  console.log(divide)
}
