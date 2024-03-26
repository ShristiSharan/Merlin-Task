import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header in the app', () => {
  render(<App />);
  const headerElement = screen.getByText(/header text/i);
  expect(headerElement).toBeInTheDocument();
});
