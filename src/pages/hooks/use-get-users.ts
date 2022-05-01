import { useEffect, useState } from 'react';
import { api } from '../../api';
import { useUrlController } from '../../common/url-controller';
import { Users } from '../../models/users';

type URLController = { search: string; page: number };

export const useGetUsers = () => {
  const { currentQueriesString, currentQueries, setQuery } = useUrlController<URLController>();
  const [response, setResponse] = useState<Users | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const refetch = async () => {
    try {
      setLoading(true);
      const data = await api.get<Users>(
        `https://api.github.com/search/users?q=${currentQueries.search} in:login&per_page=9&page=${
          currentQueries.page || 1
        }`
      );
      setResponse(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentQueries) {
      if (currentQueries.page) {
        setPage(Number(currentQueries.page));
      } else {
        setPage(1);
      }

      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQueriesString]);

  const setPageHandler = (value: number) => {
    setPage(value);

    setQuery({ ...currentQueries, page: value });
  };

  return {
    response,
    loading,
    error,
    refetch,
    page,
    setPage: setPageHandler,
  };
};
