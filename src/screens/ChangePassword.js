import React, { useState } from 'react';
import { View,StyleSheet,TextInput,TouchableOpacity,Text,Image, Alert,ToastAndroid,ScrollView } from 'react-native';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

import * as Constant from '../constant/Constant';

function ChangePassword(props) {
    const {id} = props.route.params;

    const [oldPassword,setOldPassword] = useState();
    const [newPassword,setNewPassword] = useState();
    const [retypePassword,setRetypePassword] = useState();

    const isChangeOldPassword = (oldPassword) => {
        setOldPassword(oldPassword);
    }

    const isChangeNewPassword = (newPassword) => {
        setNewPassword(newPassword);
    }

    const isChangeRetypePassword = (retypePassword) => {
        setRetypePassword(retypePassword);
    }

    const validatePassword = (password) => {
        var re = /[0-9a-zA-Z]{8,}/;
        return re.test(password);
    }

    const handleChange = () => {

        if(newPassword !== retypePassword){
            Alert.alert("New password and retype password is different");
            return;
        }

        if(!validatePassword(newPassword)){
            Alert.alert("Password is at least 8 characters!");
            return;
        }

        var data = {};
        data.id = id;
        data.oldPass = oldPassword;
        data.newPass = newPassword;

        axios.post(`${Constant.IP_URL}${Constant.CHECK_PASSWORD}`,data)
        .then((response) => {
            if(response.data.length>0){
                axios.post(`${Constant.IP_URL}${Constant.CHANGE_PASSWORD}`,data)
                .then((response) => {
                    if(response.data === "SUCCESS"){
                        props.navigation.goBack();
                        ToastAndroid.showWithGravity(
                            "Change password success",
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER
                        );
                    }
                    else{
                        Alert.alert("Change password failed!");
                    }
                })
            }
            else{
                Alert.alert("Old password is wrong!!!");
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <ScrollView style="container">
            <View style={styles.wrap_img}>
                <Image style={styles.img} source={require('../assets/images/change_password.png')} />
            </View>
            <View style={styles.wrap_all_row}>
                <View style={styles.row}>
                    <View style={styles.wrap_row_icon}>
                        <FontAweSome name="lock" size={30} color="#006600"/>
                    </View>
                    <View style={styles.wrap_row_input}>
                        <TextInput onChangeText={(oldPass) => {isChangeOldPassword(oldPass)}} secureTextEntry={true} style={styles.row_input} placeholder="Old Password"/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.wrap_row_icon}>
                        <FontAweSome name="unlock-alt" size={30} color="#006600"/>
                    </View>
                    <View style={styles.wrap_row_input}>
                        <TextInput onChangeText={(newPass) => {isChangeNewPassword(newPass)}} secureTextEntry={true} style={styles.row_input} placeholder="New Password"/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.wrap_row_icon}>
                        <FontAweSome name="unlock-alt" size={30} color="#006600"/>
                    </View>
                    <View style={styles.wrap_row_input}>
                        <TextInput onChangeText={(retypePass) => {isChangeRetypePassword(retypePass)}} secureTextEntry={true} style={styles.row_input} placeholder="Retype new Password"/>
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
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flex: 1
    },
    wrap_img:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        marginBottom: 30,
        marginTop: 30
    },
    img: {
        width: 150,
        height: 150
    },
    wrap_all_row:{
        
    },
    row: {
        flexDirection: "row",
        marginVertical: 16,
        paddingRight: 16
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

export default ChangePassword;