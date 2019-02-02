import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      repos: []
    }

    this.getRepos = this.getRepos.bind(this);

  }

  componentDidMount () {
    this.getRepos();
  }

  getRepos () {
    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'GET',
      success: data => {
        var info = [];
        for (var i = 0; i < data.length; i++) {
          info.push(data[i]);
        }
        this.setState({
          repos: info
        }), console.log(data)},
      error:  () => console.log('Error in GET request')
    });
  }

  search (term) {
    console.log(`${term} was searched`);
    var that = this;
    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'POST',
      data: {term},
      success: () => { that.getRepos() },
      error: () => console.log('Error in POST request')
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));