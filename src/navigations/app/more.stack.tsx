/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-shadow */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import { More } from '../../screens';

type MoreStackParamList = {
  More: undefined;
};

enum MoreEnum {
  More = 'More',
}

const MoreNavigator = createNativeStackNavigator<MoreStackParamList>();

const MoreStack = () => {
  const Navigator = MoreNavigator.Navigator;
  const Screen = MoreNavigator.Screen;

  return (
    <Navigator
      id={'MoreStack'}
      initialRouteName={MoreEnum.More}
      screenOptions={{ headerShown: false }}>
      <Screen name={MoreEnum.More} component={More} />
    </Navigator>
  );
};

export default MoreStack;
