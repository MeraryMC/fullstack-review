import React from 'react';

const RepoListRepo = (props) => (
  <div>
    <tr>
      <td>Repo: {props.repo.name} has been forked {props.repo.forks_count} times.</td>
    </tr>
  </div>
)

export default RepoListRepo;