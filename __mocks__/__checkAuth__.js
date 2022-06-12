const ERROR_MESSAGE = 'Неверные данные пользователя';

const USERS = {
  ADMIN: {
    password: 'q111',
    isAdmin: true,
  },
  USER: {
    password: 'q222',
    isAdmin: false,
  },
};

export const __checkAuth__ = (login, password) => {
  if (login in USERS && password === USERS[login].password) {
    return {
      success: true,
      user: login,
      isAdmin: USERS[login].isAdmin,
    };
  }

  return {
    success: false,
    message: ERROR_MESSAGE,
  };
};
