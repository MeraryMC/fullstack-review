const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var uniqueValidator = require('mongoose-unique-validator');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

let repoSchema = mongoose.Schema({
  id: Number,
  name: { type: String, required: true, unique: true},
  forks_count: Number,
  html_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (results) => {
  console.log(results);
  let newRepo = new Repo({
    id: results.id,
    name: results.name,
    forks_count: results.forks_count,
    html_url: results.html_url
  });
  newRepo.save(err => {
    if (err) {
      console.log('Error saving repos to MongoDB')
      return console.log(err)
    }
  });
};

module.exports.Repo = Repo;
module.exports.save = save;
