import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { commonStyles } from './styles';

const CustomTextInput = ({ label, value, onChange, placeholder, keyboardType = 'default', style, labelStyle, inputStyle }) => {
  return (
    <View style={[commonStyles.inputContainer, style]}>
      {label && <Text style={[commonStyles.inputLabel, labelStyle]}>{label}</Text>}
      <TextInput
        style={[commonStyles.input, inputStyle]}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={true}
        textAlignVertical="top"
        textAlign="left"
      />
    </View>
  );
};

export default CustomTextInput;
