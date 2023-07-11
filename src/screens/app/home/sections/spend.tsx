import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const Spend = () => {
  return (
    <View style={styles.container}>
      <Text>Spend</Text>
    </View>
  );
};

export default Spend;

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    flex: 1, 
  },
})
