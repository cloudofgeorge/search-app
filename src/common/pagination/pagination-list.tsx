import React from 'react';
import clsx from 'clsx';
import styles from './styles/pagination-list.module.scss';
import { PaginationListProps, PaginationListItemProps } from './types';

export const PaginationList: React.FC<PaginationListProps> = ({ children, className }) => (
  <ul className={clsx(styles.list, className)} data-testid="pagination-list">
    {children}
  </ul>
);

export const PaginationListItem: React.FC<PaginationListItemProps> = ({ children, className }) => (
  <li
    className={clsx(styles.listItem, className)}
    itemProp="itemListElement"
    itemScope
    itemType="http://schema.org/ListItem"
    data-testid="pagination-list-item">
    {children}
  </li>
);
