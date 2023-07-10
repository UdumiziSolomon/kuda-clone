import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Loader } from './sections/';
import { CircularFilledCircle } from './sections/';
import { CheckList } from './sections/';
import { AppTabParamList } from '../../../navigations/app/app.tab';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');

const GetStarted = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabParamList | any>>();
  const [load, setLoad] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoad(false), 3000);
  }, []);

  const circleValue = 2;

  const AppHandler = () => {
    navigation.navigate('AppTab', { screen: 'HomeStack' });
  };

  return (
    <View style={styles.container}>
      {load && <Loader />}
      <Text style={styles.topText}>Get Started</Text>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.setupLayer}>
          <View>
            <CircularFilledCircle
              value={circleValue}
              radius={35}
              strokeWidth={5}
              circleColor="#707070"
              fillColor="#42b72b"
            />
          </View>
          <View style={styles.textLayer}>
            <Text style={styles.textLayerText}>Set up your Kuda profile</Text>
            <Text style={styles.textLayerSubText}>
              Please, complete your profile setup below to remove the limits on
              your account
            </Text>
          </View>
        </View>
        <View style={styles.checkLayer}>
          <CheckList
            image={require('../../../assets/images/kuda.png')}
            title="Create An Account"
            desc="Get a basic Kuda account to access our services"
            stat={true}
          />
          <CheckList
            image={require('../../../assets/images/kuda.png')}
            title="More About You"
            desc="Add a few details about yourself and how you'll use Kuda"
            stat={true}
          />
          <CheckList
            image={require('../../../assets/images/kuda.png')}
            title="Secure Your Account"
            desc="Create a transaction PIN and set a trusted device"
            stat={false}
          />
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity onPress={AppHandler} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#0a0a0a',
    flex: 1,
    alignItems: 'center',
  },
  topText: {
    fontFamily: 'springbold',
    fontSize: ms(17),
    color: '#fff',
    paddingTop: ms(40),
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#40196d',
    width: width - 35,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: ms(15),
    borderRadius: ms(7),
    marginBottom: ms(20),
  },
  buttonText: {
    fontFamily: 'spring',
    fontSize: ms(14),
    color: '#eee',
  },
  setupLayer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ms(25),
    marginTop: ms(30),
    justifyContent: 'space-between',
  },
  textLayer: {
    width: width / 1.5,
    marginLeft: ms(15),
  },
  textLayerText: {
    fontFamily: 'spring',
    fontSize: ms(15.5),
    color: '#eee',
  },
  textLayerSubText: {
    fontFamily: 'Sofia Pro',
    fontSize: ms(12.5),
    color: '#eee',
    lineHeight: ms(15),
    marginTop: ms(4),
  },
  checkLayer: {
    width: width,
    padding: ms(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: ms(20),
  },
});
