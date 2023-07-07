/* eslint-disable react-native/no-inline-styles */

import { View, Text, StatusBar } from 'react-native';
import React from 'react';

const Onboard = () => {
  return (
    <View>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Text
        style={{
          color: '#000',
          fontFamily: 'Montserrat',
          marginTop: 30,
          textAlign: 'center',
          fontSize: 20,
        }}>
        Onboard Screen
      </Text>
      <Text
        style={{
          color: '#000',
          fontFamily: 'Sofia Pro',
          marginTop: 3,
          textAlign: 'center',
        }}>
        This is the Onboarding screen.... Start writing your auth stacks
      </Text>
    </View>
  );
};

export default Onboard;
