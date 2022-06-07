import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { MainPage } from '../MainPage';
import { NewsPage } from '../NewsPage';

import styles from './App.module.scss';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className={styles['page-wrapper']}>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/news' element={<NewsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
