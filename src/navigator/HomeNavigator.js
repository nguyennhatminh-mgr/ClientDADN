import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import InHome from '../screens/InHome';

const Stack = createStackNavigator();

export default function HomeNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home"
            component={Home}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            <Stack.Screen name="InHome"
            component={InHome}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
        </Stack.Navigator>
    );
}