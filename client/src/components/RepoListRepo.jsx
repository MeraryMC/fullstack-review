import React from 'react';

const RepoListRepo = (props) => (
  <div>
    <tr>
      <td>Repo: <a href={props.repo.html_url}>{props.repo.name}</a> has been forked {props.repo.forks_count} times.</td>
    </tr>
  </div>
)

export default RepoListRepo;