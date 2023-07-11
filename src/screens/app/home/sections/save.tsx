/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text, View, Dimensions } from 'react-native';
import React, { FC } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import GetColorScheme from '../../../../globals/theme';
import { useAppSelector } from '../../../../hooks';

const { width, height } = Dimensions.get('window');

const Save: FC = () => {
  const colors = GetColorScheme();
  const presentTheme: string = useAppSelector(
    state => state.themeReducer.theme,
  );
  return (
    <View style={styles.container}>
      <Text style={[styles.topText, { color: colors.textColor }]}>
        NGN Savings
      </Text>
    </View>
  );
};

export default Save;

const styles = ScaledSheet.create({
  container: {
    width: width - 20,
    flex: 1,
    paddingVertical: ms(10),
  },
  topText: {
    fontSize: ms(14),
    fontFamily: 'spring',
  },
});
