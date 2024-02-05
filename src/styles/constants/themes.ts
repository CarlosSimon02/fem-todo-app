import bgImageDarkJPG from '../../assets/bg-desktop-dark.jpg';
import bgImageLightJPG from '../../assets/bg-desktop-light.jpg';

const darktheme = {
  color: {
    body: {
      background: 'hsl(235,21%,11%)',
      text: 'hsl(235,16%,43%)',
    },
    mainBox: {
      background: 'hsl(235, 24.49%, 19.22%)',
      text: 'hsl(234.19, 39.24%, 84.51%)',
      boxShadow: 'hsl(0, 0%, 0%, 50%)',
    },
    checkbox: {
      border: 'hsl(236.69, 13.64%, 25.88%)',
      fill: 'linear-gradient(to bottom right, red, yellow)',
    },
    toDoList: {
      background: 'hsl(236.69, 13.64%, 25.88%)',
    },
  },
  bgImage: bgImageDarkJPG,
};

const lightTheme = {
  color: {
    body: {
      background: 'hsl(0,0%,98%)',
      text: 'hsl(235,9%,61%)',
    },
    mainBox: {
      background: 'hsl(0, 0%, 100%)',
      text: 'hsl(236.69, 13.64%, 25.88%)',
      boxShadow: 'hsla(235, 19%, 80%, 50%)',
    },
    checkbox: {
      border: 'hsl(235.71, 33.33%, 91.76%)',
      fill: 'linear-gradient(to bottom right, red, yellow)',
    },
    toDoList: {
      background: 'hsl(235.71, 33.33%, 91.76%)',
    },
  },
  bgImage: bgImageLightJPG,
};

const defaultTheme = {
  borderRadius: {
    small: '5px',
  },
};

const theme = {
  dark: {
    ...darktheme,
    ...defaultTheme,
  },
  light: {
    ...lightTheme,
    ...defaultTheme,
  },
};

export default theme;
