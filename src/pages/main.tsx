import React from 'react';
import { Results } from '../features/results';
import { Loader } from '../common/loader';
import { useGetUsers } from './hooks/use-get-users';

export const MainPage = () => {
  const { loading, response, page, setPage } = useGetUsers();

  if (loading) {
    return <Loader />;
  }

  return <Results data={response} currentPage={page} changePage={setPage as () => void} />;
};
