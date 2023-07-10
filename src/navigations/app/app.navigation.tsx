/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome, GetStarted } from '../../screens';
import AppTab from './app.tab';

export type AppNavigationParamList = {
  Welcome: undefined;
  GetStarted: undefined;
  AppTab: undefined;
};

enum AppEnum {
  Welcome = 'Welcome',
  GetStarted = 'GetStarted',
  AppTab = 'AppTab',
}

const AppNavigator = createNativeStackNavigator<AppNavigationParamList>();

const AppNavigation = () => {
  const Navigator = AppNavigator.Navigator;
  const Screen = AppNavigator.Screen;

  return (
    <Navigator
      id={'appNavigation'}
      initialRouteName={AppEnum.Welcome}
      screenOptions={{ headerShown: false, animation: 'none' }}>
      <Screen name={AppEnum.Welcome} component={Welcome} />
      <Screen name={AppEnum.GetStarted} component={GetStarted} />
      <Screen name={AppEnum.AppTab} component={AppTab} />
    </Navigator>
  );
};

export default AppNavigation;
