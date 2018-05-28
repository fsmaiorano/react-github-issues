import React, { Component } from 'react';

import api from '../../services/api';

class Main extends Component {
  state = {
    repositorySearch: 'facebook/react',
    repositories: [],
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

  render() {
    return (
      <form onSubmit={this.handleAddRepository}>
        <input
          type="text"
          placeholder="usuário/repositório"
          value={this.state.repositorySearch}
          onChange={e => this.setState({ repositorySearch: e.target.value })}
        />
        <button type="submit">Adicionar</button>
      </form>
    );
  }
}

export default Main;
