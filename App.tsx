/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */

import { useCallback } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/global.store.provider';

// test redux implementation
import { useAppSelector, useAppDispatch } from './src/hooks';
import { swapTheme } from './src/redux/reducers/theme.reducer';

const App = () => {
  const presentTheme: string = useAppSelector(state => state.theme.theme);

  const changeTheme = useCallback(() => {
    useAppDispatch(swapTheme('dark'));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <StatusBar barStyle={'light-content'} backgroundColor="#000" />
        <Text> KUDA CLONE APPLICATION </Text>
        <Text> {presentTheme} </Text>
        <TouchableOpacity onPress={changeTheme}>
          <Text> Swap theme </Text>
        </TouchableOpacity>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
