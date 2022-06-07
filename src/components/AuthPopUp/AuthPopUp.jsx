import React from 'react';

import { AuthForm } from '../AuthForm/AuthForm';
import { PopUp } from '../PopUp';

export const AuthPopUp = ({ title, onClose, handleAuthData }) => {
  return (
    <PopUp title={title} onClose={onClose}>
      <AuthForm handleAuthData={handleAuthData} />
    </PopUp>
  );
};
