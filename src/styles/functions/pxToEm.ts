const pxToEm = (pxSize: number): string => {
  const BASE_FONT_SIZE = 16;

  return `${pxSize / BASE_FONT_SIZE}em`;
};

export default pxToEm;
