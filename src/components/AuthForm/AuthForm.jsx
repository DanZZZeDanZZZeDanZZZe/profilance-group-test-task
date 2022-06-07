import React from 'react';

import styles from './AuthForm.module.scss';

export const AuthForm = ({ handleAuthData }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleAuthData({
      login: e.target.login.value,
      password: e.target.password.value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor='login'>Login</label>
        <input type='login' name='login' placeholder='login' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' placeholder='password' />
      </div>
      <button className='primary'>Войти</button>
    </form>
  );
};
