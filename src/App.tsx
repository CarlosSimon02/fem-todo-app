import { ThemeProvider } from 'styled-components';

import useCurrentTheme from './hooks/useCurrentTheme.hook';
import Main from './routes/main/main.route';
import MainBackground from './styles/common/mainBackground';
import theme from './styles/constants/themes';
import GlobalStyle from './styles/global-style';

const App = () => {
  const { currentTheme } = useCurrentTheme();

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <MainBackground>
        <Main />
      </MainBackground>
    </ThemeProvider>
  );
};

export default App;
