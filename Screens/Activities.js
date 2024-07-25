import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ItemsList from '../Components/ItemsList';

export default function Activities({ route }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (route.params?.newActivity) {
      setActivities((prevActivities) => [...prevActivities, route.params.newActivity]);
    }
  }, [route.params?.newActivity]);

  return (
    <View style={styles.container}>
      <ItemsList items={activities} />
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
