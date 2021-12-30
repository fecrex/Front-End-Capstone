const express = require('express');
const key = require('../config');
const axios = require('axios');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/home', function(req, res) {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?count=1', {
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
});

app.get('/reviews', function(req, res) {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=40344', {
      headers: {
        Authorization: key.TOKEN
      }
    })
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      console.log('There was a server error getting reviews from the API: ', err);
    })
});

app.get('/qa/questions', function(req, res) {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=40344', {
    headers: {
      Authorization: key.TOKEN
    }
  })
  .then(results => {
    res.send(results.data);
  })
  .catch(err => {
    console.error('Failed to retrieve questions from API: ', err);
  })
})

app.get('/styles', function(req, res) {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles', {
    headers: {
      Authorization: key.TOKEN
    }
  })
  .then(results => {
    res.send(results.data);
  })
  .catch(err => {
    console.log('There was an error getting the styles from the API: ', err);
  })
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
