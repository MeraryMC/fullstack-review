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
      success: data => { this.setState({repos: data}); },
      error:  () => console.log('Error in GET request')
    });
  }

  search (term) {
    console.log(`${term} was searched`);
    var that = this;
    $.ajax({
      url: 'http://localhost:1128/repos',
      type: 'POST',
      contentType: 'text/plain',
      data: term,
      success: () => { this.getRepos() },
      error: () => console.log('Error in POST request')
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