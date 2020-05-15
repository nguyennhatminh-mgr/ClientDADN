import React, { Component } from 'react';
import {Text,View, StyleSheet,ImageBackground,Image} from 'react-native';
import FormSignUp from '../components/FormSignUp';

export default class SignUp extends Component{
    render(){
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bg_picture} source={require('../assets/images/backgroundlogin.png')}>
                    <View style={styles.wrap_logo}>
                        <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
                        <Text style={styles.title}>IOT LIGHT</Text>
                    </View>
                    <FormSignUp navigation={this.props.navigation}/>
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