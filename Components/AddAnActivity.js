import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActivityType from './ActivityType';
import Duration from './Duration';
import Date from './Date';

const AddAnActivity = () => {
  return (
    <View>
      <ActivityType />
      <Duration />
      <Date />
    </View>
  );
}

export default AddAnActivity;
