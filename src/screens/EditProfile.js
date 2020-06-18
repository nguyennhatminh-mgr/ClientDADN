import React, { useState } from 'react';
import { View,TextInput,StyleSheet,Text,TouchableOpacity,Image,Alert,ScrollView} from 'react-native';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import axios from 'axios';

import * as Constant from '../constant/Constant';

const EditProfile = props => {

    const {dataEdit} = props.route.params;

    const [realname,setRealname] = useState(dataEdit.realname);
    const [username,setUsername] = useState(dataEdit.username);

    const isChangeRealname = (realname) => {
        setRealname(realname);
    }

    const isChangeUsername = (username) => {
        setUsername(username);
    }

    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const handleChange = () => {

        if(!validateEmail(username)){
            Alert.alert("Email is wrong format!");
            return;
        }

        var data = {};
        data.id = dataEdit.id;
        data.realname = realname;
        data.username = username;

        axios.post(`${Constant.IP_URL}${Constant.EDIT_NAME}`,data)
        .then((response) => {
            const result = response.data;
            if(result === "SUCCESS"){
                props.navigation.goBack();
                props.navigation.goBack();
                props.navigation.navigate("Profile",{id_user: dataEdit.id});
            }
            else{
                Alert.alert("Change is failed");
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrap_img}>
                <Image style={styles.img} source={require('../assets/images/change_username.png')}/>
            </View>
            <View>
                <View style={styles.row}>
                    <View style={styles.wrap_row_icon}>
                        <FontAweSome style={styles.row_icon} name="user" size={30} color="#006600"/>
                    </View>
                    <View style={styles.wrap_row_input}>
                        <TextInput onChangeText={(realname) => {isChangeRealname(realname)}} defaultValue={dataEdit.realname} style={styles.row_input} placeholder="Real name"/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.wrap_row_icon}>
                        <Zocial style={styles.row_icon} name="email" size={26} color="#006600"/>
                    </View>
                    <View style={styles.wrap_row_input}>
                        <TextInput onChangeText={(username) => {isChangeUsername(username)}} defaultValue={dataEdit.username} style={styles.row_input} placeholder="Email"/>
                    </View>
                </View>
                <TouchableOpacity style={styles.wrap_btn_change} activeOpacity={0.5}
                onPress={() => {
                    handleChange();
                }}>
                    <Text style={styles.btn_change}>CHANGE</Text>
                </TouchableOpacity>            
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8
    },
    wrap_img : {
        flex: 1,
        alignItems:"center",
        marginBottom: 20,
        marginTop: 20
    },
    img:{
        height: 200,
        width: 200
    },
    row: {
        flexDirection: "row",
        marginVertical: 16
    },
    wrap_row_icon: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    },
    row_icon: {
        marginRight: 8
    },
    wrap_row_input: {
        flex: 6
    },
    row_input: {
        borderBottomColor: "#999",
        borderBottomWidth: 1,
        fontSize: 16
    },
    wrap_btn_change: {
        paddingHorizontal: 16,
        marginTop: 16
    },
    btn_change: {
        textAlign:"center",
        backgroundColor: "#3180c2",
        color: "#fff",
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 8
    }
});

export default EditProfile;