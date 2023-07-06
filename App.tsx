/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { useCallback } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/global.store.provider';
import IsAppLoaded from './src/hooks/useApploader';
import { useAppDispatch, useAppSelector } from './src/hooks';
import { swapTheme } from './src/redux/reducers/theme.reducer';

const App = () => {
  const isLoaded = IsAppLoaded();
  if (!isLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Display />
      </Provider>
    </SafeAreaView>
  );
};

const Display = () => {
  const dispatch = useAppDispatch();

  const presentTheme: string = useAppSelector(
    state => state.themeReducer.theme,
  );

  const changeDarkTheme = useCallback(async () => {
    dispatch(swapTheme('dark'));
  }, []);

  const changeLightTheme = useCallback(async () => {
    dispatch(swapTheme('light'));
  }, []);

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
        Banking system on another level, Register and start enjoy seamless
        transactions
      </Text>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          marginTop: 40,
          fontSize: 23,
          fontFamily: 'hellixbold',
        }}>
        {presentTheme} theme
      </Text>
      <TouchableOpacity style={styles.btn} onPress={changeDarkTheme}>
        <Text style={{ color: '#ffffff', fontSize: 14 }}> Change to dark mode </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={changeLightTheme}>
        <Text style={{ color: '#ffffff', fontSize: 14 }}> Change to light mode </Text>
      </TouchableOpacity>
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
  btn: {
    width: 200,
    height: 60,
    borderRadius: 20,
    borderColor: '#ffffff',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default App;
