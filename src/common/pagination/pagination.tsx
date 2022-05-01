import React, { Fragment, ReactChild, ReactNode, useCallback, useMemo } from 'react';
import clsx from 'clsx';
import styles from './styles/pagination.module.scss';
import { ItemCallback, PaginationItemProps, PaginationProps } from './types';
import { PaginationList, PaginationListItem } from './pagination-list';
import { PaginationSeparator } from './pagination-separator';
import { usePager } from './hooks';

/**
 * `<Pagination />` Component for switching of pages
 *
 * @example ``` tsx
 * <Pagination
 *  itemsCount="100"
 *  itemsPerPage="30"
 *  currentPage="1"
 *  item={value => <PaginationItem onClick={() => {}}>{value}</PaginationItem>}
 * />
 * ```
 */
export const Pagination: React.FC<PaginationProps> = ({
  className = '',
  itemsCount,
  itemsPerPage,
  currentPage,
  item,
  itemPrev,
  itemNext,
  itemNextMobile,
  hidePrev,
  hideNext,
  hideNextMobile,
  prevText = 'Prev',
  nextText = 'Next',
  ...props
}) => {
  const { items, totalPages, types, nextButton } = usePager(itemsCount, itemsPerPage, currentPage);

  const paginationClass = useMemo(() => clsx(styles.pagination, className), [className]);
  const pusherByPages = useMemo(() => totalPages <= 4, [totalPages]);
  const listClass = useMemo(
    () => clsx(styles.list, pusherByPages ? styles.center : styles.spaceBetween),
    [pusherByPages]
  );
  const pageItemClass = useMemo(() => clsx(styles.listItem, pusherByPages ? styles.toMargin : ''), [pusherByPages]);

  const getElement = useCallback(
    (
      element: React.ReactElement<ItemCallback & { children?: ReactChild }>,
      itemProps: PaginationItemProps = {},
      child?: ReactNode
    ) =>
      React.cloneElement(
        element as React.ReactElement<ItemCallback>,
        { ...itemProps, ...element.props },
        child ?? element.props.children
      ),
    []
  );

  if (totalPages < 2) {
    return null;
  }

  return (
    <nav className={paginationClass} role="navigation" data-testid="pagination" {...props}>
      <PaginationList className={listClass}>
        {items.map((pageItem, index) => (
          // Disabled rule because we need a special key and we don't have any ids
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={index}>
            {/* Common page */}
            {pageItem.type === types.page && (
              <PaginationListItem className={pageItemClass}>
                {getElement(item(pageItem.page), { active: pageItem.active })}
              </PaginationListItem>
            )}

            {/* Previous page */}
            {pageItem.type === types.previous && (
              <PaginationListItem
                className={clsx(styles.controlDesktop, {
                  [styles.hiddenElement]: pageItem.disabled || hidePrev,
                })}>
                {getElement(
                  itemPrev ? itemPrev(pageItem.page) : item(pageItem.page),
                  { 'aria-label': 'Перейти к предыдущей странице', className: styles.controlDesktop },
                  itemPrev ? undefined : prevText
                )}
              </PaginationListItem>
            )}

            {/* Next page */}
            {pageItem.type === types.next && (
              <PaginationListItem
                className={clsx(styles.controlDesktop, {
                  [styles.hiddenElement]: pageItem.disabled || hideNext,
                })}>
                {getElement(
                  itemNext ? itemNext(pageItem.page) : item(pageItem.page),
                  { 'aria-label': 'Next page' },
                  itemNext ? undefined : nextText
                )}
              </PaginationListItem>
            )}

            {/* Separator */}
            {pageItem.type === types.separator && (
              <PaginationListItem>
                <PaginationSeparator />
              </PaginationListItem>
            )}
          </Fragment>
        ))}
      </PaginationList>

      {/* Mobile next button */}
      <div
        className={clsx(styles.controlMobileBlock, {
          [styles.hiddenElement]: nextButton?.disabled || hideNextMobile,
        })}>
        {getElement(
          itemNextMobile ? itemNextMobile(nextButton?.page ?? 0) : item(nextButton?.page ?? 0),
          { 'aria-label': 'Next page' },
          itemNextMobile ? undefined : nextText
        )}
      </div>
    </nav>
  );
};
