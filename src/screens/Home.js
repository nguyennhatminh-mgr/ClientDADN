import React from 'react';
import {View, Text ,Button,StyleSheet,Image,ScrollView} from 'react-native';
import ItemInHome from '../components/ItemInHome';
import setting_image from '../assets/images/setting.png';
import user_info from '../assets/images/userinfo.png';
import add_device from '../assets/images/add_device.png';
import room_info from '../assets/images/room_info.jpg';
import control_device from '../assets/images/control_device.jpg';
import history from '../assets/images/history.jpg';

export default function Home({navigation}){
    return (
        <ScrollView style={styles.container}>
            <View style={styles.rowinhome}>
                <ItemInHome navigation={navigation} screen="Profile" image={control_device} title="Control device"/>
                <ItemInHome navigation={navigation} screen="Home" image={history} title="View history"/>
            </View>

            <View style={styles.rowinhome}>
                <ItemInHome navigation={navigation} screen="AddObject" image={add_device} title="Add device"/>
                <ItemInHome navigation={navigation} screen="Profile" image={room_info} title="View room"/>
            </View>
            <View style={styles.rowinhome}>
                <ItemInHome navigation={navigation} screen="Profile" image={setting_image} title="Set light level"/>
                <ItemInHome navigation={navigation} screen="Profile" image={user_info} title="User Info"/>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowinhome: {
        flexDirection: "row"
    }
});