import { useReducer } from 'react';

const initialState = {
  isShow: false,
};

const OPEN = 'open';
const CLOSE = 'close';

const reducer = (_, action) => {
  switch (action.type) {
    case OPEN:
      return {
        isShow: true,
      };
    case CLOSE:
      return initialState;
    default:
      throw new Error('usePopUpState: unknown action');
  }
};

export const usePopUpState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const open = () =>
    dispatch({
      type: OPEN,
    });

  const close = () => {
    dispatch({
      type: CLOSE,
    });
  };

  return {
    close,
    open,
    isShow: state.isShow,
  };
};
