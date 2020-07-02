import React, { useEffect, useState } from 'react';
import { View, Text,ActivityIndicator,TouchableOpacity,StyleSheet } from 'react-native';
import axios from 'axios';

import * as Constant from '../../constant/Constant';
import ItemInNotification from '../../components/ItemInNotification';
import { ScrollView } from 'react-native-gesture-handler';

const Notification = props => {
    const [listNotifications,setListNotifications] = useState(null);

    useEffect(() => {
        const {id_user} = props.route.params;
        axios.get(`${Constant.IP_URL}${Constant.GET_LIST_NOTIFICATION}${id_user}`)
        .then((response) => {
            // console.log(response.data);
            setListNotifications(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);

    const {id_user} = props.route.params;

    return (
        <View style={{flex: 1}}>
            {
                true && !listNotifications ? (
                    <View style={{flex: 1,justifyContent:"center",alignItems:"center"}}>
                        <ActivityIndicator size="large" color="blue"/>
                    </View>
                ) : (
                    <ScrollView>
                    {
                        listNotifications.map((value,index) => 
                            <ItemInNotification key={index} value={value} navigation={props.navigation}/>
                        )
                    }
                    <TouchableOpacity activeOpacity={0.5} style={styles.container}
                    onPress={() => {
                        setListNotifications(null);
                        axios.get(`${Constant.IP_URL}${Constant.GET_ALL_NOTIFICATION}${id_user}`)
                        .then((response) => {
                            // console.log(response.data);
                            setListNotifications(response.data);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    }}>
                        <Text style={styles.text_view_all}>View all</Text>
                    </TouchableOpacity>
                    </ScrollView>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 8,
        marginRight: 16
    },
    text_view_all: {
        textAlign:"right",
        fontSize: 17,
        color:"blue"
    }
});

export default Notification;