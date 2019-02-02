const express = require('express');
const db = require('../database/index');
const gh = require('../helpers/github');
const bodyParser = require('body-parser');



let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.text());

app.post('/repos', function (req, res) {
  var username = req.body.getReposByUsername;
  gh.getReposByUsername(username, (data) => {
    var resultObj = JSON.parse(data);
    resultObj.forEach((results) => {
      db.save({
        id: results.id,
        name: results.name,
        forks_count: results.forks_count
      });
    });
  });
  res.end();
});

app.get('/repos', function (req, res) {
  res.send('hello');

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

