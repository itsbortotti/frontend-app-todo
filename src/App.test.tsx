import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Task Manager heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Task Manager/i);
  expect(headingElement).toBeInTheDocument();
});