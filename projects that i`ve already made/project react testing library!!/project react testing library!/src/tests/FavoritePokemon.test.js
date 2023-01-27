import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import FavoritePokemon from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Test if the person doesnt have a favorite pokemon will show no favorite pokemon found message', () => {
  renderWithRouter(<FavoritePokemon />);
  const page = screen.getByText(/No favorite pokémon found/i);
  expect(page).toBeInTheDocument();
});

test('Test if only favorite pokemons are displayed', async () => {
  renderWithRouter(<App />);
  const pokeDetails = screen.getByRole('link', { name: /More details/i });
  userEvent.click(pokeDetails);

  const favorite = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
  userEvent.click(favorite);

  const pokeFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
  userEvent.click(pokeFavorite);
  const poke = screen.getByText(/pikachu/i);
  expect(poke).toBeInTheDocument();
});
