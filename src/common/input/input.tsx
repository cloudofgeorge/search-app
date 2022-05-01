import React from 'react';
import clsx from 'clsx';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {};

export const Input: React.FC<Props> = ({ className, type = 'text', ...props }) => (
  <input
    type={type}
    className={clsx(
      'border border-40 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
      className
    )}
    {...props}
  />
);
