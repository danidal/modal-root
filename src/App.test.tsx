import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders click me button', () => {
    const { getByText } = render(<App />);
    const buttonElement = getByText('Click me!');
    expect(buttonElement).toBeInTheDocument();
  });
});
