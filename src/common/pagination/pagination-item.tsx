import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Button } from '../button';
import styles from './styles/pagination-item.module.scss';
import { PaginationItemProps } from './types';

export const PaginationItem = React.forwardRef<HTMLElement, PaginationItemProps>(function PaginationItem(
  { children, active, className, ...props },
  ref
) {
  const paginationItemClass = useMemo(
    () => clsx(styles.paginationItem, { 'bg-30': active }, className),
    [active, className]
  );

  return (
    <Button ref={ref as never} className={paginationItemClass} {...(active && { 'aria-current': 'page' })} {...props}>
      {children}
    </Button>
  );
});
