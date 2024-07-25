import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemsList = ({ items }) => {
  console.log(items);
  return (
    <View style={styles.container}>
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text>Type: {item.activityType}</Text>
            <Text>Duration: {item.duration} minutes</Text>
            <Text>Date: {new Date(item.date).toLocaleDateString()}</Text>
          </View>
        ))
      ) : (
        <Text>No activities available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
});

export default ItemsList;
