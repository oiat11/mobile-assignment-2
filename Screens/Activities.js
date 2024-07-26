import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '../Firebase/firebaseSetup';
import ItemsList from '../Components/ItemsList';
import { commonStyles } from '../Components/styles';

export default function Activities({ navigation }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, 'activities'), (querySnapshot) => {
      const activitiesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setActivities(activitiesList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={commonStyles.flatListContainer}>
      <FlatList
        data={activities}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ItemsList item={item} navigation={navigation} />}
      />
    </View>
  );
}
