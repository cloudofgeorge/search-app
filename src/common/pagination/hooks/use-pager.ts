import { useCallback, useMemo } from 'react';

enum ElementTypes {
  previous = 'PREVIOUS',
  page = 'PAGE',
  separator = 'SEPARATOR',
  next = 'NEXT',
}

export type Pager = {
  totalPages: number;
  items: PaginateItem[];
  types: typeof ElementTypes;
  prevButton: PaginateItem;
  nextButton: PaginateItem;
};

export type PaginateItem = {
  type: ElementTypes;
  page: number;
  active: boolean;
  disabled?: boolean;
};

export const usePager = (
  totalItems: number,
  itemsPerPage = 10,
  currentPage: number,
  boundary = 1,
  neighbors = 1
): Pager => {
  const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage]);

  const getRange = useCallback((start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, index) => start + index);
  }, []);

  const startPages = getRange(1, Math.min(boundary, totalPages));
  const endPages = getRange(Math.max(totalPages - boundary + 1, boundary + 1), totalPages);

  const neighborStart = useMemo(
    () => Math.max(Math.min(currentPage - neighbors, totalPages - boundary - neighbors * 2 - 1), boundary + 2),
    [boundary, currentPage, neighbors, totalPages]
  );

  const neighborEnd = useMemo(
    () => Math.min(Math.max(currentPage + neighbors, boundary + neighbors * 2 + 2), endPages[0] - 2),
    [boundary, currentPage, endPages, neighbors]
  );

  const buttonPage = useCallback(
    (type: ElementTypes): number | null => {
      switch (type) {
        case ElementTypes.previous:
          return currentPage - 1;

        case ElementTypes.next:
          return currentPage + 1;

        default:
          return null;
      }
    },
    [currentPage]
  );

  const structure = useMemo(() => {
    let data = [ElementTypes.previous, ...startPages];

    if (neighborStart > boundary + 2) {
      data.push(ElementTypes.separator);
    } else if (boundary + 1 < totalPages - boundary) {
      data.push(boundary + 1);
    }

    data.push(...getRange(neighborStart, neighborEnd));

    if (neighborEnd < totalPages - boundary - 1) {
      data.push(ElementTypes.separator);
    } else if (totalPages - boundary > boundary) {
      data.push(totalPages - boundary);
    }

    data.push(...[...endPages, ElementTypes.next]);

    return data;
  }, [boundary, endPages, getRange, neighborEnd, neighborStart, startPages, totalPages]);

  const items = useMemo(
    () =>
      structure.map(item => {
        if (typeof item === 'number') {
          return {
            type: ElementTypes.page,
            page: item,
            active: item === currentPage,
          };
        }

        return {
          type: item,
          page: buttonPage(item),
          active: false,
          disabled:
            (item === ElementTypes.previous && currentPage === 1) ||
            (item === ElementTypes.next && currentPage === totalPages),
        };
      }),
    [structure, buttonPage, currentPage, totalPages]
  );

  const findButton = useCallback(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (value: ElementTypes) => items.find(item => item.type === ElementTypes[value]),
    [items]
  );

  const prevButton = findButton(<ElementTypes>'previous');
  const nextButton = findButton(<ElementTypes>'next');

  return <Pager>{
    items,
    totalPages,
    types: ElementTypes,
    prevButton,
    nextButton,
  };
};
