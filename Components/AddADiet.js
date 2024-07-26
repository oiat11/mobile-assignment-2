import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CustomTextInput from '../Components/CustomTextInput';
import NumberInput from '../Components/NumberInput';
import DateComponent from '../Components/DateComponent';
import ActionButtons from '../Components/ActionButtons';
import { writeToDB, updateInDB } from '../Firebase/firestoreHelper';

const AddADiet = ({ navigation, route }) => {
  const [description, setDescription] = useState(route?.params?.item?.description || '');
  const [calories, setCalories] = useState(route?.params?.item?.calories || '');
  const [date, setDate] = useState(route?.params?.item?.date ? new Date(route.params.item.date) : null);
  const isEditing = !!route?.params?.item;

  const handleSave = async () => {
    if (!description || !calories || !date) {
      Alert.alert('Error', 'Please fill out all fields');
    } else if (isNaN(calories)) {
      Alert.alert('Error', 'Calories must be a number');
    } else {
      const newDiet = { description, calories, date: date.toISOString() };
      try {
        if (isEditing) {
          await updateInDB(newDiet, 'diets', route.params.item.id);
          Alert.alert('Success', 'Diet updated successfully');
        } else {
          await writeToDB(newDiet, 'diets');
          Alert.alert('Success', 'Diet added successfully');
        }
        navigation.navigate('DietScreen');
      } catch (error) {
        console.error('Error saving diet: ', error);
        Alert.alert('Error', 'There was an error saving the diet');
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
      <NumberInput label="Calories *" value={calories} onChange={setCalories} />
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
