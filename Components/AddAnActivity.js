import React, { useState } from 'react';
import { View, StyleSheet, Alert, Button, TouchableOpacity, Text } from 'react-native';
import ActivityType from './ActivityType';
import DateComponent from './DateComponent';
import ActionButtons from './ActionButtons';
import NumberInput from '../Components/NumberInput'; 
import { writeToDB, updateInDB, deleteDocument } from '../Firebase/firestoreHelper';
import { FontAwesome } from '@expo/vector-icons';

const AddAnActivity = ({ navigation, route }) => {
  const [activityType, setActivityType] = useState(route?.params?.item?.activityType || '');
  const [duration, setDuration] = useState(route?.params?.item?.duration || '');
  const [date, setDate] = useState(route?.params?.item?.date ? new Date(route.params.item.date) : null);
  const isEditing = !!route?.params?.item;

  const handleSave = async () => {
    if (!activityType || !duration || !date) {
      Alert.alert('Error', 'Please fill out all fields');
    } else if (isNaN(duration)) {
      Alert.alert('Error', 'Duration must be a number');
    } else {
      const newActivity = { activityType, duration, date: date.toISOString() };
      try {
        if (isEditing) {
          await updateInDB(newActivity, 'activities', route.params.item.id);
          Alert.alert('Success', 'Activity updated successfully');
        } else {
          await writeToDB(newActivity, 'activities');
          Alert.alert('Success', 'Activity added successfully');
        }
        navigation.navigate('ActivitiesScreen');
      } catch (error) {
        console.error('Error saving activity: ', error);
        Alert.alert('Error', 'There was an error saving the activity');
      }
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDocument('activities', route.params.item.id);
      Alert.alert('Success', 'Activity deleted successfully');
      navigation.navigate('ActivitiesScreen');
    } catch (error) {
      console.error('Error deleting activity: ', error);
      Alert.alert('Error', 'There was an error deleting the activity');
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete this activity?',
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
          <TouchableOpacity onPress={confirmDelete} style={{ marginRight: 10 }}>
            <FontAwesome name="trash-o" size={24} color="black" />
          </TouchableOpacity>
        ),
      });
    } else {
      navigation.setOptions({ title: 'Add Activity' });
    }
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <ActivityType activityType={activityType} setActivityType={setActivityType} />
      <NumberInput label="Duration (min) *" value={duration} onChange={setDuration} />
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

export default AddAnActivity;
