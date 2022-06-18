import { useState } from 'react';

import { __news__ } from '../../__mocks__/__news__';

export const useNewsState = () => {
  const [newsState, setNewsState] = useState(__news__.load());

  return {
    acceptedContent: newsState.filter(({ isApproved }) => isApproved === true),
    allContent: newsState,
    add: ({ title, text }) => {
      const updatedNewsData = __news__.add({
        title,
        text,
      });
      setNewsState(updatedNewsData);
    },
    remove: (id) => {
      const updatednewsdata = __news__.remove(id);
      setNewsState(updatednewsdata);
    },
    approve: (id) => {
      const updatednewsdata = __news__.approve(id);
      setNewsState(updatednewsdata);
    },
  };
};
