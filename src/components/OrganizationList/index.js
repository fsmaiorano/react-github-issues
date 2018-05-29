import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header } from './styles';

const OrganizationList = ({ repositories, getIssues }) => (
  <Container>
    {repositories &&
      repositories.map(repo => (
        <Header key={repo.id} onClick={() => getIssues(repo)}>
          <img src={repo.organization.avatar_url} alt={repo.name} />
          <div>
            <strong>{repo.name}</strong>
            <small>{repo.organization.login}</small>
          </div>
          <i className="fa fa-chevron-right" />
        </Header>
      ))}
  </Container>
);

OrganizationList.prototype = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    organization: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    getIssues: PropTypes.func,
  })).isRequired,
};

export default OrganizationList;
