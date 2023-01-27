import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

test('Test if the page contains an H2 heading with the text "Page requested not found" ', () => {
  renderWithRouter(<NotFound />);
  const pagehead = screen.getByRole('heading', { name: /Page requested not found/i, level: 2 });
  expect(pagehead).toBeInTheDocument();
});

test('Test if the page contains a pokedex image', () => {
  renderWithRouter(<NotFound />);
  const pageImage = screen.getByRole('img', { name: /Pikachu crying because the page requested was not found/i });
  expect(pageImage.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
