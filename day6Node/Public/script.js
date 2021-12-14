axios.get('/user')
  .then(res => {
    const user = res.data
    console.log(user)

    document.getElementById('user').innerHTML = `
  <h1>${user.name}</h1>
  <h1>${user.email}</h1>
  <h1>${user.phone}</h1>
  <h1>${user.adress}</h1>
  
  
  `
  })
  .catch(err => console.error(err))