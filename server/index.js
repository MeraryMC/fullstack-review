const express = require('express');
const { Repo, save } = require('../database/index');
const gh = require('../helpers/github');
const bodyParser = require('body-parser');


let app = express();

app.use(express.static(__dirname + '/../client/dist'));

//will use the url enconding
app.use(bodyParser.urlencoded({ extended: false }))

//this line is parsing our json object
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  var username = req.body.term;
  // console.log(req.body.term);
  gh.getReposByUsername(username, (data) => {
    var resultObj = data;
    resultObj.forEach((results) => {
      save({
        id: results.id,
        name: results.name,
        forks_count: results.forks_count
      });
    });
  });
  res.send();
});

app.get('/repos', function (req, res) {
  //this returns a promise; all methods on mongoose return promises
    //save returns a promise as well
  Repo.find({})
  .then(results => {
    console.log(results)
    if (!results){
      return res.status(500).send({})
    }
    return res.status(200).send(results);
  })



  // Repo.find((err, repos) => {
  //   if (err) {
  //     return res.status(500).send(err)
  //   }
  //   return res.status(200).send(repos);
  // });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

