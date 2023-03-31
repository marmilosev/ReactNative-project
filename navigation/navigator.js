import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegisterScreen } from '../screens/RegisterScreen';
import { PublishScreen } from '../screens/PublishScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: 'Register screen' }}
      />
      <Stack.Screen
        name="Publish"
        component={PublishScreen}
        options={{ title: 'Publish screen' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile screen' }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Register') {
              iconName = focused ? 'log-in' : 'log-in-outline';
            } else if (route.name === 'Publish') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#749d62',
          tabBarInactiveTintColor: '#c7d7bf',
        })}>
        <Tab.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerTitle: 'Register',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 5,
              color: '#1f4d29',
            },
            headerStyle: {
              borderBottomColor: 'gray',
              borderBottomWidth: 0.2,
              shadowColor: 'transparent',
            },
            title: 'Register',
            tabBarStyle: {
              paddingTop: 5,
            },
          }}
        />
        <Tab.Screen
          name="Publish"
          component={PublishScreen}
          options={{
            headerTitle: 'Publish',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 5,
              color: '#1f4d29',
            },
            headerStyle: {
              borderBottomColor: 'gray',
              borderBottomWidth: 0.2,
              shadowColor: 'transparent',
            },
            title: 'Publish',
            tabBarStyle: {
              paddingTop: 5,
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTitle: 'Profile',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 5,
              color: '#1f4d29',
            },
            headerStyle: {
              borderBottomColor: 'gray',
              borderBottomWidth: 0.2,
              shadowColor: 'transparent',
            },
            title: 'Profile',
            tabBarStyle: {
              paddingTop: 5,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
