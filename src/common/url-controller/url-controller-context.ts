import { createContext } from 'react';
import { ReactState } from '../../utils';

type UrlControllerContextProps<T extends {} = {}> = {
  queryStateWorker: ReactState<T | null>;
};

export const UrlControllerContext = createContext<UrlControllerContextProps>({
  queryStateWorker: [null, () => {}],
});
