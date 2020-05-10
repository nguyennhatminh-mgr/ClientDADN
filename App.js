import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './src/navigator/HomeNavigator';
import ProfileNavigator from './src/navigator/ProfileNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home">
          {
            () => (
              <HomeNavigator/>
            )
          }
        </Tab.Screen>
        <Tab.Screen name="Profile">
          {
            () => (
              <ProfileNavigator />
            )
          }
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
