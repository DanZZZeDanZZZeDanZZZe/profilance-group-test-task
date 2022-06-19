const ERROR_MESSAGE = 'Неверные данные пользователя';

const USERS = {
  ADMIN: {
    password: '1',
    isAdmin: true,
  },
  USER: {
    password: '2',
    isAdmin: false,
  },
};

export const __checkAuth__ = (login, password) => {
  if (login in USERS && password === USERS[login].password) {
    return {
      isSuccess: true,
      login,
      isAdmin: USERS[login].isAdmin,
    };
  }
  return {
    isSuccess: false,
    message: ERROR_MESSAGE,
  };
};
