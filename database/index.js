const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  url: String,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = repos => {
  var data = new Repo({
    id: repos.id,
    name: repos.name,
    url: repos.owner.url,
    forks_count: repo.forks_count
  })
  data.save(err => {
    if (err) {
      console.log('Error saving repos to MongoDB')
      return console.log(err)
    }
  });
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

module.exports.save = save;
