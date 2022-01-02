const express = require('express');
const key = require('../config');
const axios = require('axios');

let app = express();


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});
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
      res.send(results.data);
    })
    .catch(err => {
      console.log('There was an error getting products from the API: ', err);
    })
});

app.post('/related', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.body.id}/related`, {
    headers: {
      Authorization: key.TOKEN
    }
  })
  .then(related => {
    res.send(related.data);
  })
  .catch(err => {
    console.log(err);
  })
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
