import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../Components/ThemeContext'; 
import CustomPressable from '../Components/CustomPressable'; 
import { colors, commonStyles } from '../Components/styles'; 

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <CustomPressable
        onPress={toggleTheme}
        style={[commonStyles.button, { backgroundColor: colors.jet }]}
        pressedStyle={commonStyles.pressed}
      >
        <Text style={[styles.buttonText, { color: colors.white }]}>Toggle Theme</Text>
      </CustomPressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
