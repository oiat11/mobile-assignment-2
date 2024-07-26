import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInput from '../Components/CustomTextInput';
import NumberInput from './NumberInput';
import DateComponent from './DateComponent';


const AddADiet = ({ navigation }) => {
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = React.useState(null);

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Description *"
        value={description}
        onChange={setDescription}
      />
      <NumberInput label="Calories *" value={calories} onChange={setCalories}/>
      <DateComponent date={date} setDate={setDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  }, 
});

export default AddADiet;
