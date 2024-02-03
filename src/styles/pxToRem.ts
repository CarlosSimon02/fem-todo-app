const pxToRem = (pxSize: number): string => {
  const BASE_FONT_SIZE = 16;

  return `${pxSize / BASE_FONT_SIZE}rem`;
};

export default pxToRem;
