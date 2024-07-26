import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CustomTextInput from '../Components/CustomTextInput';
import NumberInput from '../Components/NumberInput';
import DateComponent from '../Components/DateComponent';
import ActionButtons from '../Components/ActionButtons';
import { writeToDB, updateInDB, deleteDocument } from '../Firebase/firestoreHelper';
import Checkbox from 'expo-checkbox';
import CustomPressable from '../Components/CustomPressable';

const AddADiet = ({ navigation, route }) => {
  const [description, setDescription] = useState(route?.params?.item?.description || '');
  const [calories, setCalories] = useState(route?.params?.item?.calories || '');
  const [date, setDate] = useState(route?.params?.item?.date ? new Date(route.params.item.date) : null);
  const [isSpecial, setIsSpecial] = useState(route?.params?.item?.isSpecial || false);
  const [showCheckbox, setShowCheckbox] = useState(route?.params?.item?.isSpecial || false); 
  const isEditing = !!route?.params?.item;

  useEffect(() => {
    if (calories > 800) {
      setIsSpecial(true);
    } else {
      setIsSpecial(false);
    }
  }, [calories]);

  useEffect(() => {
    if (isEditing && route?.params?.item?.isSpecial) {
      setShowCheckbox(true);
    }
  } , [isEditing]);

  const handleSave = async () => {
    if (!description || !calories || !date) {
      Alert.alert('Error', 'Please fill out all fields');
    } else if (isNaN(calories)) {
      Alert.alert('Error', 'Calories must be a number');
    } else {
      const newDiet = { description, calories, date: date.toISOString(), isSpecial };
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

  const confirmSave = () => {
    Alert.alert(
      'Importent',
      'Are you sure you want to save these change?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: handleSave },
      ],
      { cancelable: false }
    );
  };

  const handleDelete = async () => {
    try {
      await deleteDocument('diets', route.params.item.id);
      Alert.alert('Success', 'Diet deleted successfully');
      navigation.navigate('DietScreen');
    } catch (error) {
      console.error('Error deleting diet: ', error);
      Alert.alert('Error', 'There was an error deleting the diet');
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete this diet?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: handleDelete },
      ],
      { cancelable: false }
    );
  };

  React.useLayoutEffect(() => {
    if (isEditing) {
      navigation.setOptions({
        title: 'Edit',
        headerRight: () => (
          <CustomPressable onPress={confirmDelete} style={{ marginRight: 10 }}>
            <FontAwesome name="trash-o" size={24} color="black" />
          </CustomPressable>
        ),
      });
    } else {
      navigation.setOptions({ title: 'Add Diet' });
    }
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Description *"
        value={description}
        onChange={setDescription}
      />
      <NumberInput label="Calories *" value={calories} onChange={setCalories} />
      <DateComponent date={date} setDate={setDate} />
      {isEditing && showCheckbox && (
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>
            This item is marked as special. Select the checkbox if you want to mark it as not special.
          </Text>
          <Checkbox
            value={!isSpecial}
            onValueChange={() => setIsSpecial(!isSpecial)}
            style={styles.checkbox}
          />
        </View>
      )}
      <ActionButtons onCancel={() => navigation.goBack()} onSave={isEditing ? confirmSave : handleSave} />
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginLeft: 8,
    flex: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
  },
});

export default AddADiet;
