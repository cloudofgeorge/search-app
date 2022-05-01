import React, { useState } from 'react';
import { Input } from '../../common/input';
import { Button } from '../../common/button';
import { useUrlController } from '../../common/url-controller';

export const Search: React.FC = () => {
  const [searchState, setSearchState] = useState('');
  const { setQuery } = useUrlController();

  const setSearchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchState(value);
  };

  const doSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery({ search: searchState });
  };

  return (
    <form
      className="max-w-xs w-full relative"
      itemProp="potentialAction"
      itemScope
      itemType="https://schema.org/SearchAction"
      role="search"
      aria-label="Search"
      onSubmit={doSearch}>
      <Input name="searchValue" placeholder="Find users" value={searchState} onChange={setSearchHandle} />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button disabled={!searchState} tabIndex={0} type="submit" role="button">
          Search
        </Button>
      </div>
    </form>
  );
};
