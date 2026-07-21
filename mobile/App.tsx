import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { theme } from './src/theme';
import { Platform } from 'react-native';

if (Platform.OS === 'web') {
  const style = document.createElement('style');
  style.textContent = `
    html {
      overflow: auto !important;
      height: auto !important;
    }
    body {
      overflow: auto !important;
      height: auto !important;
      min-height: 100vh;
    }
    #root {
      overflow: auto !important;
      height: auto !important;
    }
    /* Override React Native Web's inline overflow:hidden on wrapper divs */
    #root > div,
    #root > div > div,
    #root > div > div > div {
      overflow: visible !important;
      height: auto !important;
      min-height: auto !important;
    }
  `;
  document.head.appendChild(style);
}

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.background,
    card: theme.colors.surface,
    text: theme.colors.text,
    border: theme.colors.border,
    notification: theme.colors.primary,
  },
};

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer theme={NavigationTheme}>
        <StatusBar style="dark" />
        <MainTabNavigator />
      </NavigationContainer>
    </FavoritesProvider>
  );
}
