import React, { Component } from 'react';
import {Image, View, TextInput,StyleSheet, TouchableOpacity,Text,Picker} from 'react-native';
import FontAweSome from 'react-native-vector-icons/FontAwesome';

export default class FormSignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTypeUser : "adbuilding"
        }
    }
    
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
                <View style={styles.wrap_input}>
                    <Image style={styles.icon_input} source={require('../assets/images/password.png')}/>
                    <TextInput secureTextEntry={true} style={styles.email_input} placeholder="Retype Password"/>
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
                        this.props.navigation.replace("Home");
                    }}>
                        <Text style={styles.text_btn_submit}>SIGN UP</Text>
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