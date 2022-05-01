import React from 'react';

/**
 * File based on
 * https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/OverridableComponent.d.ts
 */

/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface UtilsTypes<M extends OverridableTypeMap> {
  <C extends React.ElementType>(props: { as: C } & OverrideProps<M, C>): React.ReactElement | null;
  (props: DefaultComponentProps<M>): React.ReactElement | null;
}

/**
 * Props of the component if `component={Component}` is used.
 */
export type OverrideProps<M extends OverridableTypeMap, C extends React.ElementType> = BaseProps<M> &
  Omit<React.ComponentPropsWithRef<C>, keyof CommonProps>;

/**
 * Props if `component={Component}` is NOT used.
 */
export type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  Omit<React.ComponentPropsWithRef<M['as']>, keyof BaseProps<M>>;

/**
 * Props defined on the component (+ common material-ui props).
 */
// prettier-ignore
export type BaseProps<M extends OverridableTypeMap> =
  & M['props']
  & CommonProps;

/**
 * Props that are valid for material-ui components.
 */
export interface CommonProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface OverridableTypeMap {
  props: {};
  as: React.ElementType;
}

export type ObjectMap<Map extends string, V> = { [K in Map]: V };

export type KV<T = string> = { [key: string]: T };

export type ReactHTMLProps<T = HTMLElement> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

export type ReactState<T = null> = [T, React.Dispatch<React.SetStateAction<T>>];

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type RequiredWithout<T, O extends keyof T = never> = Pick<T, O> & Required<Omit<T, O>>;
