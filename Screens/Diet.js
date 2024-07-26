import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '../Firebase/firebaseSetup';
import ItemsList from '../Components/ItemsList';
import { commonStyles } from '../Components/styles';

export default function Diet({ navigation }) {
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, 'diets'), (querySnapshot) => {
      const dietsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDiets(dietsList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={commonStyles.flatListContainer}>
      <FlatList
        data={diets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ItemsList item={item} navigation={navigation} />}
      />
    </View>
  );
}
