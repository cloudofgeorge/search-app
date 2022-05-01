import { useEffect, useState } from 'react';
import { Api, api, ApiRequestConfig } from '../api';

type RequestType = keyof Pick<Api, 'put' | 'get' | 'post'>;

export const useApi = <Response = unknown, Data extends {} = {}>(
  type: RequestType,
  url: string,
  data: Data,
  config?: ApiRequestConfig | undefined
) => {
  const [response, setResponse] = useState<Response | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api[type]<Response>(url, data, config);
        setResponse(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, url, data, config]); // execute once only

  return { response, error, loading };
};
