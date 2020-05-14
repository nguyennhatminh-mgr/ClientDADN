import React from 'react';
import {View, Text ,Button,StyleSheet} from 'react-native';

export default function Home({navigation}){
    return (
        <View>
            <Text>This is Home Screens</Text>
            <Button
            title="Navigate"
            onPress={() => navigation.navigate('InHome')}
            ></Button>
            <View style={{marginTop: 20}}>
                <Button title="Go to profile" onPress={() => navigation.navigate('Profile')}></Button>
            </View>
            <View style={{marginTop: 20}}>
                <Button title="add Object" onPress={() => navigation.navigate('AddObject')}></Button>
            </View>
        </View>
    );
}