import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Organization from '../Organization';

const OrganizationList = ({ repositories, getIssues }) => (
  <Container>
    {repositories &&
      repositories.map(repo => <Organization repository={repo} getIssues={getIssues} withIcon />)}
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
