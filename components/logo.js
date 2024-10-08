// Logo.js
import React from 'react';
import { Svg, Circle, Rect, Text } from 'react-native-svg';

const Logo = () => {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="40" fill="#4682B4" />
      <Rect x="30" y="30" width="40" height="10" fill="#FFFFFF" />
      <Rect x="30" y="50" width="40" height="10" fill="#FFFFFF" />
      <Text
        x="50%"
        y="90%"
        fontSize="12"
        textAnchor="middle"
        fill="#FFFFFF"
        fontWeight="bold"
      >
        To-Do
      </Text>
    </Svg>
  );
};

export default Logo;
