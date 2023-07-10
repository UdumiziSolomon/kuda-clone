/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { Text, View, StatusBar, Dimensions, Switch } from 'react-native';
import React, { useCallback, useState } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import GetColorScheme from '../../../globals/theme';
import { swapTheme } from '../../../redux/reducers/theme.reducer';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const colors = GetColorScheme();
const { width } = Dimensions.get('window');

const More = () => {
  const dispatch = useAppDispatch();
  const colors = GetColorScheme();
  const [isTheme, setIsTheme] = useState<boolean>(true);

  const presentTheme: string = useAppSelector(
    state => state.themeReducer.theme,
  );

  const toggleSwitch = () => {
    setIsTheme(!isTheme);
    isTheme && dispatch(swapTheme('light'));
    !isTheme && dispatch(swapTheme('dark'));
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
      <StatusBar
        backgroundColor={colors.backgroundColor}
        barStyle={colors.dark ? 'light-content' : 'dark-content'}
      />
      <Text style={[styles.topText, { color: colors.textColor }]}>More</Text>
      <View style={[styles.themeLay, { backgroundColor: colors.layerOverlay }]}>
        <View style={styles.themeLeft}>
          <FontAwesome
            name={isTheme ? 'moon-o' : 'sun-o'}
            style={[
              styles.themeIcon,
              { backgroundColor: colors.iconOverlay, color: colors.textColor },
            ]}
          />
          <Text style={[styles.themeText, { color: colors.textColor }]}>
            Dark theme
          </Text>
        </View>
        <Switch
          value={isTheme}
          onValueChange={toggleSwitch}
          trackColor={{ false: '#d0cbcb', true: '#b3b3b3' }}
          thumbColor={isTheme ? '#40196d' : '#cdcacd'}
        />
      </View>
    </View>
  );
};

export default More;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: ms(10),
  },
  topText: {
    textAlign: 'center',
    marginTop: ms(0),
    fontFamily: 'springbold',
    fontSize: ms(17),
  },
  themeLay: {
    width: width - 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: ms(10),
    alignSelf: 'center',
    paddingVertical: ms(12),
    paddingHorizontal: ms(10),
    borderRadius: ms(10),
  },
  themeText: {
    fontFamily: 'springbold',
    fontSize: ms(14),
  },
  themeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  themeIcon: {
    fontSize: ms(20),
    marginRight: ms(10),
    backgroundColor: '#eee',
    paddingVertical: ms(8),
    paddingHorizontal: ms(10),
    borderRadius: ms(50),
  },
});
