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
      <StatusBar barStyle={'light-content'} backgroundColor="#504b4b" />
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          marginTop: 200,
          fontSize: 40,
        }}>
        KUDA CLONE
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
