import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomPressable from './CustomPressable';

const ActionButtons = ({ onCancel, onSave }) => {
  return (
    <View style={styles.buttonContainer}>
      <CustomPressable
        onPress={onCancel}
        style={styles.buttonCancel}
        pressedStyle={styles.buttonPressed}
      >
        <Text style={styles.text}>Cancel</Text>
      </CustomPressable>
      <CustomPressable
        onPress={onSave}
        style={styles.buttonSave}
        pressedStyle={styles.buttonPressed}
      >
        <Text style={styles.text}>Save</Text>
      </CustomPressable>
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
  buttonCancel: {
    backgroundColor: 'red',
    width: '45%', 
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  buttonSave: {
    backgroundColor: 'blue',
    width: '45%', 
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: '#ddd',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ActionButtons;
