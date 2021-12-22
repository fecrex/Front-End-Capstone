const express = require('express');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('FILL_IN_URL', function(req, res) {

});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
