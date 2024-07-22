import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Diet from './Diet'; 
import Activities from './Activities'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Diet') {
              return <MaterialIcons name="fastfood" size={size} color={color} />;
            } else if (route.name === 'Activities') {
              return <FontAwesome5 name="running" size={size} color={color} />;
            }
          },
        })}
      >
        <Tab.Screen name="Diet" component={Diet} />
        <Tab.Screen name="Activities" component={Activities} />
      </Tab.Navigator>
    );
  }
