import { screen } from '@testing-library/react';
import { React } from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Test if a card is rendered with pokemons infos" ', () => {
  renderWithRouter(<App />);
  const pokeName = screen.getByTestId('pokemon-name');
  expect(pokeName).toHaveTextContent(/pikachu/i);
  const pokeType = screen.getByTestId('pokemon-type');
  expect(pokeType).toHaveTextContent(/electric/i);
  const pokeweight = screen.getByTestId('pokemon-weight');
  expect(pokeweight).toHaveTextContent(/Average weight: 6.0 kg/i);
  const pokeImg = screen.getByRole('img', { name: /pikachu sprite/i });
  expect(pokeImg).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  expect(pokeImg).toBeInTheDocument();
});

test('Test if a card contains a navigation link with the poke details and if the redirecting works" ', () => {
  renderWithRouter(<App />);
  const moreDetails = screen.getByRole('link', { name: /More details/i });
  userEvent.click(moreDetails);
  expect(moreDetails).toHaveAttribute('href', '/pokemon/25'); // link deve possuir a URL -href="/pokemon/25"Jest
  const pokeDetails = screen.getByRole('heading', { level: 2, name: /Pikachu details/i });
  expect(pokeDetails).toBeInTheDocument(); // Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver;
});

test('Test if exist a star icon on favorite pokemons" ', () => {
  renderWithRouter(<App />);
  const moreDetails = screen.getByRole('link', { name: /More details/i });
  userEvent.click(moreDetails);
  const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
  userEvent.click(checkbox);
  expect((screen.getByRole('img', { name: /is marked as favorite/i }))).toHaveAttribute('src', '/star-icon.svg');
});
