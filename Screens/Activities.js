import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Activities({ route }) {
  const { activityData } = route.params || {};

  const activityDate = activityData ? new Date(activityData.date) : null; 

  console.log(activityData); 

  return (
    <View style={styles.container}>
      <Text>Activities Screen</Text>
      {activityData ? (
        <View style={styles.activityContainer}>
          <Text>Type: {activityData.activityType}</Text>
          <Text>Duration: {activityData.duration} minutes</Text>
          <Text>Date: {activityDate ? activityDate.toLocaleDateString() : 'No date available'}</Text>
        </View>
      ) : (
        <Text>No activity data available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityContainer: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
});
