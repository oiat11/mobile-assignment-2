import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomPressable from './CustomPressable'; 
import { commonStyles } from './styles'; 

const DateComponent = ({ date, setDate }) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false); 
    setDate(currentDate);
  };

  const toggleDatepicker = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <View style={commonStyles.dateContainer}>
      <Text style={commonStyles.dateLabel}>Date *</Text>
      <CustomPressable onPress={toggleDatepicker} style={commonStyles.dateInput} pressedStyle={commonStyles.pressedStyle}>
        <View>
          {date && <Text>{date.toLocaleDateString()}</Text>}
        </View>
      </CustomPressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()} 
          mode="date"
          display="inline"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateComponent;
