import React from 'react';
import { Pagination, PaginationItem } from '../../common/pagination';
import { Users } from '../../models/users';
import { NoResults } from './no-results';
import { ResultsItem } from './results-item';

type ResultsProps = {
  data?: Users | null;
  currentPage: number;
  changePage: (value: number) => void;
};

export const Results: React.FC<ResultsProps> = ({ data, currentPage, changePage }) => {
  if (!data?.total_count) {
    return <NoResults />;
  }

  return (
    <div className="mb-10">
      {data.items.map(item => (
        <ResultsItem key={item.id} {...item} />
      ))}
      <Pagination
        itemsCount={data.total_count}
        itemsPerPage={9}
        currentPage={currentPage}
        item={value => <PaginationItem onClick={() => changePage(value)}>{value}</PaginationItem>}
      />
    </div>
  );
};
