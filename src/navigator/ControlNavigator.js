import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListRoom from '../screens/control_device/ListRoom';
import ListDevice from '../screens/control_device/ListDevice';

const Stack = createStackNavigator();

export default function ControlNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="ListRoom"
            component={ListRoom}
            options={{headerShown:false}}/>
            <Stack.Screen name="ListDevice" 
            component={ListDevice}
            options={{headerShown: false}}/>

        </Stack.Navigator>
    );
}