import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CustomPressable from './CustomPressable';
import { commonStyles, colors } from '../Components/styles';

const ItemsList = ({ item, navigation }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handlePress = () => {
    const screen = item.activityType ? 'EditAnActivity' : 'EditADiet';
    navigation.navigate(screen, { item });
  };

  return (
    <CustomPressable onPress={handlePress} style={commonStyles.itemContainer} pressedStyle={commonStyles.pressedStyle}>
      <View style={commonStyles.contentContainer}>
        {item.activityType && <Text style={commonStyles.activityType}>{item.activityType}</Text>}
        {item.description && <Text style={commonStyles.descriptionText}>{item.description}</Text>}
        {item.isSpecial && (
          <FontAwesome name="exclamation-triangle" size={20} color={colors.yellow} style={commonStyles.icon} />
        )}
        <Text style={commonStyles.dateText}>{formatDate(item.date)}</Text>
        {item.duration && <Text style={commonStyles.durationText}>{item.duration} min</Text>}
        {item.calories && <Text style={commonStyles.durationText}>{item.calories} kcal</Text>}
      </View>
    </CustomPressable>
  );
};

export default ItemsList;
