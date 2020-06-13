import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import InHome from '../screens/InHome';
import Profile from '../screens/Profile';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

import AddNavigator from './AddNavigator';
import History from './History';
import SetLightLevel from '../screens/SetLightLevel';
import AllRoom from '../screens/AllRoom';
import ListRoom from '../screens/control_device/ListRoom';
import ControlNavigator from './ControlNavigator';
import ChooseRoom from '../screens/ChooseRoom';
import EditProfile from '../screens/EditProfile';
import ChangePassword from '../screens/ChangePassword';
import ListDevice from '../screens/control_device/ListDevice';


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
            <Stack.Screen name="ChooseRoom"
            component={ChooseRoom}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            <Stack.Screen name="Home"
            component={Home}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            <Stack.Screen name="AllRoom"
            component={AllRoom}
            options={{headerShown:false}}/>
            
            <Stack.Screen name="Profile"
            component={Profile}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            <Stack.Screen name="EditProfile"
            component={EditProfile}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            <Stack.Screen name="ChangePassword"
            component={ChangePassword}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            
            <Stack.Screen name="AddObject"
            component={AddNavigator}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            
            <Stack.Screen name="History"
            component={History}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>

            <Stack.Screen name="SetLightLevel"
            component={SetLightLevel}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff",title:"SetLightLevel"}}/>
        
            <Stack.Screen name="ListRoomControl" 
            component={ListRoom}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            <Stack.Screen name="ListDevice" 
            component={ListDevice}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>

        </Stack.Navigator>
    );
}