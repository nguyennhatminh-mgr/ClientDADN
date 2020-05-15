import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../screens/addObject';
import AddSensor from '../screens/addSensor';


const Stack = createStackNavigator();

export default function AddNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="AddMenu"
            component={Menu}
            options={{headerShown:false}}/>
        
            <Stack.Screen name="AddSensor"
            component={AddSensor}
            options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}