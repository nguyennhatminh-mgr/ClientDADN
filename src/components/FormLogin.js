import React, { Component } from 'react';
import {Image, View, TextInput,StyleSheet, TouchableOpacity,Text} from 'react-native';

export default class FormLogin extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.wrap_input}>
                    <Image style={styles.icon_input} source={require('../assets/images/username.png')}/>
                    <TextInput style={styles.email_input} placeholder="Email"/>
                </View>
                <View style={styles.wrap_input}>
                    <Image style={styles.icon_input} source={require('../assets/images/password.png')}/>
                    <TextInput secureTextEntry={true} style={styles.email_input} placeholder="Password"/>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn_submit}
                    onPress={() => {
                        this.props.navigation.replace("Home");
                    }}>
                        <Text style={styles.text_btn_submit}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.create_account}>
                    <Text onPress={() => {
                        this.props.navigation.replace("SignUp");
                    }} style={styles.create_account_text}>Create Account</Text>
                    <Text style={styles.create_account_text}>Forgot Password?</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3
    },
    wrap_input: {
        position:"relative",
        marginBottom: 12
    },
    icon_input: {
        width: 30,
        height: 30,
        position: "absolute",
        top: 9,
        left: 16
    },
    email_input: {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        padding: 10,
        paddingLeft: 45,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 20,
        color: "white"
    },
    btn_submit: {
        marginHorizontal: 8,
        padding: 12,
        borderRadius: 20,
        backgroundColor: "#ff66a3"
    },
    text_btn_submit: {
        color: "white",
        textAlign: "center"
    },
    create_account: {
        flexDirection: "row",
        marginHorizontal: 12,
        flex: 1,
        justifyContent: "space-between",
        marginTop: 12
    },
    create_account_text: {
        color: "white"
    }
});