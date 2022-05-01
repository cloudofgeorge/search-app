import React, { useState } from 'react';
import { UrlControllerContext } from './url-controller-context';

export const UrlController: React.FC = ({ children }) => {
  const queryStateWorker = useState<{} | null>(null);

  return <UrlControllerContext.Provider value={{ queryStateWorker }}>{children}</UrlControllerContext.Provider>;
};
