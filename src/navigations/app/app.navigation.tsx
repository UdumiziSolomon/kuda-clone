/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../../screens';

type AppNavigationParamList = {
  Welcome: undefined;
};

enum AppEnum {
  Welcome = 'Welcome',
}

const AppNavigator = createNativeStackNavigator<AppNavigationParamList>();

const AppNavigation = () => {
  const Navigator = AppNavigator.Navigator;
  const Screen = AppNavigator.Screen;

  return (
    <Navigator
      id={'appNavigation'}
      initialRouteName={AppEnum.Welcome}
      screenOptions={{ headerShown: false }}>
      <Screen name={AppEnum.Welcome} component={Welcome} />
    </Navigator>
  );
};

export default AppNavigation;
