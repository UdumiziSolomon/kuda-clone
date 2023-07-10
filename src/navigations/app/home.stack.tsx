/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-shadow */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import { Home } from '../../screens';

type HomeStackParamList = {
  Home: undefined;
};

enum HomeEnum {
  Home = 'Home',
}

const HomeNavigator = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  const Navigator = HomeNavigator.Navigator;
  const Screen = HomeNavigator.Screen;

  return (
    <Navigator
      id={'HomeStack'}
      initialRouteName={HomeEnum.Home}
      screenOptions={{ headerShown: false }}>
      <Screen name={HomeEnum.Home} component={Home} />
    </Navigator>
  );
};

export default HomeStack;
