import React from 'react';
import { View, Text, StyleSheet, Pressable, navigation } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ItemsList = ({ item, navigation }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const isSpecial = item.duration > 60 || (item.calories && item.calories > 800);

  const handlePress = () => {
    const screen = item.activityType ? 'EditAnActivity' : 'EditADiet';
    navigation.navigate(screen, { item });
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.itemContainer}>
        {item.activityType && <Text style={styles.activityType}>{item.activityType}</Text>}
        {item.description && <Text style={styles.descriptionText}>{item.description}</Text>}
        {isSpecial && (
          <FontAwesome name="exclamation-triangle" size={20} color="yellow" style={styles.icon} />
        )}
        <Text style={styles.dateText}>{formatDate(item.date)}</Text>
        {item.duration && <Text style={styles.durationText}>{item.duration} min</Text>}
        {item.calories && <Text style={styles.durationText}>{item.calories} kcal</Text>}
      </View>
    </Pressable>
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
  descriptionText: {
    fontWeight: 'bold',
    flex: 1,
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default ItemsList;
