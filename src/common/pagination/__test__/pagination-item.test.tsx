import React from 'react';
import { render } from '@testing-library/react';
import { PaginationItem } from '../pagination-item';

describe('<PaginationItem />', () => {
  it('Should renders', () => {
    const result = render(<PaginationItem />);

    expect(result).toBeDefined();
  });
});
