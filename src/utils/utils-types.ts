import React from 'react';

export type KV<T = string> = { [key: string]: T };

export type ReactHTMLProps<T = HTMLElement> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

export type ReactState<T = null> = [T, React.Dispatch<React.SetStateAction<T>>];
