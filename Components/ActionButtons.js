import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

const ActionButtons = ({ onCancel, onSave }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onCancel}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#ddd' : 'red',
          },
          styles.button,
        ]}
      >
        <Text style={styles.text}>Cancel</Text>
      </Pressable>
      <Pressable
        onPress={onSave}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#ddd' : 'blue',
          },
          styles.button,
        ]}
      >
        <Text style={styles.text}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: 16,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '40%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ActionButtons;
