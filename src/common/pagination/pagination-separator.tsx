import React, { memo } from 'react';
import styles from './styles/pagination-separator.module.scss';

export const PaginationSeparator = memo(function PaginationSeparator() {
  return (
    <span className={styles.separator} role="presentation">
      ...
    </span>
  );
});
