import React,{useState,useEffect} from 'react';
import { View,TextInput,StyleSheet,Text,TouchableOpacity,Image,Alert,ScrollView,ActivityIndicator} from 'react-native';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import axios from 'axios';

import * as Constant from '../constant/Constant';

const ForgotPass = props => {

    const [email,setEmail] = useState(null);
    const [isSuccess,setIsSuccess] = useState(true);

    const isChangeEmail = (email) => {
        setEmail(email);
    }

    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const handleChange = () => {

        if(!validateEmail(email)){
            Alert.alert("Email is wrong format!");
            return;
        }

        setIsSuccess(false);

        axios.post(`${Constant.IP_URL}${Constant.FORGOT_PASSWORD}`,{email: email})
        .then((response) => {
           if(response.data === "SUCCESS"){
               setIsSuccess(true);
               props.navigation.goBack();
               Alert.alert("New password is sent to your email, please check your email");
           }
           else if(response.data === "FAILED"){
               setIsSuccess(true);
               Alert.alert("Your email is wrong!!!");
           }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrap_img}>
                <Image style={styles.img} source={require('../assets/images/forgot_pass.png')}/>
            </View>
            <View>
                <View style={styles.row}>
                    <View style={styles.wrap_row_icon}>
                        <FontAweSome style={styles.row_icon} name="user" size={30} color="#006600"/>
                    </View>
                    <View style={styles.wrap_row_input}>
                        <TextInput onChangeText={(email) => {isChangeEmail(email)}} style={styles.row_input} placeholder="Email"/>
                    </View>
                </View>
                {
                    isSuccess ? (
                        <TouchableOpacity style={styles.wrap_btn_change} activeOpacity={0.5}
                        onPress={() => {
                            handleChange();
                        }}>
                            <Text style={styles.btn_change}>SUBMIT</Text>
                        </TouchableOpacity>            
                    ) : (
                        <ActivityIndicator size="large" color="blue"/>
                    )
                }
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
        width: "90%"
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


export default ForgotPass;