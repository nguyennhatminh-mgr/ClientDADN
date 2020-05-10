import React from 'react';
import {View, Text ,Button} from 'react-native';

export default function Home({navigation}){
    return (
        <View>
            <Text>This is Home Screens</Text>
            <Button title="Navigate" onPress={() => navigation.navigate('InHome')}></Button>
        </View>
    );
}