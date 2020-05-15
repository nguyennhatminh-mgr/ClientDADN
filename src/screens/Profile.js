import React, { Component } from 'react';
import {Text, View,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import FontAweSome from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.header_img} source={require('../assets/images/userinfo.png')}/>
                </View>
                <View style={styles.content}>
                    <View style={styles.profile_row}>
                        <View style={styles.profile_row_wrap_font}>
                            <FontAweSome name="user" size={30} color="#006600"/>
                        </View>
                        <Text style={styles.profile_row_text}>Gmail</Text>
                    </View>
                    <View style={styles.profile_row}>
                        <View style={styles.profile_row_wrap_font}>
                            <FontAweSome name="unlock-alt" size={30} color="#006600"/>
                        </View>
                        <Text style={styles.profile_row_text}>Password</Text>
                    </View>
                    <View style={styles.profile_row}>
                        <View style={styles.profile_row_wrap_font}>
                            <FontAweSome name="address-book" size={24} color="#006600"/>
                        </View>
                        <Text style={styles.profile_row_text}>Type of user</Text>
                    </View>
                    <TouchableOpacity style={styles.profile_row} activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigation.replace("Login");
                    }}>
                        <View style={styles.profile_row_wrap_font}>
                            <FontAweSome name="sign-out" size={30} color="#006600"/>
                        </View>
                        <Text style={styles.profile_row_text}>Log out</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        backgroundColor: "#1aaa1a",
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        alignItems:"center"
    },
    header_img: {
        width: 80,
        height:80,
        borderRadius: 40,
        backgroundColor: "#fff",
        position: "absolute",
        bottom: -30
    },
    content: {
        flex: 3,
        marginTop: 40
    },
    profile_row: {
        flexDirection: "row",
        paddingVertical: 16,
        alignItems:"center",
        borderBottomColor: "#999",
        borderBottomWidth:1
    },
    profile_row_wrap_font:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    },
    profile_row_text: {
        flex: 6
    }
});