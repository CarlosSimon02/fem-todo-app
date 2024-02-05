import { BREAKPOINTS, BreakpointUp } from '../constants/breakpoints';
import pxToRem from './pxToRem';

export const fluidSize = (
  minSize: number,
  maxSize: number,
  minVW: BreakpointUp,
  maxVW: BreakpointUp,
): string => {
  const minSizeRem = pxToRem(minSize);
  const maxSizeRem = pxToRem(maxSize);

  const slope = (maxSize - minSize) / (maxVW - minVW);

  const fluidSize = `calc(${slope} * (100vw - ${pxToRem(minVW)}) + ${minSizeRem})`;

  return `clamp(${minSizeRem}, ${fluidSize}, ${maxSizeRem})`;
};

export const fluidSizeMobileToDesktop = (minSize: number, maxSize: number): string => {
  return fluidSize(minSize, maxSize, BREAKPOINTS.UP.MOBILE, BREAKPOINTS.UP.DESKTOP);
};
