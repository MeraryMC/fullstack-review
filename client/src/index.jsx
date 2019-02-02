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

  getRepos () {
    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'GET',
      success: function () {
        this.setState({repos: results});
      },
      error: function() {
        console.log('Error in POST request')
      }
    });

  }

  search (term) {
    console.log(`${term} was searched`);
    var that = this;
    $.ajax({
      type: 'POST',
      url: 'http://localhost:1128/repos',
      contentType: 'application/json',
      data: JSON.stringify(term),
      success: function() {
        that.getRepos();
      },
      error: function() {
        console.log('Error in POST request')
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));