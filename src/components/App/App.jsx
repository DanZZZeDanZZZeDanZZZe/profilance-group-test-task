import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { usePopUpState, useAuthState, useNewsState } from '../../hooks';
import { AuthPopUp } from '../AuthPopUp';
import { Header } from '../Header/Header';
import { MainPage } from '../MainPage';
import { NewsPage } from '../NewsPage';

import styles from './App.module.scss';

export const AppContext = React.createContext();

export const App = () => {
  const authPopUp = usePopUpState();
  const auth = useAuthState();
  const news = useNewsState();
  console.log(auth, authPopUp, news);

  return (
    <AppContext.Provider
      value={{
        authPopUp,
        auth,
        news,
      }}
    >
      <BrowserRouter>
        <AuthPopUp />
        <Header />
        <main className={styles['page-wrapper']}>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/news' element={<NewsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
