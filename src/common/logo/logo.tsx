import React from 'react';
import { UsersIcon } from '@heroicons/react/solid';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-2xl">Search app</span>
      <UsersIcon className="h-6 w-6" aria-hidden="true" />
    </div>
  );
};
