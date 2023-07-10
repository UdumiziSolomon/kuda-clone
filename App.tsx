/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/global.store.provider';
import IsAppLoaded from './src/hooks/useApploader';
import MainNavigation from './src/navigations/main.navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const isLoaded = IsAppLoaded();
  if (!isLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
      {/* </GestureHandlerRootView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
