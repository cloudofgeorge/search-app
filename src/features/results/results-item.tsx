import React from 'react';

type ResultsItemProps = {
  avatar_url: string;
  login: string;
  type: string;
};

export const ResultsItem: React.FC<ResultsItemProps> = ({ avatar_url, login, type }) => {
  return (
    <div className="flex w-full mb-10 pb-4 border-b-2 border-50 items-center">
      <div>
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={avatar_url} width="40" />
      </div>
      <div className="pl-10 pr-10">{login}</div>
      <div className="ml-auto">{type}</div>
    </div>
  );
};
