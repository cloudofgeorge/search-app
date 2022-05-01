import React from 'react';

export const Main: React.FC = ({ children }) => (
  <main className="block w-full pt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
  </main>
);
