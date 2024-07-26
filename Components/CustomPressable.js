import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const CustomPressable = ({ onPress, children, style, pressedStyle }) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.2)' }}
      style={({ pressed }) => [
        styles.pressable,
        style,
        pressed && styles.pressed,
        pressed && pressedStyle,
      ]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    padding: 10,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.7,
  },
});

export default CustomPressable;
