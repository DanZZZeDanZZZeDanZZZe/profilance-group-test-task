import React, { useContext, useState } from 'react';
import { usePopUpState } from '../../hooks';
import { AppContext } from '../App';
import { PopUp } from '../PopUp';

import { throttle } from 'throttle-debounce';

import styles from './NewsPage.module.scss';
import commonStyles from '../../common-styles.module.scss';

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
  const [filterString, setFilterString] = useState('');

  const showedNews =
    auth.isAdmin || auth.isUser ? news.allContent : news.acceptedContent;

  const filteredShowedNews =
    filterString !== ''
      ? showedNews.filter((item) =>
          item.title.toLowerCase().includes(filterString.trim('').toLowerCase())
        )
      : showedNews;

  const filterInputOnChangeHandler = (e) => {
    setFilterString(e.target.value);
  };

  return (
    <div className={styles['news-page']}>
      <input
        placeholder='Поиск по заголовку'
        onChange={throttle(300, filterInputOnChangeHandler)}
        className={`${commonStyles['project-input']} ${styles['news-page__filter-input']}`}
      />
      <div className={styles['news-page__list']}>
        {filteredShowedNews.map(({ id, title, text, date, isApproved }) => (
          <article
            key={id}
            className={`${commonStyles['project-box']} ${styles['news-page__list-item']} ${styles['news-block']}`}
          >
            <h2 className={styles['news-block__title']}>{title}</h2>
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
          </article>
        ))}
      </div>
      {auth.isUser && <AddNewsContols addNewsHandler={news.add} />}
    </div>
  );
};
