/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/global.store.provider';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Display />
      </Provider>
    </SafeAreaView>
  );
};

const Display = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="#000000" />
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          marginTop: 20,
          fontSize: 28,
          fontFamily: 'Montserrat',
        }}>
        Kuda Clone Application
      </Text>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          marginTop: 2,
          fontSize: 23,
          fontFamily: 'hellixbold',
        }}>
        Bank of the freeborns
      </Text>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          marginTop: 10,
          fontSize: 15,
          fontFamily: 'Sofia Pro',
        }}>
        Banking system on another level, Register and start enjoy seamless transactions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
});

export default App;
