import React, {ReactNode} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {height, width} from '../constants/Dimesions';

interface BackgroundProps {
  children: ReactNode;
}

const Theme = {
  Background: ({children}: BackgroundProps) => (
    <ImageBackground
      source={require('../assets/wallpaper.jpg')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay} />
      {children}
    </ImageBackground>
  ),
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    // justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(56, 60, 93, 0.8)',
  },
});

export default Theme;
