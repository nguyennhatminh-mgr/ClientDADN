import React from 'react';
import {View, Text, Button} from 'react-native';

export default function InHome({navigation}){
    return (
        <View>
            <Text>This is InHome Screens</Text>
            <Button title="Back To Home" onPress={() => navigation.goBack()}></Button>
        </View>
    );
}