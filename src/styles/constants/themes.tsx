import pxToRem from '../functions/pxToRem';

const darktheme = {
  color: {
    accent: {
      main: 'hsl(219, 97.99%, 60.98%)',
    },
    body: {
      background: 'hsl(235,21%,11%)',
      text: 'hsl(235,16%,43%)',
    },
    mainBox: {
      background: 'hsl(235, 24.49%, 19.22%)',
      text: 'hsl(235, 16%, 42%)',
      boxShadow: 'hsla(0, 0%, 0%, 50%)',
    },
    itemBox: {
      doneText: 'hsl(233, 14.44%, 35.29%)',
      text: 'hsl(234, 39.24%, 84.51%)',
    },
    linkButton: {
      hover: 'hsl(235, 33.33%, 91.76%)',
    },
    inputText: {
      placeholder: 'hsl(233, 11.38%, 51.76%)',
    },
    checkbox: {
      border: 'hsl(236, 13.64%, 25.88%)',
    },
    crossIcon: {
      fill: 'hsl(234.86, 16.13%, 42.55%)',
    },
    toDoList: {
      background: 'hsl(236.69, 13.64%, 25.88%)',
    },
  },
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
      doneText: 'hsl(233, 10.84%, 83.73%)',
      text: 'hsl(235, 19%, 35%)',
    },
    linkButton: {
      hover: 'hsl(235, 19%, 35%)',
    },
    inputText: {
      placeholder: 'hsl(236, 8.63%, 61.37%)',
    },
    checkbox: {
      border: 'hsl(235, 33.33333333333333%, 91.76470588235294%)',
    },
    crossIcon: {
      fill: 'hsl(235, 9%, 61%)',
    },
    toDoList: {
      background: 'hsl(235.71, 33.33%, 91.76%)',
    },
  },
};

const defaultTheme = {
  borderRadius: {
    small: `${pxToRem(5)}`,
    medium: `${pxToRem(15)}`,
  },
  transition: {
    color: {
      delay: '.7s',
      timingFunc: 'ease-out',
    },
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
