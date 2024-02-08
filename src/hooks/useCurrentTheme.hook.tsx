import { useContext } from 'react';

import { CurrentThemeContext } from '../contexts/current-theme.context';

const useCurrentTheme = () => {
  const currentThemeContext = useContext(CurrentThemeContext);

  if (!currentThemeContext) {
    throw new Error('CurrentThemeContext is not provided');
  }

  return currentThemeContext;
};

export default useCurrentTheme;
