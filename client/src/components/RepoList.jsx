import React from 'react';
import RepoListRepo from './RepoListRepo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    Here are the top {props.repos.length} repos:
    <div>{"\n"}</div>
    <br></br>
    <div>{props.repos.map(repo => <RepoListRepo repo={repo}/>)}</div>
  </div>
)

export default RepoList;