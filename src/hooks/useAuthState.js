import { useReducer } from 'react';
import { __checkAuth__ } from '../../__mocks__/__checkAuth__';

const initialState = null;

const TRY_AUTH = 'try_auth';
const EXIT = 'exit';

const reducer = (_, action) => {
  switch (action.type) {
    case TRY_AUTH:
      return { ...action.payload };
    case EXIT:
      return {};
    default:
      throw new Error('useAuthState: unknown action');
  }
};

export const useAuthState = () => {
  const [authData, dispatch] = useReducer(reducer, initialState);

  const tryAuth = ({ login, password }) => {
    const res = __checkAuth__(login, password);
    dispatch({
      type: TRY_AUTH,
      payload: res,
    });
  };

  const close = () => {
    dispatch({
      type: EXIT,
    });
  };

  return {
    isSuccess: Boolean(authData?.isSuccess),
    login: authData?.login,
    errorMessage: authData?.message ?? null,
    tryAuth,
    close,
    reset: close,
  };
};
