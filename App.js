import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React, { useState } from 'react';
import Profile from './components/Profile';
import Options from './components/Options';
import styles from './styles/styles';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <Profile isDarkMode={isDarkMode} />
      <Options isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
    </View>
  );
}
