import React, { useState } from 'react';

import {
  StyledSearchbar,
  StyledForm,
  StyledButton,
  StyledSpan,
  StyledInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState(''); // Тут зберігаємо інпут

  // Якщо інпут змінився, обробляємо подію
  const handleChange = e => {
    setQuery(e.target.value);
  };

  // Обробник події, який викликається при сабміті форми
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <StyledSearchbar onSubmit={handleSubmit}>
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
          onChange={handleChange} // Обробник події зі зміною інпута
        />
      </StyledForm>
    </StyledSearchbar>
  );
};
