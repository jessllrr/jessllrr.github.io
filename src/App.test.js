import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text on page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home Page/i);
  expect(linkElement).toBeInTheDocument();
});
