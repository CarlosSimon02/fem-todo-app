export const BREAKPOINTS = {
  UP: {
    MOBILE: 375,
    TABLET: 500,
    DESKTOP: 1440,
  },
  DOWN: {
    MOBILE: 375,
    TABLET: 500,
    DESKTOP: 1440,
  },
};

export type BreakpointUp = (typeof BREAKPOINTS.UP)[keyof typeof BREAKPOINTS.UP];
export type BreakpointDown = (typeof BREAKPOINTS.DOWN)[keyof typeof BREAKPOINTS.DOWN];
