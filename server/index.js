const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const donnees = require('./donnes.js');

app.get('/getAffluence', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ affluence: donnees }));
});

app.listen(3001, () => console.log('Express server is running on localhost:3001'));
