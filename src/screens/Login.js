import React, { Component } from 'react';
import {View, Image, StyleSheet,ImageBackground, Text,Alert} from 'react-native';
import axios from 'axios';

import FormLogin from '../components/FormLogin';
import * as ConstantURL from '../constant/Constant';

const LOGIN_FAIL = 'LOGIN_FAIL';

export default class Login extends Component{

    handleLogin = (data_login,navigation) => {
        axios.post(`${ConstantURL.IP_URL}${ConstantURL.LOGIN_URL}`,data_login).then((response) => {
            if(response.data === LOGIN_FAIL){
               
                Alert.alert('Login failed','Please check your username or password');
            }
            else{
               
                navigation.replace("Home",{id_user: response.data});
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    
    render(){
        let username=null;
        let password=null;
        if(this.props.route.params){
            username = this.props.route.params.username;
            password = this.props.route.params.password;
        }
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bg_picture} source={require('../assets/images/backgroundlogin.png')}>
                    <View style={styles.wrap_logo}>
                        <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
                        <Text style={styles.title}>IOT LIGHT</Text>
                    </View>
                    <FormLogin username={username} password={password} handleLogin={this.handleLogin} navigation={this.props.navigation}/>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bg_picture: {
        flex: 1,
        resizeMode: 'cover'
    },
    wrap_logo: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    title: {
        color: "white",
        fontWeight: "bold",
        marginTop: 20,
        backgroundColor: "transparent"
    }
});