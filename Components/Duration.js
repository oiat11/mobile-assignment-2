import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Duration = () => {

    const [inputDuration, setInputDuration] = useState('');
  return (
    <View>
      <Text>Duration</Text>
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
    input: {
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
        padding: 10,
        width: "100%",
        borderRadius: 5,
    },
  });

export default Duration;
