/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { swapTheme } from '../redux/reducers/theme.reducer';
import { store } from '../redux/global.store.provider';

const LoadTheme = async (): Promise<void> => {
  try {
    const present = store.getState().themeReducer.theme;
    const presentTheme: any = await AsyncStorage.getItem('theme');
    const formattedTheme = JSON.parse(presentTheme);

    console.log(formattedTheme, present);

    if (formattedTheme === null){
      return;
    } else {
      store.dispatch(swapTheme(formattedTheme));
    }
  } catch (e) {
    console.warn(e);
  } finally {
    SplashScreen.hide();
  }
};

const IsAppLoaded = (): boolean => {
  const [isThemeLoaded, setIsThemeLoaded] = useState<boolean>(false);

  useEffect(() => {
    LoadTheme().then(() => setIsThemeLoaded(true));
  }, []);

  return isThemeLoaded;
};

export default IsAppLoaded;
