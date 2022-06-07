import { useState } from 'react';

export const usePopUpState = (initState = false) => {
  const [isShowPopUp, setIsShowPopUp] = useState(initState);

  return {
    closePopUp: () => setIsShowPopUp(false),
    openPopUp: () => setIsShowPopUp(true),
    isShowPopUp,
  };
};
