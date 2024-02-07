import bgImageDarkJPG from '../../assets/bg-desktop-dark.jpg';
import bgImageLightJPG from '../../assets/bg-desktop-light.jpg';

const darktheme = {
  color: {
    accent: {
      main: 'hsl(219.69, 97.99%, 60.98%)',
    },
    body: {
      background: 'hsl(235,21%,11%)',
      text: 'hsl(235,16%,43%)',
    },
    mainBox: {
      background: 'hsl(235, 24.49%, 19.22%)',
      text: 'hsl(235, 16%, 42%)',
      boxShadow: 'hsl(0, 0%, 0%, 50%)',
    },
    itemBox: {
      doneText: 'hsl(233.08, 14.44%, 35.29%)',
      text: 'hsl(234.19, 39.24%, 84.51%)',
    },
    linkButton: {
      hover: 'hsl(235.71, 33.33%, 91.76%)',
    },
    inputText: {
      placeholder: 'hsl(233.57, 11.38%, 51.76%)',
    },
    checkbox: {
      border: 'hsl(236.69, 13.64%, 25.88%)',
      fill: 'linear-gradient(to bottom right, red, yellow)',
    },
    crossIcon: {
      fill: 'hsl(234.86, 16.13%, 42.55%)',
    },
    toDoList: {
      background: 'hsl(236.69, 13.64%, 25.88%)',
    },
  },
  bgImage: bgImageDarkJPG,
};

const lightTheme = {
  color: {
    accent: {
      main: 'hsl(219.69, 97.99%, 60.98%)',
    },
    body: {
      background: 'hsl(0,0%,98%)',
      text: 'hsl(235,9%,61%)',
    },
    mainBox: {
      background: 'hsl(0, 0%, 100%)',
      text: 'hsl(235, 9%, 61%)',
      boxShadow: 'hsla(235, 19%, 80%, 50%)',
    },
    itemBox: {
      doneText: 'hsl(233.33, 10.84%, 83.73%)',
      text: 'hsl(235, 19%, 35%)',
    },
    linkButton: {
      hover: 'hsl(235, 19%, 35%)',
    },
    inputText: {
      placeholder: 'hsl(236.47, 8.63%, 61.37%)',
    },
    checkbox: {
      border: 'hsl(235.71, 33.33%, 91.76%)',
      fill: 'linear-gradient(to bottom right, red, yellow)',
    },
    crossIcon: {
      fill: 'hsl(235, 9%, 61%)',
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
