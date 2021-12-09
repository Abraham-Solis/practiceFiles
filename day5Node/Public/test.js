console.log(`ping`)

axios.get('/myFood')
  .then(res => {
    const myFood = res.data
    console.log(myFood)

    document.getElementById('myFood').innerHTML = `
  <h1>${myFood.name}</h1>
  <h1>${myFood.name1}</h1>
  <h1>${myFood.name2}</h1>
  
  
  `
  })
  .catch(err => console.error(err))

  