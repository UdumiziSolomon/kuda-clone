import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const Save = () => {
  return (
    <View style={styles.container}>
      <Text>Save</Text>
    </View>
  );
};

export default Save;

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    flex: 1,
  },
})
