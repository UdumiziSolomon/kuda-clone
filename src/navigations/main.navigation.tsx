/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-shadow */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '../hooks';

// screen imports
import { Onboard } from '../screens';
import { AppNavigation } from './';

type MainNavigationParamList = {
  Onboard: undefined;
  AppNavigation: undefined;
};

enum MainEnum {
  Onboard = 'Onboard',
  AppNavigation = 'AppNavigation',
}

const MainNavigator = createNativeStackNavigator<MainNavigationParamList>();

const MainNavigation = () => {
  const Navigator = MainNavigator.Navigator;
  const Screen = MainNavigator.Screen;

  const token: string | null = useAppSelector(
    state => state.tokenReducer.token,
  );

  return (
    <Navigator
      id={'mainNavigation'}
      initialRouteName={MainEnum.Onboard}
      screenOptions={{ headerShown: false }}>
      {token === null ? (
        <Screen name={MainEnum.Onboard} component={Onboard} />
      ) : (
        <Screen name={MainEnum.AppNavigation} component={AppNavigation} />
      )}
    </Navigator>
  );
};

export default MainNavigation;
