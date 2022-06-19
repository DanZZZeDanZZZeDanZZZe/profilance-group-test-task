import React, { useContext } from 'react';
import { usePopUpState } from '../../hooks';
import { AppContext } from '../App';

import styles from './NewsPage.module.scss';
import commonStyles from '../../common-styles.module.scss';

import { PopUp } from '../PopUp';

const AddNewsContols = ({ addNewsHandler }) => {
  const popUp = usePopUpState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewsHandler({
      title: e.target.title.value,
      text: e.target.text.value,
    });
    popUp.close();
  };

  return (
    <>
      {popUp.isShow && (
        <PopUp onClose={popUp.close}>
          <form onSubmit={onSubmitHandler}>
            <div className={styles['add-news-form__title-field']}>
              <label htmlFor='title'>title</label>
              <input
                type='title'
                name='title'
                placeholder='title'
                className={commonStyles['project-input']}
              />
            </div>
            <div className={styles['add-news-form__text-field']}>
              <label htmlFor='text'>text</label>
              <input
                type='text'
                name='text'
                placeholder='text'
                className={commonStyles['project-input']}
              />
            </div>
            <button
              className={`${commonStyles['project-button']} ${styles['add-news-form__submit-button']}`}
            >
              Добавить новость
            </button>
          </form>
        </PopUp>
      )}
      <button
        type='button'
        className={`${commonStyles['project-button']} ${styles['news-page__add-button']}`}
        onClick={popUp.open}
      >
        Добавить новость
      </button>
    </>
  );
};

export const NewsPage = () => {
  const { auth, news } = useContext(AppContext);

  const showedNews =
    auth.isAdmin || auth.isUser ? news.allContent : news.acceptedContent;

  return (
    <div className={styles['news-page']}>
      <div className={styles['news-page__list']}>
        {showedNews.map(({ id, title, text, date, isApproved }) => (
          <div
            key={id}
            className={`${commonStyles['project-box']} ${styles['news-page__list-item']} ${styles['news-block']}`}
          >
            <p className={styles['news-block__title']}>{title}</p>
            <p className={styles['news-block__text']}>{text}</p>
            <p className={styles['news-block__date']}>{date}</p>
            {auth.isAdmin && (
              <div>
                {!isApproved && (
                  <button
                    type='button'
                    className={`${commonStyles['project-button']} ${styles['news-block__approve-button']}`}
                    onClick={() => news.approve(id)}
                  >
                    Одобрить новость
                  </button>
                )}
                <button
                  type='button'
                  className={`${commonStyles['project-button']} ${styles['news-block__remove-button']}`}
                  onClick={() => news.remove(id)}
                >
                  Удалить новость
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      {auth.isUser && <AddNewsContols addNewsHandler={news.add} />}
    </div>
  );
};
