import { StyleSheet, Text, View } from 'react-native';

import { fontSize, spacing, useTheme } from '@/theme';

type Props = {
  title: string;
  /** Which phase of PLAN.md builds this screen. */
  phase: string;
};

/** Stand-in for a screen that has not been built yet. */
export function PlaceholderScreen({ title, phase }: Props) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.phase, { color: colors.textSecondary }]}>{phase}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    padding: spacing.xl,
  },
  title: {
    fontSize: fontSize.headline,
    fontWeight: '700',
  },
  phase: {
    fontSize: fontSize.body,
  },
});
