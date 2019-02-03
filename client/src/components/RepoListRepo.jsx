import React from 'react';

const RepoListRepo = (props) => (
  <div>
      Repo: <a href={props.repo.html_url}>{props.repo.name}</a> has been forked {props.repo.forks_count} times.
  </div>
)

export default RepoListRepo;