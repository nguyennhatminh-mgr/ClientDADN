import React, { useEffect, useState } from 'react';
import { View, Text,ActivityIndicator } from 'react-native';
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
                            <ItemInNotification key={index} value={value}/>
                        )
                    }
                    </ScrollView>
                )
            }
        </View>
    );
};



export default Notification;