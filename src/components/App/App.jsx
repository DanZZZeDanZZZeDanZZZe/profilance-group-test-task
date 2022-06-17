import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { usePopUpState, useAuthState } from '../../hooks';
import { Header } from '../Header/Header';
import { MainPage } from '../MainPage';
import { NewsPage } from '../NewsPage';

import styles from './App.module.scss';

export const AppContext = React.createContext();

export const App = () => {
  const authPopUp = usePopUpState();
  const auth = useAuthState();
  console.log(auth, authPopUp);

  return (
    <AppContext.Provider
      value={{
        authPopUp,
        auth,
      }}
    >
      <BrowserRouter>
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
