import { React } from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('test if the application contains navigation set links', () => {
  renderWithRouter(<App />);
  const links = screen.getAllByRole('link');

  expect(links[0].textContent).toBe('Home');
  expect(links[1].textContent).toBe('About');
  expect(links[2].textContent).toBe('Favorite Pokémon');
});

test('Test if the application is redirecting the page to "/" when you click on the home button ', () => {
  const { history } = renderWithRouter(<App />);
  const links = screen.getAllByRole('link');
  const home = links[0];
  userEvent.click(home);
  expect(history.location.pathname).toBe('/');
});

test('Test if the application is redirecting the page "about" to "/about" when you click on the link in the navigation bar ', () => {
  const { history } = renderWithRouter(<App />);
  const links = screen.getAllByRole('link');
  const about = links[1];
  userEvent.click(about);
  expect(history.location.pathname).toBe('/about');
});

test('Test if the application is redirecting to the favorite pokemons page in the "/favorites" URL when you click on the link in the navigation bar ', () => {
  const { history } = renderWithRouter(<App />);
  const links = screen.getAllByRole('link');
  const favorites = links[2];
  userEvent.click(favorites);
  expect(history.location.pathname).toBe('/favorites');
});

test('Test if the application is redirecting to "page not found" when entered in a unknown URL', async () => {
  const { history } = renderWithRouter(<App />);
  await act(async () => history.push('/Not-found'));
  const page = screen.getByText('Page requested not found');
  expect(page).toBeInTheDocument();
});
