import { useContext } from 'react';

import { ThemeProvider } from 'styled-components';

import { CurrentThemeContext } from './contexts/current-theme.context';
import Main from './routes/main/main.route';
import theme from './styles/constants/themes';
import GlobalStyle from './styles/global-style';

const App = () => {
  const currentThemeContext = useContext(CurrentThemeContext);

  if (!currentThemeContext) {
    throw new Error('CurrentThemeContext is not provided');
  }

  const { currentTheme } = currentThemeContext;

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default App;
