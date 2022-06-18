import React, { useContext } from 'react';
import { AppContext } from '../App';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  const { auth } = useContext(AppContext);

  return (
    <>
      <div className={styles['main-page']}>
        <h1>{auth.isSuccess ? `привет ${auth.login}` : 'привет гость'}</h1>
      </div>
    </>
  );
};
