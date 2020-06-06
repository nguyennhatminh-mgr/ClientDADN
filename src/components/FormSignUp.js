import React, { Component } from 'react';
import {Image, View, TextInput,StyleSheet, TouchableOpacity,Text,Picker, Alert} from 'react-native';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

import * as ConstantURL from '../constant/Constant';

const SIGNUP_FAIL = 'SIGNUP_FAIL';

export default class FormSignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTypeUser : "adbuilding",
            realname: '',
            username: '',
            password: '',
            retypepassword: '',
            check_retypepassword: false,
            next_success: false
        }
    }

    isChangeRealName = (realname) => {
        this.setState({
            realname: realname
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
        this.checkRetypePassword(password,this.state.retypepassword);
    }

    isChangeRetypePassword = (retypepassword) => {
        this.setState({
            retypepassword: retypepassword
        });
        this.checkRetypePassword(this.state.password,retypepassword);
    }

    checkRetypePassword = (password,retypepassword) => {

        if(password === retypepassword){
            this.setState({
                check_retypepassword: true
            });
        }
        else{
            this.setState({
                check_retypepassword: false
            });
        }
    }

    isShowCheckedIcon = () => {
        if(this.state.check_retypepassword){
            return (
                <FontAweSome style={styles.icon_check_retype} name="check-circle" size={30} color="green"/>
            );
        }
        else{
            return null;
        }
    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    validatePassword = (password) => {
        var re = /[0-9a-zA-Z]{8,}/;
        return re.test(password);
    }

    handleNext = (data_signup,navigation) => {
        axios.post(`${ConstantURL.IP_URL}${ConstantURL.USERNAME_EXIST_URL}`,data_signup)
        .then((response) => {
            if(response.data === SIGNUP_FAIL){
                Alert.alert("Email is exist, please choose other gmail!!!");
            }
            else{
                navigation.navigate("ChooseRoom",{data_signup:data_signup});
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    handleAsyncForNext = async (data_signup,navigation) => {
        await this.handleNext(data_signup,navigation);

        this.props.handleSignUp(data_signup,navigation);
        // if(this.state.next_success){
        //     this.props.handleSignUp(data_signup,navigation);
        //     Alert.alert("Success");
        // }
    }
    
    render(){
        const {navigation,handleSignUp} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.wrap_input}>
                    <Image style={styles.icon_input} source={require('../assets/images/username.png')}/>
                    <TextInput onChangeText={(realname) => {this.isChangeRealName(realname)}} style={styles.email_input} name="realname" placeholder="Name"/>
                </View>
                <View style={styles.wrap_input}>
                    <Image style={styles.icon_input} source={require('../assets/images/username.png')}/>
                    <TextInput onChangeText={(username) => {this.isChangeUsername(username)}} style={styles.email_input} name="username" placeholder="Email"/>
                </View>
                <View style={styles.wrap_input}>
                    <Image style={styles.icon_input} source={require('../assets/images/password.png')}/>
                    <TextInput onChangeText={(password) => {this.isChangePassword(password)}} secureTextEntry={true} name="password" style={styles.email_input} placeholder="Password"
                    />
                </View>
                <View style={styles.wrap_input}>
                    <Image style={styles.icon_input} source={require('../assets/images/password.png')}/>
                    <TextInput onChangeText={(retypepassword) => {this.isChangeRetypePassword(retypepassword)}} secureTextEntry={true} name="retypepassword" style={styles.email_input} placeholder="Retype Password"/>
                    {
                        this.isShowCheckedIcon()
                    }
                </View>
                {/* <View style={styles.typeuser}>
                    <Picker selectedValue={this.state.selectedTypeUser}
                    style={styles.typeuserpicker}
                    itemStyle={styles.typeuserpickeritem}
                    onValueChange={(itemValue,itemIndex) => {this.setState({selectedTypeUser: itemValue})}}>
                        <Picker.Item label="Admin Building" value="adbuilding"/>
                        <Picker.Item label="Admin Room" value="adroom"/>
                    </Picker>
                </View> */}
                <View>
                    <TouchableOpacity style={styles.btn_submit}
                    onPress={() => {
                        var data_signup = {};
                        data_signup.realname = this.state.realname;
                        data_signup.username = this.state.username;
                        data_signup.password = this.state.password;

                        if(!this.state.realname){
                            Alert.alert("Name is not null");
                            return;
                        }

                        if(!this.validateEmail(this.state.username)){
                            Alert.alert("Email is wrong format");
                            return;
                        }

                        if(!this.validatePassword(this.state.password)){
                            Alert.alert("Password is at least 8 characters");
                            return;
                        }

                        if (!this.state.check_retypepassword){
                            Alert.alert("Password and Retype password are not same");
                            return;
                        }

                        this.handleAsyncForNext(data_signup,navigation);
                        
                        // this.props.navigation.replace("Home");
                    }}>
                        <Text style={styles.text_btn_submit}>NEXT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.create_account}>
                    <Text style={styles.create_account_text}>Have Already Account?</Text>
                    <Text onPress={() => {
                        this.props.navigation.replace("Login");
                    }} style={styles.create_account_text_blue}>Login</Text>
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
    icon_check_retype: {
        position: "absolute",
        top: 9,
        right: 16
    }
    ,
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
        marginTop: 12
    },
    create_account_text: {
        color: "white",
        marginRight: 8
    },
    create_account_text_blue: {
        color: "#ff66a3"
    },
    typeuser: {
        borderRadius: 20,
        marginBottom: 12,
        overflow: "hidden",
        marginHorizontal: 8,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        paddingHorizontal: 8
    },
    typeuserpicker: {
        color: "white"
    },
    typeuserpickeritem: {
        backgroundColor: "#ff66a3"
    }
});