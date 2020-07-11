import React, { useState, useEffect } from 'react';
import { View, StyleSheet,Text,TouchableOpacity, Alert,ActivityIndicator } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Slider} from 'react-native-elements';

import axios from 'axios';

import * as Constant from '../../constant/Constant';

const listColor = ["#FAFE03","#E6E83E","#CACD13","#B4B612"];

const getIndex = (value) => {
    let index = 0;
    if(value >= 0 && value <64){
        index = 3;
    }
    else if(value >=64 && value < 128){
        index = 2;
    }
    else if (value >= 128 && value < 192){
        index = 1;
    }
    else{
        index = 0;
    }
    return index;
}

const getStatus = (value) => {
    if(value === 0){
        return "OFF";
    }
    else{
        return "ON";
    }
}

const ControlLight = props => {
    
    const [light_level,setLight_level]  = useState(null);
    
    const [status,setStatus] = useState(null);
    
    const [color,setColor] = useState(listColor[0]);

    useEffect(() => {
        const {device_id} = props.route.params;
        axios.get(`${Constant.IP_URL}${Constant.GET_LIGHT}${device_id}`)
        .then((response) => {
            setLight_level(response.data[0].value);
            let tempStatus = getStatus(response.data[0].value);
            setStatus(tempStatus);
            let tempIndex = getIndex(response.data[0].value);
            setColor(listColor[tempIndex]);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);
    
    const isValueChange = (value) => {
        setLight_level(value);
        let status = getStatus(value);
        let index = getIndex(value);
        setStatus(status);
        setColor(listColor[index]);
    }

    const handleSet = () => {
        let data = {};
        data.device_id = props.route.params.device_id;
        data.value = light_level;
        axios.post(`${Constant.IP_URL}${Constant.CONTROL_LIGHT}`,data)
        .then((response) => {
            if(response.data === "SUCCESS"){
                const {room_id,room_name} = props.route.params;
                Alert.alert("Set light success");
                props.navigation.goBack();
                props.navigation.goBack();
                props.navigation.navigate("ListDevice",{room_id: room_id,room_name:room_name});
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrap_room_name}>
                <View style={styles.inner_room_name}>
                    <View style={{flex: 1}}>
                        <FontAwesome name="home" size={40} color="#fff" style={{marginLeft: 4}}/>
                    </View>
                    <View style={{flex: 6}}>
                        <Text style={styles.room_name}>{props.route.params.room_name}</Text>
                    </View> 
                    <View style={{flex: 1}}></View>
                </View>
            </View>
            <View style={styles.wrap_room_name}>
                <View style={styles.inner_room_name}>
                    <View style={{flex: 1}}>
                        <Icons size={40} name="lightbulb-on" color={color} style={{marginLeft: 4}}/>
                    </View>
                    <View style={{flex: 6}}>
                        <Text style={styles.room_name}>{props.route.params.device_id}</Text>
                    </View> 
                    <View style={{flex: 1}}></View>
                </View>
            </View>
            <View style={styles.icon}>
                {
                    true && light_level>0 ?
                    (<Icons size={120} name="lightbulb-on" color={color}/>)
                    : (
                        <Icons size={120} name="lightbulb" color="#B4B612"/>
                    )
                }
            </View>
            <View style={styles.slider}>
                {
                    true && light_level == null ? (
                        <ActivityIndicator size="large" color="blue"/>
                    ) :
                    (
                        <Slider step={1}
                        maximumValue={255}
                        onValueChange = {isValueChange}
                        value={light_level}
                        thumbTintColor="#1aaa1a"
                        maximumTrackTintColor="red"
                        minimumTrackTintColor="black"
                        />
                    )
                }
            </View>
            <View style={styles.value}>
                <Text>Value : {light_level}</Text>
                <Text>Status : {status}</Text>
            </View>
            <View style={styles.value}>
                <TouchableOpacity style={styles.btn_set} activeOpacity={0.5}
                onPress={() => {
                    handleSet();
                    // props.navigation.goBack();
                    // props.navigation.goBack();
                    // props.navigation.navigate("ListDevice",{room_id: props.route.params.room_id});
                }}>
                    <Text style={styles.btn_set_text}>SET</Text>
                </TouchableOpacity>
            </View>
            {/* <Text>{props.route.params.device_id}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon : {
        flex: 2,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        borderRadius: 4,
        margin: 8,
        paddingHorizontal: 10
    },
    slider: {
        flex: 1,
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        borderRadius: 4,
        margin: 8,
        paddingHorizontal: 30,
        justifyContent: "center"
    },
    value: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        borderRadius: 4,
        margin: 8,
        paddingHorizontal: 10
    },
    btn_set: {
        marginHorizontal: 20,
        backgroundColor: "#3180c2",
        borderRadius: 8,
        paddingHorizontal: 80,
        paddingVertical: 14
    },
    btn_set_text: {
        color: "#fff"
    },
    wrap_room_name: {
        backgroundColor:"#2A651B",
        paddingVertical: 4,
        borderBottomColor: "#fff",
        borderBottomWidth: 1
    },
    inner_room_name : {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    room_name: {
        color: "#fff",
        textAlign:"center",
        paddingVertical: 10,
        fontSize: 16
    }
});

export default ControlLight;