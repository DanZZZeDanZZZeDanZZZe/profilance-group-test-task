import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AppContext } from '../App';

import styles from './Header.module.scss';

export const Header = () => {
  const { authPopUp, auth } = useContext(AppContext);

  return (
    <header className={styles['header']}>
      <nav className={styles['header__nav']}>
        <Link to='/'>
          <img
            src='https://static.tildacdn.com/tild3638-3338-4136-b038-313132306438/Group_640.svg'
            alt='Логотип'
          />
        </Link>
        <Link to='/news'>News</Link>
      </nav>
      {auth.isSuccess ? (
        <button type='button' onClick={auth.close}>
          Выход
        </button>
      ) : (
        <button type='button' onClick={authPopUp.open}>
          Вход
        </button>
      )}
    </header>
  );
};
