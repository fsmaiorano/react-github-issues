import React, { Component } from 'react';

import api from '../../services/api';

import { Container, LeftContent, RightContent } from './styles';

import OrganizationList from '../../components/OrganizationList';
import IssueList from '../../components/IssueList';

class Main extends Component {
  state = {
    repositorySearch: 'facebook/react',
    repositories: [],
    selectedRepository: {},
  };

  componentDidMount() {}

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { data } = await api.get(`/repos/${this.state.repositorySearch}`);
    const repository = {
      name: data.name,
      id: data.id,
      organization: data.organization,
    };
    this.setState({ repositories: [...this.state.repositories, repository] });
  };

  handleGetIssues = async (repository) => {
    const { data: issues } = await api.get(`repos/${repository.organization.login}/${repository.name}/issues?state=all`);

    this.state.repositories.forEach((repo) => {
      if (repo === repository) {
        Object.assign(repo, { issues });
      }
    });
    this.setState({
      selectedRepository: repository,
      repositories: [...this.state.repositories],
    });
  };

  render() {
    return (
      <Container>
        <LeftContent>
          <form onSubmit={this.handleAddRepository}>
            <input
              type="text"
              placeholder="usuário/repositório"
              value={this.state.repositorySearch}
              onChange={e => this.setState({ repositorySearch: e.target.value })}
            />
            <button type="submit">
              <i className="fa fa-plus-circle" />
            </button>
          </form>
          <OrganizationList
            repositories={this.state.repositories}
            getIssues={this.handleGetIssues}
          />
        </LeftContent>
        <RightContent>
          <IssueList repository={this.state.selectedRepository} />
        </RightContent>
      </Container>
    );
  }
}

export default Main;
