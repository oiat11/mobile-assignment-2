import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemsList = ({ items }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <View style={styles.container}>
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text>{item.activityType}</Text>
            <View style={styles.dateContainer}>
            <Text> {formatDate(item.date)}</Text>
            </View>
            <View style={styles.durationContainer}>
            <Text>{item.duration} min</Text>
            </View>
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
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  dateContainer: {
    paddingLeft: 16,
  },
  durationContainer: {
    paddingLeft: 16,
  },
});

export default ItemsList;
