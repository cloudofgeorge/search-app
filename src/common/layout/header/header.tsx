import React from 'react';
import { Logo } from '../../logo';
import { Search } from '../../../features/search';

export const Header: React.FC = () => (
  <header className="block w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10 sm:flex-col">
        <div className="flex justify-start sm:mb-5">
          <Logo />
        </div>
        <Search />
      </div>
    </div>
  </header>
);
