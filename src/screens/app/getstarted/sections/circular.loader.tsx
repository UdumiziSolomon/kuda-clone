/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Circle, Svg } from 'react-native-svg';

interface CircularFilledCircleProps {
  value: number;
  radius: number;
  strokeWidth: number;
  circleColor: string;
  fillColor: string;
}

const CircularFilledCircle: FC<CircularFilledCircleProps> = ({
  value,
  radius,
  strokeWidth,
  circleColor,
  fillColor,
}) => {
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 3.9) * circumference;

  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth}
          stroke={circleColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth}
          stroke={fillColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${progress} ${circumference}`}
          strokeDashoffset={0}
        />
        <Text
          style={{
            color: '#fff',
            fontFamily: 'Montserrat',
            fontSize: 20,
            marginTop: radius / 1.5,
            alignSelf: 'center',
          }}>
          {value}/3
        </Text>
      </Svg>
    </View>
  );
};

export default CircularFilledCircle;
