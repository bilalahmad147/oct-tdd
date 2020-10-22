import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render hello world', () => {
  const getText = render(<App />);
  const headingElement = getText.getByText(/hello world/i);
  expect(headingElement).toBeInTheDocument();
})

