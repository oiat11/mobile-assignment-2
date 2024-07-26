import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../Components/ThemeContext'; 
import CustomPressable from '../Components/CustomPressable'; 
import { colors, commonStyles } from '../Components/styles'; 

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[commonStyles.settingsContainer, { backgroundColor: theme.background }]}>
      <CustomPressable
        onPress={toggleTheme}
        style={[commonStyles.button, { backgroundColor: colors.jet }]}
        pressedStyle={commonStyles.pressed}
      >
        <Text style={[commonStyles.settingsButtonText, { color: colors.white }]}>Toggle Theme</Text>
      </CustomPressable>
    </View>
  );
}
