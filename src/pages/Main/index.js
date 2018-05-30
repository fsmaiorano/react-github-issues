import React, { Component } from 'react';

import api from '../../services/api';

import { Container, Left, Right, TopLeft, TopRight, Bottom } from './styles';

import Organization from '../../components/Organization';
import OrganizationList from '../../components/OrganizationList';
import IssueList from '../../components/IssueList';

class Main extends Component {
  state = {
    repositorySearch: 'facebook/react',
    repositories: [],
    selectedRepository: {},
    selectedFilter: 'all',
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

    const exist = this.state.repositories.filter(repo => repo.id === repository.id);

    if (exist.length === 0) {
      this.setState({ repositories: [...this.state.repositories, repository] });
    } else {
      alert('Repositório já adicionado');
    }
  };

  handleGetIssues = async (repository) => {
    const { data: issues } = await api.get(`repos/${repository.organization.login}/${repository.name}/issues?state=${
      this.state.selectedFilter
    }`);

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

  changeFilter = (event) => {
    this.setState({ selectedFilter: event.target.value });
    this.handleGetIssues(this.state.selectedRepository);
  };

  render() {
    return (
      <Container>
        <Left>
          <TopLeft>
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
          </TopLeft>
          <Bottom>
            <OrganizationList
              repositories={this.state.repositories}
              getIssues={this.handleGetIssues}
            />
          </Bottom>
        </Left>
        <Right>
          <TopRight>
            <Organization
              repository={this.state.selectedRepository}
              getIssues={this.handleGetIssues}
            />
            <select onChange={this.changeFilter} value={this.state.selectedFilter}>
              <option value="all">Todos</option>
              <option value="open">Abertas</option>
              <option value="closed">Fechadas</option>
            </select>
          </TopRight>
          <Bottom>
            <IssueList repository={this.state.selectedRepository} />
          </Bottom>
        </Right>
      </Container>
    );
  }
}

export default Main;
