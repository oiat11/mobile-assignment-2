import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import ActivityType from './ActivityType';
import Duration from './Duration';
import DateComponent from './DateComponent';
import { writeToDB } from '../Firebase/firestoreHelper'

const AddAnActivity = ({ navigation }) => {
  const [activityType, setActivityType] = React.useState(null);
  const [duration, setDuration] = React.useState('');
  const [date, setDate] = React.useState(null);

  const handleSave = async () => {
    if (!activityType || !duration || !date) {
      Alert.alert('Error', 'Please fill out all fields');
    } else if (isNaN(duration)) {
      Alert.alert('Error', 'Duration must be a number');
    } else {
      const newActivity = { activityType, duration, date: date.toISOString() };
      try {
        await writeToDB(newActivity); 
        Alert.alert('Success', 'Activity added successfully');
        navigation.navigate('ActivitiesScreen'); 
      } catch (error) {
        Alert.alert('Error', 'There was an error adding the activity');
      }
    }
  };

  return (
    <View style={styles.container}>
      <ActivityType activityType={activityType} setActivityType={setActivityType} />
      <Duration duration={duration} setDuration={setDuration} />
      <DateComponent date={date} setDate={setDate} />
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Save" onPress={handleSave} />
      </View>
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
  buttonContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
});

export default AddAnActivity;
