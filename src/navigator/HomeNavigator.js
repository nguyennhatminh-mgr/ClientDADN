import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import InHome from '../screens/InHome';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

export default function HomeNavigator(){
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login"
            component={Login}
            options={{headerShown: false}}/>
            <Stack.Screen name="SignUp"
            component={SignUp}
            options={{headerShown: false}}/>
            <Stack.Screen name="Home"
            component={Home}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            <Stack.Screen name="InHome"
            component={InHome}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            <Stack.Screen name="Profile"
            component={Profile}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
        </Stack.Navigator>
    );
}