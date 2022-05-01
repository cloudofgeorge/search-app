import React from 'react';

import './styles/index.scss';

import { MainPage } from './pages/main';
import { Header, Main } from './common/layout';
import { UrlController } from './common/url-controller';

export const App = () => {
  return (
    <UrlController>
      <Header />
      <Main>
        <MainPage />
      </Main>
    </UrlController>
  );
};
