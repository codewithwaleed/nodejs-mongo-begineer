const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

const app = express();

MongoClient.connect('mongodb-connection-string', (err, client) => {
  // ... do something here
})

// You need to make sure that you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

//get request
app.get('/', function (req, res) {
  // do something here
  res.send('You have made a get request')
});

app.get('/page', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/submit', (req, res) => {
  res.send('You have submitted form')

})

app.listen(3000, function() {
  console.log('listening on 3000')
})
