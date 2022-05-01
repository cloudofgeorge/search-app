import { useContext, useEffect } from 'react';
import { UrlControllerContext } from '../url-controller-context';

export const useUrlController = <Queries extends {} = {}>() => {
  const context = useContext(UrlControllerContext);
  const [queryState, setQueryState] = context.queryStateWorker;

  const currentQueriesString = queryState ? new URLSearchParams(queryState).toString() : null;

  useEffect(() => {
    const result = getQuery();
    setQueryState(result);
  }, [setQueryState]);

  const setQuery = <Data extends {} = {}>(data: Data) => {
    const params = new URLSearchParams(data).toString();

    const url = new URL(window.location.protocol + '//' + window.location.host + window.location.pathname);
    const resultUrl = `${url}?${params}`;

    window.history.pushState({}, '', resultUrl);

    setQueryState(data);
  };

  const getQuery = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramsObj = Object.fromEntries(searchParams);
    const paramsLength = Object.keys(paramsObj).length;
    return paramsLength !== 0 ? paramsObj : null;
  };

  return { currentQueries: queryState as Queries, currentQueriesString, setQuery };
};
