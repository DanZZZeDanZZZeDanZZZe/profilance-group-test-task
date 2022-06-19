import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AppContext } from '../App';

import styles from './Header.module.scss';
import commonStyles from '../../common-styles.module.scss';
console.log(commonStyles);

export const Header = () => {
  const { authPopUp, auth } = useContext(AppContext);

  return (
    <header className={styles['header']}>
      <nav className={styles['header__nav']}>
        <Link to='/'>
          <img
            src='https://static.tildacdn.com/tild3638-3338-4136-b038-313132306438/Group_640.svg'
            alt='Логотип'
            className={styles['header__logo']}
          />
        </Link>
        <Link to='/news'>News</Link>
      </nav>
      {auth.isSuccess ? (
        <button
          type='button'
          className={styles['header__auth-button']}
          onClick={auth.close}
        >
          Выход
        </button>
      ) : (
        <button
          type='button'
          className={styles['header__auth-button']}
          onClick={authPopUp.open}
        >
          Вход
        </button>
      )}
    </header>
  );
};
