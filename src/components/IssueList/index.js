import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header } from './styles';

const IssueList = ({ repository }) => (
  <Container>
    {repository.issues &&
      repository.issues.map(issue => (
        <Header key={issue.id}>
          <img src={issue.user.avatar_url} alt={issue.title} />
          <div>
            <strong>{issue.title}</strong>
            <small>{issue.user.login}</small>
            <a href={issue.html_url} target="_blank">
              <i className="fa fa-external-link" /> Open Issue
            </a>
          </div>
        </Header>
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
