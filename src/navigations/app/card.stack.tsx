/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-shadow */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import { Cards } from '../../screens';

type CardStackParamList = {
  Cards: undefined;
};

enum CardEnum {
  Cards = 'Cards',
}

const CardNavigator = createNativeStackNavigator<CardStackParamList>();

const CardStack = () => {
  const Navigator = CardNavigator.Navigator;
  const Screen = CardNavigator.Screen;

  return (
    <Navigator
      id={'CardStack'}
      initialRouteName={CardEnum.Cards}
      screenOptions={{ headerShown: false }}>
      <Screen name={CardEnum.Cards} component={Cards} />
    </Navigator>
  );
};

export default CardStack;
