import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { commonStyles } from './styles';

const CustomPressable = ({ onPress, children, style, pressedStyle }) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.2)' }}
      style={({ pressed }) => [
        commonStyles.pressable,
        style,
        pressed && pressedStyle,
      ]}
    >
      <View style={commonStyles.contentContainer}>
        {children}
      </View>
    </Pressable>
  );
};

export default CustomPressable;
