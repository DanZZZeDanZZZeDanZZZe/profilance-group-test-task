import React from 'react';

import styles from './PopUp.module.scss';

export const PopUp = ({ onClose, children }) => {
  return (
    <div className={styles['pop-up']}>
      <div className={styles['pop-up__wrapper']}>
        <div className={styles['pop-up__header']}>
          <button type='button' onClick={onClose}>
            Закрыть
          </button>
        </div>
        <div className={styles['pop-up__content']}>{children}</div>
      </div>
    </div>
  );
};
