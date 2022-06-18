import React, { useContext } from 'react';
import { AppContext } from '../App';
import { AuthPopUp } from '../AuthPopUp';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  const { auth } = useContext(AppContext);

  return (
    <>
      <AuthPopUp />
      <div className={styles['main-page']}>
      </div>
    </>
  );
};
