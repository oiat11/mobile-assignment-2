import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons';
import Diet from './Diet'; 
import Activities from './Activities'; 
import Settings from './Settings'; 
import AddAnActivity from '../Components/AddAnActivity';
import AddADiet from '../Components/AddADiet'; 
import { View } from 'react-native';
import CustomPressable from '../Components/CustomPressable'; 
import { useTheme } from '../Components/ThemeContext'; 
import { commonStyles, colors } from '../Components/styles'; 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DietStack() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.header },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen
        name="DietScreen"
        component={Diet}
        options={({ navigation }) => ({
          title: 'Diet',
          headerRight: () => (
            <CustomPressable
              onPress={() => navigation.navigate('AddADiet')}
              style={commonStyles.headerRight}
              pressedStyle={commonStyles.pressed}
            >
              <View style={commonStyles.addButton}>
                <Entypo name="plus" size={24} color={theme.text} />
                <MaterialIcons name="fastfood" size={24} color={theme.text} />
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
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.header },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen
        name="ActivitiesScreen"
        component={Activities}
        options={({ navigation }) => ({
          title: 'Activities',
          headerRight: () => (
            <CustomPressable
              onPress={() => navigation.navigate('AddAnActivity')}
              style={commonStyles.headerRight}
              pressedStyle={commonStyles.pressed}
            >
              <View style={commonStyles.addButton}>
                <Entypo name="plus" size={24} color={theme.text} />
                <FontAwesome name="gear" size={24} color={theme.text} />
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

function SettingsStack() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.header },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen
        name="SettingsScreen"
        component={Settings}
        options={{ title: 'Settings' }}
      />
    </Stack.Navigator>
  );
}

export default function Home() {
  const { theme } = useTheme();
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
        tabBarActiveTintColor: colors.electricBlue,
        tabBarInactiveTintColor: colors.jet,
        tabBarStyle: { backgroundColor: theme.header },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Activities" component={ActivitiesStack} />
      <Tab.Screen name="Diet" component={DietStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}
