import { nanoid } from 'nanoid';

const padTo2Digits = (num) => num.toString().padStart(2, '0');

const formatDate = (date) =>
  [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('-');

let NEWS = [
  {
    id: '14asd',
    title: 'Заголовок 1',
    text: 'Новость 1',
    date: '22-05-2022',
    isApproved: true,
  },
  {
    id: '23sdf',
    title: 'Заголовок 2',
    text: 'Новость 2',
    date: '23-05-2022',
    isApproved: true,
  },
  {
    id: '15sws',
    title: 'Заголовок 3',
    text: 'Новость 3',
    date: '23-05-2020',
    isApproved: true,
  },
  {
    id: '16wws',
    title: 'Заголовок 4',
    text: 'Новость 4',
    date: '21-03-2019',
    isApproved: false,
  },
];

export const __news__ = {
  load() {
    return NEWS;
  },
  add({ title, text }) {
    NEWS = [
      ...NEWS,
      {
        id: nanoid(),
        title,
        text,
        date: formatDate(new Date()),
        isApproved: false,
      },
    ];

    return NEWS;
  },
  remove(newsId) {
    NEWS = NEWS.filter(({ id }) => id !== newsId);
    return NEWS;
  },
  approve(newsId) {
    NEWS = NEWS.map((item) => {
      if (item.id === newsId) {
        item.isApproved = true;
      }

      return item;
    });
    return NEWS;
  },
};
