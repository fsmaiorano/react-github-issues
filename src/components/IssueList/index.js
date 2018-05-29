import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const IssueList = ({ repository }) => (
  <Container>
    {repository.issues &&
      repository.issues.map(issue => (
        <div key={issue.id}>
          <img src={issue.user.avatar_url} alt={issue.title} />
          <p>{issue.title}</p>
          <p>{issue.user.login}</p>
        </div>
      ))}
  </Container>
);

IssueList.prototype = {
  repository: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    getIssues: PropTypes.func,
  }).isRequired,
};

export default IssueList;
