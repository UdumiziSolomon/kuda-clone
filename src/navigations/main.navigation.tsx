/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-shadow */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '../hooks';

// screen imports
import { Onboard, Home } from '../screens';

type MainNavigationParamList = {
  Onboard: undefined;
  Home: undefined;
};

enum MainEnum {
  Onboard = 'Onboard',
  Home = 'Home',
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
        <Screen name={MainEnum.Home} component={Home} />
      )}
    </Navigator>
  );
};

export default MainNavigation;
