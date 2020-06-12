import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import History from '../screens/history/HistoryOp';
import Room from '../screens/history/ViewRoom';

const Stack = createStackNavigator();

export default function ViewHistory(){
    return(
        <Stack.Navigator initialRouteName="History">
            <Stack.Screen name="History" 
            component={History}
            options={{headerShown:false}}/>

            <Stack.Screen name="Room"
            component={Room}
            options={{headerShown:false}}/>
        </Stack.Navigator>

    )
}