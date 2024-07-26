import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { commonStyles } from '../Components/styles';
const ActivityType = ({ activityType, setActivityType }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Walking', value: 'Walking' },
    { label: 'Running', value: 'Running' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Weights', value: 'Weights' },
    { label: 'Yoga', value: 'Yoga' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Hiking', value: 'Hiking' },
  ]);

  return (
    <View style={commonStyles.dropdownContainer}>
      <Text style={commonStyles.dropdownLabel}>Activity *</Text>
      <DropDownPicker
        open={open}
        value={activityType}
        items={items}
        setOpen={setOpen}
        setValue={setActivityType}
        setItems={setItems}
        placeholder="Select an activity"
        style={commonStyles.dropdown}
        dropDownContainerStyle={commonStyles.dropdownContainerStyle}
        labelStyle={commonStyles.dropdownLabelStyle}
        listMode="SCROLLVIEW"
      />
    </View>
  );
};

export default ActivityType;
