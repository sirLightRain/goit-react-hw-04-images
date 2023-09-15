import React, { Component } from 'react';

import {
  StyledSearchbar,
  StyledForm,
  StyledButton,
  StyledSpan,
  StyledInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '', // Тут зберігаємо інпут
  };

  // Якщо інпут змінився, обробляємо подію
  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  // Обробник події, який викликається при сабміті форми
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    const { query } = this.state;

    return (
      <StyledSearchbar onSubmit={this.handleSubmit}>
        <StyledForm>
          <StyledButton type="submit">
            <StyledSpan>Search</StyledSpan>
          </StyledButton>

          <StyledInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query} // Значення інпута зі стану
            onChange={this.handleChange} // Обробник події зі зміною інпута
          />
        </StyledForm>
      </StyledSearchbar>
    );
  }
}
