import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../screens/addObject';

const Stack = createStackNavigator();

export default function AddNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Add"
            component={Menu}
            options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}