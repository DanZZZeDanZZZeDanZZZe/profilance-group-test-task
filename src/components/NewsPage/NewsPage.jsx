import React, { useContext } from 'react';
import { usePopUpState } from '../../hooks';
import { AppContext } from '../App';

import styles from './NewsPage.module.scss';
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
            <div>
              <label htmlFor='title'>title</label>
              <input type='title' name='title' placeholder='title' />
            </div>
            <div>
              <label htmlFor='text'>text</label>
              <input type='text' name='text' placeholder='text' />
            </div>
            <button>Добавить новость</button>
          </form>
        </PopUp>
      )}
      <button type='button' onClick={popUp.open}>
        Добавить новость
      </button>
    </>
  );
};

export const NewsPage = () => {
  const { auth, news } = useContext(AppContext);

  const showedNews = auth.isAdmin ? news.allContent : news.acceptedContent;

  return (
    <div className={styles['news-page']}>
      <div className={styles['news-page__list']}>
        {showedNews.map(({ id, title, text, date, isApproved }) => (
          <div key={id} className={styles['news-page__list-item']}>
            <p>{title}</p>
            <p>{text}</p>
            <p>{date}</p>
            {auth.isAdmin && (
              <>
                {!isApproved && (
                  <button type='button' onClick={() => news.approve(id)}>
                    Одобрить новость
                  </button>
                )}
                <button type='button' onClick={() => news.remove(id)}>
                  Удалить новость
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      {auth.isUser && <AddNewsContols addNewsHandler={news.add} />}
    </div>
  );
};
