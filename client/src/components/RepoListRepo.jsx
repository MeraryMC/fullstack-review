import React from 'react';

const RepoListRepo = (props) => (
  <div>
    <tr>
      <td>{props.repo.name}</td>
      <td>{props.repo.forks_count}</td>
    </tr>
  </div>
)

export default RepoListRepo;