/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import { Text, View, StatusBar } from 'react-native';
import React from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import GetColorScheme from '../../../globals/theme';
import { useAppSelector } from '../../../hooks';

const Home = () => {
  const colors = GetColorScheme();
  const presentTheme: string = useAppSelector(
    state => state.themeReducer.theme,
  );
  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
      <StatusBar
        backgroundColor={colors.backgroundColor}
        barStyle={colors.dark ? 'light-content' : 'dark-content'}
      />

      <Text style={[styles.greetingText, { color: colors.textColor }]}>
        Hi, Solomon
      </Text>
    </View>
  );
};

export default Home;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: ms(10),
  },
  greetingText: {
    fontSize: ms(20),
    fontFamily: 'spring',
  },
});
