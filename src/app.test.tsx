import React from 'react';
import { render } from '@testing-library/react';
import { App } from './app';

test('renders learn react link', () => {
  const result = render(<App />);
  expect(result).toBeDefined();
});
