import React, { Component } from 'react';
import {Image, View, TextInput,StyleSheet, TouchableOpacity,Text,ActivityIndicator,Alert} from 'react-native';
import axios from 'axios';

import * as Constant from '../constant/Constant';
const LOGIN_FAIL = 'LOGIN_FAIL';

export default class FormLogin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            password: this.props.password,
            isSuccess : true
        }
    }

    handleLogin = (data_login,navigation) => {
        this.setState({
            isSuccess: false
        });
        axios.post(`${Constant.IP_URL}${Constant.LOGIN_URL}`,data_login).then((response) => {
            if(response.data === LOGIN_FAIL){
                Alert.alert('Login failed','Please check your username or password');
                this.setState({
                    isSuccess: true
                });
            }
            else{
                navigation.replace("Home",{id_user: response.data});
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    isChangeUsername = (username) => {
        this.setState({
            username: username
        });
    }

    isChangePassword = (password) => {
        this.setState({
            password: password
        });
    }
    
    render(){
        const {username,password} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.wrap_input}>
                    <Image style={styles.icon_input} source={require('../assets/images/username.png')}/>
                    <TextInput defaultValue={username} onChangeText={(username) => this.isChangeUsername(username)} name="username" style={styles.username_input} placeholder="Username" placeholderTextColor="#D5E3E8"/>
                </View>
                <View style={styles.wrap_input}>
                    <Image style={styles.icon_input} source={require('../assets/images/password.png')}/>
                    <TextInput defaultValue={password} secureTextEntry={true} onChangeText={(password) => this.isChangePassword(password)} name="password" style={styles.username_input} placeholder="Password" placeholderTextColor="#D5E3E8"/>
                </View>
                <View>
                    {
                        true && this.state.isSuccess ? (
                            <TouchableOpacity style={styles.btn_submit}
                            onPress={() => {
                                var data_login = {};
                                data_login.username = this.state.username;
                                data_login.password = this.state.password;
                                this.handleLogin(data_login,this.props.navigation);
                                // this.props.navigation.replace("Home");
                            }}>
                                <Text style={styles.text_btn_submit}>LOGIN</Text>
                            </TouchableOpacity>
                        ) : (
                            <ActivityIndicator color="blue" size="large"/>
                        )
                    }
                        
                </View>
                <View style={styles.create_account}>
                    <TouchableOpacity>
                        <Text onPress={() => {
                            this.props.navigation.replace("SignUp");
                        }} style={styles.create_account_text}>Create Account</Text>
                    </TouchableOpacity>
                    <Text onPress={() => {
                        this.props.navigation.navigate("ForgotPass");
                    }}
                    style={styles.create_account_text}>Forgot Password?</Text>
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
    username_input: {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        padding: 10,
        paddingLeft: 45,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 20,
        color: "#fff"
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