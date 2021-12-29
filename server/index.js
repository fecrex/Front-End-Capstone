const express = require('express');
const key = require('../config');
const axios = require('axios');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/home', function(req, res) {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?count=5', {
      headers: {
        Authorization: key.TOKEN
      }
    })
    .then(results => {
      // console.log(results.data);
      res.send(results.data);
    })
    .catch(err => {
      console.log('There was an error getting products from the API: ', err);
    })
  // res.send('this is working');
  // console.log('ITS WORKING');
});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
