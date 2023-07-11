import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const Borrow = () => {
  return (
    <View style={styles.container}>
      <Text>Borrow</Text>
    </View>
  );
};

export default Borrow;

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
  },
})
