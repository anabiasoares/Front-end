import { screen } from '@testing-library/react';
import { React } from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Test if the page contains an H2 heading with the text "Page requested not found" ', () => {
  renderWithRouter(<App />);
  const pokehead = screen.getByRole('heading', { name: /Encountered Pokémon/i, level: 2 });
  expect(pokehead).toBeInTheDocument();
});

test('Test if is displayed the next pokemon on the list when you click on the next pokemon button" ', () => {
  renderWithRouter(<App />);
  const nextpoke = screen.getByRole('button', { name: /Próximo Pokémon/i });
  userEvent.click(nextpoke);
  const char = screen.getByText(/charmander/i);
  expect(char).toBeInTheDocument();
});

test('Test if is displayed only one pokemon at the time" ', () => {
  renderWithRouter(<App />);
  const poke = screen.getByText(/pikachu/i);
  const char = screen.queryByText(/charmander/i);
  expect(poke).toBeInTheDocument();
  expect(char).not.toBeInTheDocument();
});

test('Test if pokedex has filter buttons" ', () => {
  renderWithRouter(<App />);
  const filterBnt = screen.getAllByTestId('pokemon-type-button');
  expect(filterBnt).toBeDefined();
  const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
  expect(filterBnt.length).toBe(types.length);
});

test('Test if pokedex has reset button to reset filter" ', () => {
  renderWithRouter(<App />);

  const btn = screen.getByRole('button', { name: 'All' });
  expect(btn).toBeInTheDocument();

  const fireBnt = screen.getByRole('button', { name: 'Fire' });
  userEvent.click(fireBnt);
  const char = screen.getByText(/Charmander/i);
  expect(char).toBeInTheDocument();
  userEvent.click(btn);
  const poke = screen.getByText(/Pikachu/i);
  expect(poke).toBeInTheDocument();
});
