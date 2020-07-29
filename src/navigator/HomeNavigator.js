import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import InHome from '../screens/InHome';
import Profile from '../screens/Profile';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

import AddObject from '../screens/addObject';
import AddSensor from '../screens/addSensor';
import AddLight from '../screens/addLight';
import AddRoom from '../screens/addRoom';
import RemoveDevice from '../screens/removeDevice';
import RemoveRoom from '../screens/removeRoom';

//import History from './History';
import History from '../screens/history/HistoryOp';
import Room from '../screens/history/ViewRoom';

import SetLightLevel from '../screens/SetLightLevel';
import AllRoom from '../screens/AllRoom';
import ListRoom from '../screens/control_device/ListRoom';
import ControlNavigator from './ControlNavigator';
import ChooseRoom from '../screens/ChooseRoom';
import EditProfile from '../screens/EditProfile';
import ChangePassword from '../screens/ChangePassword';
import ListDevice from '../screens/control_device/ListDevice';
import ControlLight from '../screens/control_device/ControlLight';
import Notification from '../screens/notify/Notification';


import RoomInfo from'../components/RoomInfo';
import ForgotPass from '../screens/ForgotPass';


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
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff", title:"Choose room to sign up"}}/>
            <Stack.Screen name="Home"
            component={Home}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>
            <Stack.Screen name="AllRoom"
            component={AllRoom}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff", title :"List Rooms"}}/>
            
            <Stack.Screen name="Profile"
            component={Profile}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff", title:"User information"}}/>
            <Stack.Screen name="EditProfile"
            component={EditProfile}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff", title:"Edit name"}}/>
            <Stack.Screen name="ChangePassword"
            component={ChangePassword}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff",title:"Change password"}}/>
            <Stack.Screen name="ForgotPass"
            component={ForgotPass}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff",title:"Forgot password"}}/>
            
            <Stack.Screen name="AddObject"
            component={AddObject}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff",title:"Add new devices"}}/>

            <Stack.Screen name="AddSensor"
            component={AddSensor}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff",title:"Add new sensor"}}/>
            
            <Stack.Screen name="RemoveDevice"
            component={RemoveDevice}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff",title:"Remove Device"}}/>

            <Stack.Screen name="RemoveRoom"
            component={RemoveRoom}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff",title:"Remove Room"}}/>

            <Stack.Screen name="AddLight"
            component={AddLight}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff", title:"Add new light"}}/>

            <Stack.Screen name="AddRoom"
            component={AddRoom}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff", title:"Add new room"}}/>
            
            <Stack.Screen name="History"
            component={History}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>

            <Stack.Screen name="Room"
            component={Room}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff"}}/>

            <Stack.Screen name="SetLightLevel"
            component={SetLightLevel}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff",title:"Set sensor level"}}/>
        
            <Stack.Screen name="ListRoomControl" 
            component={ListRoom}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff", title:"List of rooms"}}/>
            <Stack.Screen name="ListDevice" 
            component={ListDevice}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff", title:"List of lights"}}/>
            <Stack.Screen name="ControlLight" 
            component={ControlLight}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff", title:"Control light"}}/>


            <Stack.Screen name="Notification" 
            component={Notification}
            options={{headerStyle: {backgroundColor: "#1aaa1a"}, headerTintColor: "#fff", title:"Notifications"}}/>


            <Stack.Screen name="RoomInfo"
            component={RoomInfo}
            options={{headerShown: false}}/>

        </Stack.Navigator>
    );
}
