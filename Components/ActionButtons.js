import React from 'react';
import { View, Text } from 'react-native';
import CustomPressable from './CustomPressable';
import { commonStyles } from './styles';

const ActionButtons = ({ onCancel, onSave }) => {
  return (
    <View style={commonStyles.buttonContainer}>
      <CustomPressable
        onPress={onCancel}
        style={commonStyles.buttonCancel}
        pressedStyle={commonStyles.pressed}
      >
        <Text style={commonStyles.text}>Cancel</Text>
      </CustomPressable>
      <CustomPressable
        onPress={onSave}
        style={commonStyles.buttonSave}
        pressedStyle={commonStyles.pressed}
      >
        <Text style={commonStyles.text}>Save</Text>
      </CustomPressable>
    </View>
  );
};

export default ActionButtons;
