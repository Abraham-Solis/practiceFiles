
const axios = require('axios');

let title = process.argv[2]



// Make a request for a movie title 
axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${title}`)
  .then(function (response) {
    // handle success
    console.log(`Movie: ${response.data.Title}`);
    console.log(`Year: ${response.data.Year}`);
    console.log(`Rating: ${response.data.Rated}`);
    console.log(`Director:${response.data.Director}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });