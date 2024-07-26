import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInput from '../Components/CustomTextInput';


const AddADiet = ({ navigation }) => {
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Description"
        value={description}
        onChange={setDescription}
      />
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
