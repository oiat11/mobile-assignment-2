import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons';
import Diet from './Diet'; 
import Activities from './Activities'; 
import Settings from './Settings'; 
import AddAnActivity from '../Components/AddAnActivity';
import AddADiet from '../Components/AddADiet'; 
import { View, StyleSheet } from 'react-native';
import CustomPressable from '../Components/CustomPressable'; // 确保路径正确

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DietStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DietScreen"
        component={Diet}
        options={({ navigation }) => ({
          title: 'Diet',
          headerRight: () => (
            <CustomPressable
              onPress={() => navigation.navigate('AddADiet')}
              style={{ marginRight: 10 }}
            >
              <View style={styles.addButton}>
                <Entypo name="plus" size={24} color="black" />
                <MaterialIcons name="fastfood" size={24} color="black" />
              </View>
            </CustomPressable>
          ),
        })}
      />
      <Stack.Screen name="AddADiet" component={AddADiet} />
      <Stack.Screen 
        name="EditADiet" 
        component={AddADiet} 
        options={{ title: 'Edit' }} 
      />
    </Stack.Navigator>
  );
}

function ActivitiesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ActivitiesScreen"
        component={Activities}
        options={({ navigation }) => ({
          title: 'Activities',
          headerRight: () => (
            <CustomPressable
              onPress={() => navigation.navigate('AddAnActivity')}
              style={{ marginRight: 10 }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Entypo name="plus" size={24} color="black" />
                <FontAwesome name="gear" size={24} color="black" />
              </View>
            </CustomPressable>
          ),
        })}
      />
      <Stack.Screen name="AddAnActivity" component={AddAnActivity} />
      <Stack.Screen 
        name="EditAnActivity" 
        component={AddAnActivity} 
        options={{ title: 'Edit' }} 
      />
    </Stack.Navigator>
  );
}

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Diet') {
            return <MaterialIcons name="fastfood" size={size} color={color} />;
          } else if (route.name === 'Activities') {
            return <FontAwesome5 name="running" size={size} color={color} />;
          } else if (route.name === 'Settings') {
            return <FontAwesome name="gear" size={size} color={color} />;
          }
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Activities" component={ActivitiesStack} />
      <Tab.Screen name="Diet" component={DietStack} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
