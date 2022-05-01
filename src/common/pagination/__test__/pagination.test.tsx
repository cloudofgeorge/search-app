import React from 'react';
import { render } from '@testing-library/react';
import { Pagination } from '../pagination';
import { PaginationItem } from '../pagination-item';

describe('<Pagination />', () => {
  it('Should renders', () => {
    const testRenderer = render(
      <Pagination
        itemsCount={500}
        itemsPerPage={25}
        currentPage={1}
        item={value => <PaginationItem>{value}</PaginationItem>}>
        Content
      </Pagination>
    );

    expect(testRenderer).toBeDefined();
  });

  it('Should return null if itemsCount not enough and pages less than 2', () => {
    const testRenderer = render(
      <Pagination
        itemsCount={10}
        itemsPerPage={25}
        currentPage={1}
        item={value => <PaginationItem>{value}</PaginationItem>}>
        Content
      </Pagination>
    );

    expect(testRenderer.container.firstChild).toBeNull();
  });
});
