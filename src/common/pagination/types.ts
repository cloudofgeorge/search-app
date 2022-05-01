import { ReactHTMLProps } from '../../utils';
import { ButtonProps } from '../button';

export type ItemCallback = (page: number) => JSX.Element;

export type PaginationProps = ReactHTMLProps & {
  itemsCount: number;
  itemsPerPage: number;
  currentPage: number;
  item: ItemCallback;
  itemPrev?: ItemCallback;
  itemNext?: ItemCallback;
  itemNextMobile?: ItemCallback;
  hidePrev?: boolean;
  hideNext?: boolean;
  hideNextMobile?: boolean;
  prevText?: string;
  nextText?: string;
};

export type PaginationItemProps = ButtonProps & {
  active?: boolean;
};

export type PaginationListProps = ReactHTMLProps<HTMLUListElement>;

export type PaginationListItemProps = ReactHTMLProps<HTMLLIElement>;
