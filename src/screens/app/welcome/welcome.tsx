/* eslint-disable @typescript-eslint/no-shadow */
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
  Pressable,
  Vibration,
} from 'react-native';
import React, { useState, FC } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavigationParamList } from '../../../navigations/app/app.navigation';

import { numbers } from './numbers';

const image = require('../../../assets/images/kuda.png');

const { width, height } = Dimensions.get('window');

const Welcome: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppNavigationParamList>>();

  const [code, setCode] = useState({
    passcode: ['', '', '', '', '', ''],
  });
  const [fingerStat, setFingerStat] = useState<boolean>(true);
  const [showPop, setShowPop] = useState(false);

  const { passcode } = code;

  const PressHandler = (num: string) => {
    setFingerStat(false);
    let code = passcode;
    for (var i = 0; i <= code.length; i++) {
      Vibration.vibrate(100);
      if (code[i] === '') {
        code[i] = num;
        break;
      } else {
        continue;
      }
    }
    // check for last num
    if (code[5] !== '') {
      const completeCode = code.join('');
      if (completeCode !== '123456') {
        setShowPop(true);
      } else {
        navigation.navigate('GetStarted');
      }
    }
    setCode({ passcode: code });
  };

  const onDelete = () => {
    setFingerStat(false);
    setShowPop(false);
    Vibration.vibrate(100);
    let code = passcode;
    for (var i = code.length - 1; i >= 0; i--) {
      if (code[i] !== '') {
        code[i] = '';
        if (i === 0) {
          setFingerStat(true);
        }
        break;
      } else {
        continue;
      }
    }
    setCode({ passcode: code });
  };

  const closePopHandler = () => {
    setShowPop(false);
    setCode({ passcode: ['', '', '', '', '', ''] });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#000000'} barStyle={'light-content'} />
      <View style={styles.imageContainer}>
        <ImageBackground
          source={image}
          style={styles.imageLayer}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.topText}> Welcome back </Text>
      <Text style={styles.subText}> Udumizi Solomon </Text>
      <View style={styles.entryCodeLayer}>
        <View style={styles.entryCodeTopLayer}>
          <MaterialCommunityIcons
            name="lock"
            style={styles.entryCodeTopLayerIcon}
          />
          <Text style={styles.entryCodeTopLayerText}> Passcode </Text>
        </View>
        <View style={styles.codeContainer}>
          {passcode.map((p, index) => {
            let style = p !== '' ? styles.codeInActive : styles.codeActive;
            return <View style={style} key={index} />;
          })}
        </View>
      </View>
      <View style={styles.numLayer}>
        <View style={styles.numberContainer}>
          {numbers.map(num => (
            <View style={styles.numberLayer} key={num.id}>
              {num.id === 'out' && (
                <Text style={styles.signOut}> Sign Out </Text>
              )}
              {num.val === 'num' && (
                <Pressable onPress={() => PressHandler(num.id)}>
                  <Text style={styles.numberText}>{num.id}</Text>
                </Pressable>
              )}
              {!fingerStat && num.id === 'del' && (
                <Pressable onPress={onDelete}>
                  <Text style={styles.signOut}> Delete </Text>
                </Pressable>
              )}
              {fingerStat && num.id === 'del' && (
                <Pressable style={styles.fingerLayer}>
                  <View style={styles.backlay}>
                    <FontAwesome5
                      name="fingerprint"
                      style={styles.fingerLayerIcon}
                    />
                  </View>
                </Pressable>
              )}
            </View>
          ))}
        </View>
      </View>
      {showPop && (
        <Pressable onPress={closePopHandler} style={styles.popupLayer}>
          <Text style={styles.popupText}>Pin does not match</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#0a0a0a',
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: ms(120),
    marginTop: ms(40),
    width: ms(100),
    aspectRatio: 1,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000000',
  },
  imageLayer: {
    flex: 1,
  },
  topText: {
    color: '#fff',
    fontSize: ms(22),
    fontFamily: 'Montserrat',
    marginTop: ms(25),
  },
  subText: {
    color: '#fff',
    fontSize: ms(15),
    fontFamily: 'Sofia Pro',
  },
  entryCodeLayer: {
    paddingVertical: ms(10),
  },
  entryCodeTopLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: ms(120),
  },
  entryCodeTopLayerIcon: {
    fontSize: ms(15),
    color: '#70af5a',
  },
  entryCodeTopLayerText: {
    fontFamily: 'Sofia Pro',
    fontSize: ms(14),
    color: '#fff',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ms(10),
  },
  codeActive: {
    width: ms(6),
    height: ms(6),
    backgroundColor: '#fff',
    marginHorizontal: ms(15),
    borderRadius: ms(100),
    marginVertical: ms(13),
  },
  codeInActive: {
    width: ms(12),
    height: ms(12),
    backgroundColor: '#65a85d',
    marginHorizontal: ms(15),
    borderRadius: ms(100),
    marginVertical: ms(10),
  },
  numLayer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: ms(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberLayer: {
    marginHorizontal: ms(15),
    alignItems: 'center',
    justifyContent: 'center',
    width: ms(80),
    height: ms(50),
    // backgroundColor: '#aaa',
    borderRadius: ms(100),
    marginVertical: ms(8),
  },
  numberText: {
    fontSize: ms(30),
    width: ms(80),
    fontFamily: 'Montserrat',
    textAlign: 'center',
    color: '#fff',
  },
  signOut: {
    fontFamily: 'Montserrat',
    color: '#65a85d',
  },
  fingerLayer: {
    backgroundColor: '#5e9867',
    width: ms(53),
    height: ms(53),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(100),
    position: 'relative',
    zIndex: 2,
  },
  fingerLayerIcon: {
    color: '#fff',
    fontSize: ms(25),
  },
  backlay: {
    backgroundColor: '#40196d',
    width: ms(54),
    height: ms(54),
    position: 'absolute',
    borderRadius: ms(100),
    alignItems: 'center',
    justifyContent: 'center',
    left: ms(-4),
    right: ms(-1),
    bottom: ms(1),
    zIndex: 1,
  },
  popupLayer: {
    flex: 1,
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupText: {
    color: '#fff',
    fontFamily: 'Sofia Pro',
    fontSize: ms(17),
  },
});

export default Welcome;
