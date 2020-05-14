import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import InHome from '../screens/InHome';
import Profile from '../screens/Profile';
import AddNavigator from './AddNavigator';
import History from '../screens/HistoryOp';

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
            
            <Stack.Screen name="Profile"
            component={Profile}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            
            <Stack.Screen name="AddObject"
            component={AddNavigator}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            
            <Stack.Screen name="History"
            component={History}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>


        </Stack.Navigator>
    );
}