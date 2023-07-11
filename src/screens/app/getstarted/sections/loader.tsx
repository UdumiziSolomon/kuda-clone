import { Animated, View, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

const Loader = () => {
  // const navigation = useNavigation();
  const loaderWidth = width; // Height of the loader
  const animationDuration = 500; // Duration of the loader animation

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: animationDuration,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: animationDuration,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    startAnimation();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, loaderWidth],
  });

  return (
    <View style={styles.container}>
      <View style={styles.loaderLayer}>
        <Animated.View
          style={[styles.loader, { transform: [{ translateX }] }]}
        />
      </View>
    </View>
  );
};

export default Loader;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: 'rgba(34, 34, 34, 0.6)',
    flex: 1,
    position: 'absolute',
    width: width,
    height: height,
    zIndex: 30,
  },
  loader: {
    width: width - 20,
    height: ms(3),
    backgroundColor: '#407945', // Customize the color of the loader here
  },
  loaderLayer: {
    width: width,
    height: ms(3),
    backgroundColor: '#6fcfa5',
  },
});
