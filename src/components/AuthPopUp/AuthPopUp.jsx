import React, { useContext } from 'react';
import { PopUp } from '../PopUp';
import { AppContext } from '../App';
import commonStyles from '../../common-styles.module.scss';
import styles from './AuthPopUp.module.scss';

export const AuthPopUp = () => {
  const { authPopUp, auth } = useContext(AppContext);

  if (!authPopUp.isShow) {
    return null;
  }

  if (auth.isSuccess) {
    authPopUp.close();
    return null;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    auth.tryAuth({
      login: e.target.login.value,
      password: e.target.password.value,
    });
  };

  return (
    <PopUp
      onClose={() => {
        authPopUp.close();
        auth.reset();
      }}
    >
      {auth.errorMessage}
      <form onSubmit={onSubmit}>
        <div className={styles['auth-form__login-field']}>
          <label htmlFor='login'>Login: </label>
          <input
            type='login'
            name='login'
            placeholder='login'
            className={commonStyles['project-input']}
          />
        </div>
        <div className={styles['auth-form__password-field']}>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            placeholder='password'
            className={commonStyles['project-input']}
          />
        </div>
        <button
          className={`${commonStyles['project-button']} ${styles['auth-form__submit-button']}`}
        >
          Войти
        </button>
      </form>
    </PopUp>
  );
};
