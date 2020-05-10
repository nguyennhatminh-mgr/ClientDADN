import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

export default function HomeNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile"
            component={Profile}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
        </Stack.Navigator>
    );
}