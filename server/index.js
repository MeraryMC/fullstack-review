const express = require('express');
const {db, save} = require('../database/index.js');
const gh = require('../helpers/github.js');
const bodyParser = require('body-parser');



let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.text());

app.post('/repos', function (req, res) {
  var postRepos = results => results._each(save);
  gh.getReposByUsername(req.body, postRepos);
  res.status(200).send('Repo Post Successful!')
});

app.get('/repos', function (req, res) {
  res.status(200);
  res.send(results);

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

