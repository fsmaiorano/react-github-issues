import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header } from './styles';

const OrganizationList = ({ repositories }) => (
  <Container>
    {repositories &&
      repositories.map(repo => (
        <Header key={repo.id}>
          <img src={repo.organization.avatar_url} alt={repo.name} />
          <div>
            <strong>{repo.name}</strong>
            <small>{repo.organization.login}</small>
          </div>
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
  })).isRequired,
};

export default OrganizationList;
