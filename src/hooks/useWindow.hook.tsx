import { useContext } from 'react';

import { WindowContext } from '../contexts/window.context';

const useWindow = () => {
  const windowContext = useContext(WindowContext);

  if (!windowContext) {
    throw new Error('WindowContext is not provided');
  }

  return windowContext;
};

export default useWindow;
