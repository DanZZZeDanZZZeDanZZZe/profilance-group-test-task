import React from 'react';

import styles from './PopUp.module.scss';
import commonStyles from '../../common-styles.module.scss';

export const PopUp = ({ onClose, children }) => {
  return (
    <div className={styles['pop-up']}>
      <div
        className={`${commonStyles['project-box']} ${styles['pop-up__wrapper']}`}
      >
        <div className={styles['pop-up__header']}>
          <button
            type='button'
            className={commonStyles['project-button']}
            onClick={onClose}
          >
            Закрыть
          </button>
        </div>
        <div className={styles['pop-up__content']}>{children}</div>
      </div>
    </div>
  );
};
