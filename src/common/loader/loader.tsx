import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex justify-center py-6 md:space-x-10">
      <img src={process.env.PUBLIC_URL + '/img/rings.svg'} alt="" />
    </div>
  );
};
