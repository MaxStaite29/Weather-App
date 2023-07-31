import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Weather App H1 element', () => {
  render(<App />);
  const H1Element = screen.getByText(/Weather App/i);
  expect(H1Element).toBeInTheDocument();
});
