/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-shadow */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import { Pay } from '../../screens';

type PayStackParamList = {
  Pay: undefined;
};

enum PayEnum {
  Pay = 'Pay',
}

const PayNavigator = createNativeStackNavigator<PayStackParamList>();

const PayStack = () => {
  const Navigator = PayNavigator.Navigator;
  const Screen = PayNavigator.Screen;

  return (
    <Navigator
      id={'PayStack'}
      initialRouteName={PayEnum.Pay}
      screenOptions={{ headerShown: false }}>
      <Screen name={PayEnum.Pay} component={Pay} />
    </Navigator>
  );
};

export default PayStack;
