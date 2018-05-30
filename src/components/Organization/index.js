import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Header } from './styles';

const Organization = ({ repository, getIssues, withIcon }) => (
  <Fragment>
    {Object.keys(repository).length === 0 && repository.constructor === Object ? (
      <div />
    ) : (
      <Header key={repository.id} onClick={() => getIssues(repository)}>
        <img src={repository.organization.avatar_url} alt={repository.name} />
        <div>
          <strong>{repository.name}</strong>
          <small>{repository.organization.login}</small>
        </div>
        {withIcon ? <i className="fa fa-chevron-right" /> : <div />}
      </Header>
    )}
  </Fragment>
);

Organization.prototype = {
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

export default Organization;
