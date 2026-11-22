import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router/js-tabs';
import type { ComponentProps } from 'react';
import type { ColorValue } from 'react-native';

import { SettingsButton } from '@/components/settings-button';
import { fontSize, useTheme } from '@/theme';

type IconName = ComponentProps<typeof Feather>['name'];

function tabIcon(name: IconName) {
  return function TabIcon({ color }: { color?: ColorValue | null }) {
    // The navigator always passes the active or inactive tint, which are plain strings here.
    return <Feather name={name} size={22} color={typeof color === 'string' ? color : undefined} />;
  };
}

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerRight: () => <SettingsButton />,
        headerShadowVisible: false,
        headerStyle: { backgroundColor: colors.background },
        headerTitleStyle: { fontSize: fontSize.title, fontWeight: '600' },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: { fontSize: fontSize.caption, fontWeight: '600' },
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
      }}>
      <Tabs.Screen name="index" options={{ title: 'Month', tabBarIcon: tabIcon('calendar') }} />
      <Tabs.Screen
        name="trends"
        options={{ title: 'Trends', tabBarIcon: tabIcon('bar-chart-2') }}
      />
      <Tabs.Screen
        name="net-worth"
        options={{ title: 'Net worth', tabBarIcon: tabIcon('trending-up') }}
      />
      <Tabs.Screen name="budget" options={{ title: 'Budget', tabBarIcon: tabIcon('sliders') }} />
    </Tabs>
  );
}
