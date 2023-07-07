/* eslint-disable react-native/no-inline-styles */

import { View, Text, StatusBar } from 'react-native';
import React from 'react';

const Welcome = () => {
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
        Welcome back
      </Text>
      <Text
        style={{
          color: '#000',
          fontFamily: 'Sofia Pro',
          marginTop: 3,
          textAlign: 'center',
        }}>
        Enter your 6 digit PIN to gain access to your account
      </Text>
    </View>
  );
};

export default Welcome;
