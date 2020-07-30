import React from 'react';
import {View, Text ,Button,StyleSheet,Image,ScrollView} from 'react-native';
import ItemInHome from '../components/ItemInHome';
import setting_image from '../assets/images/setting.png';
import user_info from '../assets/images/userinfo.png';
import add_device from '../assets/images/add_device.png';
import room_info from '../assets/images/room_info.jpg';
import control_device from '../assets/images/control_device.jpg';
import history from '../assets/images/history.jpg';
import notification from '../assets/images/notification.png';
import * as Constant from '../constant/Constant';
import ItemNotify from '../components/ItemNotify';

export default function Home({navigation,route}){

    const {id_user} = route.params; 

    return (
        <ScrollView style={styles.container}>
            <View style={styles.rowinhome}>
                <ItemInHome id_user={id_user} navigation={navigation} screen="ListRoomControl" image={control_device} title="Control device"/>
                <ItemInHome id_user={id_user} navigation={navigation} screen="History" image={history} title="View history"/>
            </View>

            <View style={styles.rowinhome}>
                <ItemInHome id_user={id_user} navigation={navigation} screen="AddObject" image={add_device} title="Add device"/>
                <ItemInHome id_user={id_user} navigation={navigation} screen="AllRoom" image={room_info} title="View room"/>
            </View>
            {
                true && id_user === Constant.ID_ADMIN ? (
                    <View style={styles.rowinhome}>
                        <ItemInHome id_user={id_user} navigation={navigation} screen="SetLightLevel" image={setting_image} title="Config level"/>
                        <ItemInHome id_user={id_user} navigation={navigation} screen="Profile" image={user_info} title="User Info"/>
                    </View>
                ) : (
                    <View style={styles.rowinhome}>
                        {/* <ItemInHome id_user={id_user} navigation={navigation} screen="Notification" image={notification} title="Notifications"/> */}
                        <ItemNotify id_user={id_user} navigation={navigation} screen="Notification" image={notification} title="Notifications"/>
                        <ItemInHome id_user={id_user} navigation={navigation} screen="Profile" image={user_info} title="User Info"/>
                    </View>
                )
            }
            {
                 true && id_user === Constant.ID_ADMIN ? (
                    <View style={styles.rowinhome}>
                        {/* <ItemInHome id_user={id_user} navigation={navigation} screen="Notification" image={notification} title="Notifications"/> */}
                        <ItemNotify id_user={id_user} navigation={navigation} screen="Notification" image={notification} title="Notifications"/>
                        <View style={{flex: 1, marginHorizontal: 8}}></View>
                    </View>
                ) : null
            }
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