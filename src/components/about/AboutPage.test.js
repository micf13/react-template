import { render, screen } from '@testing-library/react';
import AboutPage from "./AboutPage";

test('renders about page', () => {
  render(<AboutPage />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
