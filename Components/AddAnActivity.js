import React from 'react';
import { View, StyleSheet } from 'react-native';
import ActivityType from './ActivityType';
import Duration from './Duration';
import Date from './Date';

const AddAnActivity = () => {
  return (
    <View style={styles.container}>
      <ActivityType />
      <Duration />
      <Date />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default AddAnActivity;
