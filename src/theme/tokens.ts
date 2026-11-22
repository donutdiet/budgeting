/**
 * Design tokens. Values come from the "Visual design" table in PLAN.md.
 * The interface is monochrome; colour is reserved for buckets and income.
 */

export const palettes = {
  light: {
    background: '#F6F7F9',
    surface: '#FFFFFF',
    text: '#14171F',
    textSecondary: '#5B6472',
    border: '#E3E6EB',
    track: '#E9ECF0',
    needs: '#2456C8',
    wants: '#E08A1E',
    savings: '#0E8F7E',
    income: '#1B7F4B',
  },
  dark: {
    background: '#0F1115',
    surface: '#191C22',
    text: '#F1F3F6',
    textSecondary: '#9AA3B2',
    border: '#2A2F38',
    track: '#2A2F38',
    needs: '#6B9BFF',
    wants: '#F2A65A',
    savings: '#4FD1BD',
    income: '#5FD08E',
  },
} as const;

export type ThemeName = keyof typeof palettes;
export type ColorToken = keyof (typeof palettes)['light'];
export type Palette = Record<ColorToken, string>;

/** 8-point spacing scale, with 4 for tight gaps. */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
} as const;

export const fontSize = {
  caption: 11,
  small: 12,
  body: 14,
  bodyLarge: 15,
  title: 17,
  headline: 28,
} as const;

/** Sizes that the layout depends on. */
export const layout = {
  /** Minimum touch target for buttons and icons. */
  touchTarget: 44,
  /** Height of one row in the dense Month and Net worth lists. */
  listRow: 40,
} as const;
