import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet, Dimensions,Alert ,ActivityIndicator} from 'react-native';
import axios from 'axios';

import * as Constant from '../constant/Constant';
import { ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler';
import ItemChooseRoom from '../components/ItemChooseRoom';

const height = Dimensions.get("window").height;
const SUCCESS = "SUCCESS";

function ChooseRoom({route,navigation}) {
    const [listRoom,setListRoom] = useState(null);
    const [dataSignup,setDataSignup] = useState();
    const [idRoomChosen,setIdRoomChosen] = useState();

    useEffect(() => {
        axios.get(`${Constant.IP_URL}${Constant.LIST_ROOM_NOT_OWNER}`)
        .then((response) => {
            setListRoom(response.data);
        })
    },[]);

    const getRoomChosen = (id_room) => {
        var data_signup = {...route.params.data_signup};
        data_signup.id_room = id_room;
        setDataSignup(data_signup);
        setIdRoomChosen(id_room);
    }

    const handleSignup = () => {
        if(!dataSignup){
            Alert.alert("Please choose room!!!");
            return;
        }
        axios.post(`${Constant.IP_URL}${Constant.SIGNUP_URL}`,dataSignup)
        .then((response) => {
            var data_signup = {...route.params.data_signup};

            if(response.data === SUCCESS){
                navigation.popToTop();
                navigation.replace("Login",{username: data_signup.username, password: data_signup.password});
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <View>
            <ScrollView style={{height: height-135}}>
                <View>
                    {
                        true && listRoom === null ? (
                            <View style={{marginTop: 60}}>
                                <ActivityIndicator size="large" color="blue"/>
                            </View>
                        ) : (
                            listRoom.map((value,index) => {
                                if(value.id === idRoomChosen){
                                    return (
                                        <ItemChooseRoom key={index} isChosen={true} getRoomChosen={getRoomChosen} id_room={value.id} name_room={value.name}/>
                                    );
                                }
                                else{
                                    return (
                                        <ItemChooseRoom key={index} isChosen={false} getRoomChosen={getRoomChosen} id_room={value.id} name_room={value.name}/>
                                    );
                                }
                            })
                        )

                    }
                </View>
                <View style={{height: 100}}></View>
            </ScrollView>
            <View style={styles.wrap_btn_signup}>
                <TouchableOpacity style={styles.btn_signup} activeOpacity={0.7}
                onPress={() => {
                    handleSignup();
                }}>
                    <Text style={styles.text_btn_signup}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap_btn_signup: {
        height: 50,
        margin: 4,
        marginHorizontal: 8
    },
    btn_signup: {
        backgroundColor:"#ff66a3",
        height: "100%",
        borderRadius: 10,
        paddingTop: 11
    },
    text_btn_signup: {
        color: "#fff",
        textAlign:"center"
    }
});

export default ChooseRoom;