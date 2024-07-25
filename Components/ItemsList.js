import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ItemsList = ({ item }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const isSpecial = item.duration > 60;

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.activityType}>{item.activityType}</Text>
        {isSpecial && (
          <FontAwesome name="exclamation-triangle" size={20} color="yellow" style={styles.icon} />
        )}
        <Text style={styles.dateText}>{formatDate(item.date)}</Text>
        <Text style={styles.durationText}>{item.duration} min</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityType: {
    fontWeight: 'bold',
    flex: 1,
  },
  dateText: {
    marginHorizontal: 8,
  },
  durationText: {
    marginHorizontal: 8,
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default ItemsList;
