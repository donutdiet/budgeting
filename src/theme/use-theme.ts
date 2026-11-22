import { useColorScheme } from 'react-native';

import { palettes, type Palette, type ThemeName } from './tokens';

export type Theme = {
  name: ThemeName;
  colors: Palette;
};

/** Returns the palette for the current system colour scheme. */
export function useTheme(): Theme {
  const scheme = useColorScheme();
  const name: ThemeName = scheme === 'dark' ? 'dark' : 'light';
  return { name, colors: palettes[name] };
}
