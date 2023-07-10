/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-shadow */
import { Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetColorScheme from '../../globals/theme';
import { ms } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const colors = GetColorScheme();

import HomeStack from './home.stack';
import PayStack from './pay.stack';
import InvestStack from './invest.stack';
import CardStack from './card.stack';
import MoreStack from './more.stack';

export type AppTabParamList = {
  HomeStack: undefined;
  PayStack: undefined;
  InvestStack: undefined;
  CardStack: undefined;
  MoreStack: undefined;
};
const AppTabNavigator = createBottomTabNavigator<AppTabParamList>();

enum AppEnum {
  HomeStack = 'HomeStack',
  PayStack = 'PayStack',
  InvestStack = 'InvestStack',
  CardStack = 'CardStack',
  MoreStack = 'MoreStack',
}

const AppTab = () => {
  const Navigator = AppTabNavigator.Navigator;
  const Screen = AppTabNavigator.Screen;

  return (
    <Navigator
      initialRouteName={AppEnum.HomeStack}
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.tabBarBackground,
          height: ms(60),
          paddingTop: ms(8),
        },
      }}>
      <Screen
        name={AppEnum.HomeStack}
        component={HomeStack}
        options={() => ({
          tabBarIcon: ({ focused }: any) => (
            <MaterialCommunityIcons
              name="home-analytics"
              color={focused ? colors.tabIconActive : colors.tabIconInActive}
              size={ms(25)}
            />
          ),
          tabBarLabel: ({ focused }: any) => (
            <Text
              style={{
                fontFamily: 'Sofia Pro',
                fontSize: ms(10),
                paddingBottom: ms(12),
                color: focused ? colors.tabTextActive : colors.tabTextInActive,
              }}>
              Home
            </Text>
          ),
        })}
      />
      <Screen
        name={AppEnum.PayStack}
        component={PayStack}
        options={() => ({
          tabBarIcon: ({ focused }: any) => (
            <Feather
              name="send"
              color={focused ? colors.tabIconActive : colors.tabIconInActive}
              size={ms(21)}
            />
          ),
          tabBarLabel: ({ focused }: any) => (
            <Text
              style={{
                fontFamily: 'Sofia Pro',
                fontSize: ms(10),
                paddingBottom: ms(12),
                color: focused ? colors.tabTextActive : colors.tabTextInActive,
              }}>
              Pay
            </Text>
          ),
        })}
      />
      <Screen
        name={AppEnum.InvestStack}
        component={InvestStack}
        options={() => ({
          tabBarIcon: ({ focused }: any) => (
            <MaterialCommunityIcons
              name="signal-cellular-outline"
              color={focused ? colors.tabIconActive : colors.tabIconInActive}
              size={ms(24)}
            />
          ),
          tabBarLabel: ({ focused }: any) => (
            <Text
              style={{
                fontFamily: 'Sofia Pro',
                fontSize: ms(10),
                paddingBottom: ms(12),
                color: focused ? colors.tabTextActive : colors.tabTextInActive,
              }}>
              Invest
            </Text>
          ),
        })}
      />
      <Screen
        name={AppEnum.CardStack}
        component={CardStack}
        options={() => ({
          tabBarIcon: ({ focused }: any) => (
            <MaterialCommunityIcons
              name="credit-card-outline"
              color={focused ? colors.tabIconActive : colors.tabIconInActive}
              size={ms(24)}
            />
          ),
          tabBarLabel: ({ focused }: any) => (
            <Text
              style={{
                fontFamily: 'Sofia Pro',
                fontSize: ms(10),
                paddingBottom: ms(12),
                color: focused ? colors.tabTextActive : colors.tabTextInActive,
              }}>
              Cards
            </Text>
          ),
        })}
      />
      <Screen
        name={AppEnum.MoreStack}
        component={MoreStack}
        options={() => ({
          tabBarIcon: ({ focused }: any) => (
            <MaterialCommunityIcons
              name="dots-grid"
              color={focused ? colors.tabIconActive : colors.tabIconInActive}
              size={ms(24)}
            />
          ),
          tabBarLabel: ({ focused }: any) => (
            <Text
              style={{
                fontFamily: 'Sofia Pro',
                fontSize: ms(10),
                paddingBottom: ms(12),
                color: focused ? colors.tabTextActive : colors.tabTextInActive,
              }}>
              More
            </Text>
          ),
        })}
      />
    </Navigator>
  );
};

export default AppTab;
