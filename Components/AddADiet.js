import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CustomTextInput from '../Components/CustomTextInput';
import NumberInput from './NumberInput';
import DateComponent from './DateComponent';
import ActionButtons from './ActionButtons';
import { writeToDB } from '../Firebase/firestoreHelper';


const AddADiet = ({ navigation }) => {
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = React.useState(null);

  const handleSave = async () => {
    if (!description || !calories || !date) {
      Alert.alert('Error', 'Please fill out all fields');
    } else if (isNaN(calories )) {
      Alert.alert('Error', 'Duration must be a number');
    } else {
      const newDiet = { description, calories, date: date.toISOString() };
      try {
        await writeToDB(newDiet, 'diets');
        Alert.alert('Success', 'Diet added successfully');
        navigation.navigate('DietScreen');
      } catch (error) {
        console.error('Error adding diet: ', error);
        Alert.alert('Error', 'There was an error adding the diet');
      }
    }
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Description *"
        value={description}
        onChange={setDescription}
      />
      <NumberInput label="Calories *" value={calories} onChange={setCalories}/>
      <DateComponent date={date} setDate={setDate} />
      <ActionButtons onCancel={() => navigation.goBack()} onSave={handleSave} />
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
