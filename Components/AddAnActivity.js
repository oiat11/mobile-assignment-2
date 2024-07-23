import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActivityType from './ActivityType';

const AddAnActivity = () => {
  return (
    <View style={styles.container}>
      <ActivityType />
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
