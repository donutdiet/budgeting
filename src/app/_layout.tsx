import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import Stack from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from '@/theme';

export default function RootLayout() {
  const { name, colors } = useTheme();
  const base = name === 'dark' ? DarkTheme : DefaultTheme;

  // Feed our palette to the navigators so headers and tab bars match the screens.
  const navigationTheme = {
    ...base,
    colors: {
      ...base.colors,
      primary: colors.text,
      background: colors.background,
      card: colors.surface,
      text: colors.text,
      border: colors.border,
    },
  };

  return (
    <ThemeProvider value={navigationTheme}>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
      </Stack>
    </ThemeProvider>
  );
}
