/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import {
  Text,
  View,
  StatusBar,
  Pressable,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import GetColorScheme from '../../../globals/theme';
import { useAppSelector } from '../../../hooks';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HomeScreens } from './sections/home.screen';

const image = require('../../../assets/images/kuda.png');

const { width, height } = Dimensions.get('window');

const Home = () => {
  const colors = GetColorScheme();
  const presentTheme: string = useAppSelector(
    state => state.themeReducer.theme,
  );

  const [currIndex, setCurrIndex] = useState(0);
  const ref = useRef(null);

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / width);
    console.log(index);
    setCurrIndex(index);
  };

  const setIndex = index => {
    if (ref.current) {
      setCurrIndex(index);
      ref.current.scrollToIndex({ index, animated: false });
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
      <StatusBar
        backgroundColor={colors.backgroundColor}
        barStyle={colors.dark ? 'light-content' : 'dark-content'}
      />
      <View style={styles.topLayer}>
        <View style={styles.topSubLayer}>
          <Pressable>
            <Image
              source={image}
              style={styles.profileImage}
              resizeMode="contain"
            />
          </Pressable>
          <Text style={[styles.greetingText, { color: colors.textColor }]}>
            Hi, Solomon
          </Text>
        </View>
        <Pressable>
          <FontAwesome5
            name="chart-pie"
            style={[styles.topIcon, { color: colors.textColor }]}
          />
        </Pressable>
      </View>
      <View style={styles.topTextLayer}>
        {HomeScreens.map((screen, index) => (
          <Pressable
            onPress={() => setIndex(screen.id)}
            key={screen.id}
            style={[
              styles.screenLayer,
              { backgroundColor: colors.layerOverlay },
            ]}>
            <Text
              style={[
                styles.screenLayerText,
                { color: currIndex === index ? screen.color : '#757272' },
              ]}>
              {screen.name}
            </Text>
          </Pressable>
        ))}
      </View>
      <FlatList
        pagingEnabled
        ref={ref}
        data={HomeScreens}
        horizontal
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => item.screen}
        contentContainerStyle={styles.contentContainer}
      />
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
    fontSize: ms(16),
    fontFamily: 'spring',
    marginLeft: ms(10),
  },
  profileImage: {
    width: ms(40),
    height: ms(40),
    borderRadius: ms(50),
  },
  topIcon: {
    fontSize: ms(21),
  },
  topLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: ms(7),
    paddingVertical: ms(5),
    marginTop: ms(5),
  },
  topSubLayer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topTextLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: ms(10),
  },
  screenLayer: {
    marginHorizontal: ms(5),
    paddingVertical: ms(8),
    paddingHorizontal: ms(20),
    borderRadius: ms(5),
  },
  screenLayerText: {
    fontFamily: 'spring',
    fontSize: ms(11),
  },
  contentContainer: {
    // width: width,
    marginTop: ms(20),
  },
});
