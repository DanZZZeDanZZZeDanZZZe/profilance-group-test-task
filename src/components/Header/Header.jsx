import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
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
      <button type='button'>Вход</button>
    </header>
  );
};
