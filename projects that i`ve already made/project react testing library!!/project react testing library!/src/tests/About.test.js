import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

test('Test if the page contains the pokedex infos ', () => {
  renderWithRouter(<About />);
  const aboutInfo = screen.getByText(/about Pokédex/i);
  expect(aboutInfo).toBeInTheDocument();
});

test('Test if the page contains an H2 heading with the text "about pokédex" ', () => {
  renderWithRouter(<About />);
  const aboutText = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
  expect(aboutText).toBeInTheDocument();
});

test('Test if the page contains 2 paragraphs with the text about pokedex ', () => {
  renderWithRouter(<About />);
  const aboutPara1 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
  const aboutPara2 = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
  expect(aboutPara1).toBeInTheDocument();
  expect(aboutPara2).toBeInTheDocument();
});

test('Test if the page contains a pokedex image', () => {
  renderWithRouter(<About />);
  const aboutImage = screen.getByRole('img', { name: /Pokédex/i });
  expect(aboutImage.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
