import React, { Component } from 'react';

import api from '../../services/api';

class Main extends Component {
  state = {
    repositorySearch: '',
  };

  componentDidMount() {}

  handleAddRepository = async () => {};

  render() {
    return (
      <form onSubmit="handleAddRepository">
        <input
          type="text"
          placeholder="usuário/repositório"
          onChange={e => this.setState({ repositorySearch: e.target.value })}
        />
        <button type="submit">Adicionar</button>
      </form>
    );
  }
}

export default Main;
