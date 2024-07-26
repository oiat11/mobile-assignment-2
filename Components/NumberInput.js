import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { commonStyles } from '../Components/styles';

const NumberInput = ({ label, value, onChange }) => {
  return (
    <View style={commonStyles.inputContainer}>
      <Text style={commonStyles.inputLabel}>{label}</Text>
      <TextInput
        style={commonStyles.input}
        value={value}
        onChangeText={onChange}
        keyboardType="numeric"
      />
    </View>
  );
};

export default NumberInput;
