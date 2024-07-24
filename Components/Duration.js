import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Duration = () => {
  const [inputDuration, setInputDuration] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Duration (min) *</Text>
      <TextInput
        style={styles.input}
        value={inputDuration}
        onChangeText={setInputDuration}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default Duration;
