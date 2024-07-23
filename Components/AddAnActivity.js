import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddAnActivity = () => {
  return (
    <View style={styles.container}>
      <Text>Add An Activity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddAnActivity;
