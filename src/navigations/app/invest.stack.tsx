/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-shadow */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import { Invest } from '../../screens';

type InvestStackParamList = {
  Invest: undefined;
};

enum InvestEnum {
  Invest = 'Invest',
}

const InvestNavigator = createNativeStackNavigator<InvestStackParamList>();

const InvestStack = () => {
  const Navigator = InvestNavigator.Navigator;
  const Screen = InvestNavigator.Screen;

  return (
    <Navigator
      id={'InvestStack'}
      initialRouteName={InvestEnum.Invest}
      screenOptions={{ headerShown: false }}>
      <Screen name={InvestEnum.Invest} component={Invest} />
    </Navigator>
  );
};

export default InvestStack;
