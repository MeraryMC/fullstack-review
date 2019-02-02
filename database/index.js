const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (results) => {
  console.log(results);
  let newRepo = new Repo({
    id: results.id,
    name: results.name,
    forks_count: results.forks_count
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
