import { screen } from '@testing-library/react';
import { React } from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Test if the detail info of the selected pokemon are shown on screen ', () => {
  renderWithRouter(<App />);
  // 1
  const moreDetails = screen.getByRole('link', { name: /More details/i });
  userEvent.click(moreDetails);
  expect(moreDetails).toHaveAttribute('href', '/pokemon/25');
  const pokeDetails = screen.getByRole('heading', { level: 2, name: /Pikachu details/i });
  expect(pokeDetails).toBeInTheDocument();
  expect(moreDetails).not.toBeInTheDocument();

  // 2
  const detailshead = screen.getByRole('heading', { name: 'Summary', level: 2 });
  expect(detailshead).toBeInTheDocument();

  // 3
  const pokeParagraph = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');

  expect(pokeParagraph).toBeInTheDocument();
});

test('Test if exist on the page a section with the maps containing the poke location ', () => {
  renderWithRouter(<App />);
  // 2
  const moreDetails = screen.getByRole('link', { name: /More details/i });
  userEvent.click(moreDetails);
  // 1
  const locationHead = screen.getByRole('heading', { level: 2, name: /game locations of pikachu/i });
  expect(locationHead).toBeInTheDocument();
  // 3
  const firstImg = screen.getByText(/Kanto Viridian Forest/i);
  expect(firstImg).toBeInTheDocument();
  const secondImg = screen.getByText(/Kanto Power Plant/i);
  expect(secondImg).toBeInTheDocument();
  // 4, 5
  const pokeImg = screen.getAllByAltText(/Pikachu location/i);
  expect(pokeImg[0].src).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
  expect(pokeImg[1].src).toBe('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
  expect(pokeImg[0].alt).toBe('Pikachu location');
  expect(pokeImg[1].alt).toBe('Pikachu location');
});

test('Test if the user can mark as favorite a Poke through the detail page: ', () => {
  renderWithRouter(<App />);
  const moreDetails = screen.getByRole('link', { name: /More details/i });
  userEvent.click(moreDetails);

  const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
  userEvent.click(checkbox);

  expect((screen.getByRole('img', { name: /is marked as favorite/i })));
});
