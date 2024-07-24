import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Duration = () => {

    const [inputDuration, setInputDuration] = useState('');
  return (
    <View >
      <Text>Duration (min) *</Text>
      <TextInput
        value={inputDuration}
        onChangeText={setInputDuration}
        keyboardType="numeric"
      />
    </View>
  );
};


export default Duration;
