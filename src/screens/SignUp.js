import React, { Component } from 'react';
import {Text,View, StyleSheet,ImageBackground,Image,Alert} from 'react-native';
import axios from 'axios';

import FormSignUp from '../components/FormSignUp';
import * as ConstantURL from '../constant/Constant';

const SIGNUP_FAIL = 'SIGNUP_FAIL';

export default class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data_signup: null,
            showform: true
        }
    }
    
    handleSignUp = (data_signup,navigation) => {
        this.setState({
            data_signup: data_signup
        });
    }
    render(){
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bg_picture} source={require('../assets/images/backgroundlogin.png')}>
                    <View style={styles.wrap_logo}>
                        <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
                        <Text style={styles.title}>IOT LIGHT</Text>
                    </View>
                    <FormSignUp handleSignUp={this.handleSignUp} navigation={this.props.navigation}/>
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
        flex: 2,
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