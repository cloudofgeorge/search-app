import { renderHook } from '@testing-library/react-hooks';
import { Pager, usePager } from '../use-pager';

type PagerPropsObj = { totalItems: number; itemsPerPage: number; currentPage: number };

describe('usePager', () => {
  it('should return full structure', () => {
    const { result } = renderHook(() => usePager(900, 30, 1));

    expect(result.current).toMatchObject({
      items: [
        { active: false, disabled: true, page: 0, type: 'PREVIOUS' },
        { active: true, page: 1, type: 'PAGE' },
        { active: false, page: 2, type: 'PAGE' },
        { active: false, page: 3, type: 'PAGE' },
        { active: false, page: 4, type: 'PAGE' },
        { active: false, page: 5, type: 'PAGE' },
        { active: false, disabled: false, page: null, type: 'SEPARATOR' },
        { active: false, page: 30, type: 'PAGE' },
        { active: false, disabled: false, page: 2, type: 'NEXT' },
      ],
      totalPages: 30,
      types: { next: 'NEXT', page: 'PAGE', previous: 'PREVIOUS', separator: 'SEPARATOR' },
    });
  });

  it('should return totalPages', () => {
    const hook = renderHook<PagerPropsObj, Pager>(
      ({ totalItems, itemsPerPage, currentPage }) => usePager(totalItems, itemsPerPage, currentPage ?? 1),
      { initialProps: { totalItems: 900, itemsPerPage: 30, currentPage: 1 } }
    );

    expect(hook.result.current.totalPages).toEqual(30);

    hook.rerender({ totalItems: 100, currentPage: 1, itemsPerPage: 10 });

    expect(hook.result.current.totalPages).toEqual(10);
  });

  it('should return types', () => {
    const { result } = renderHook(() => usePager(900, 30, 1));

    expect(result.current.types).toMatchObject({
      next: 'NEXT',
      page: 'PAGE',
      previous: 'PREVIOUS',
      separator: 'SEPARATOR',
    });
  });

  it('should return items', () => {
    const hook = renderHook<PagerPropsObj, Pager>(
      ({ totalItems, itemsPerPage, currentPage }) => usePager(totalItems, itemsPerPage, currentPage ?? 1),
      { initialProps: { totalItems: 900, itemsPerPage: 30, currentPage: 1 } }
    );

    expect(hook.result.current.items).toMatchObject([
      { active: false, disabled: true, page: 0, type: 'PREVIOUS' },
      { active: true, page: 1, type: 'PAGE' },
      { active: false, page: 2, type: 'PAGE' },
      { active: false, page: 3, type: 'PAGE' },
      { active: false, page: 4, type: 'PAGE' },
      { active: false, page: 5, type: 'PAGE' },
      { active: false, disabled: false, page: null, type: 'SEPARATOR' },
      { active: false, page: 30, type: 'PAGE' },
      { active: false, disabled: false, page: 2, type: 'NEXT' },
    ]);

    hook.rerender({ totalItems: 80, currentPage: 1, itemsPerPage: 30 });

    expect(hook.result.current.items).toMatchObject([
      { type: 'PREVIOUS', page: 0, active: false, disabled: true },
      { type: 'PAGE', page: 1, active: true },
      { type: 'PAGE', page: 2, active: false },
      { type: 'PAGE', page: 3, active: false },
      { type: 'NEXT', page: 2, active: false, disabled: false },
    ]);

    hook.rerender({ totalItems: 30, currentPage: 1, itemsPerPage: 30 });

    expect(hook.result.current.items).toMatchObject([
      { type: 'PREVIOUS', page: 0, active: false, disabled: true },
      { type: 'PAGE', page: 1, active: true },
      { type: 'NEXT', page: 2, active: false, disabled: true },
    ]);
  });

  it('should return item with active property from currentPage prop', () => {
    const hook = renderHook<PagerPropsObj, Pager>(
      ({ totalItems, itemsPerPage, currentPage }) => usePager(totalItems, itemsPerPage, currentPage ?? 1),
      { initialProps: { totalItems: 900, itemsPerPage: 30, currentPage: 1 } }
    );

    expect(hook.result.current.items[1].active).toBeTruthy();

    hook.rerender({ totalItems: 900, itemsPerPage: 30, currentPage: 2 });

    expect(hook.result.current.items[2].active).toBeTruthy();
  });

  it('should return item with PREVIOUS and NEXT', () => {
    const hook = renderHook<PagerPropsObj, Pager>(
      ({ totalItems, itemsPerPage, currentPage }) => usePager(totalItems, itemsPerPage, currentPage ?? 1),
      { initialProps: { totalItems: 900, itemsPerPage: 30, currentPage: 1 } }
    );

    expect(hook.result.current.items[0]).toMatchObject({
      type: 'PREVIOUS',
      page: 0,
      active: false,
      disabled: true,
    });

    expect(hook.result.current.items[8]).toMatchObject({
      type: 'NEXT',
      page: 2,
      active: false,
      disabled: false,
    });

    hook.rerender({ totalItems: 30, currentPage: 1, itemsPerPage: 30 });

    expect(hook.result.current.items[0]).toMatchObject({
      type: 'PREVIOUS',
      page: 0,
      active: false,
      disabled: true,
    });

    expect(hook.result.current.items[2]).toMatchObject({
      type: 'NEXT',
      page: 2,
      active: false,
      disabled: true,
    });
  });
});
