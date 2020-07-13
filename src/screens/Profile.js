import React, { Component } from 'react';
import {Text, View,StyleSheet,Image,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

import * as ConstantURL from '../constant/Constant';

export default class Profile extends Component{

    constructor(props) {
        super(props);
        this.state = {
            realname:'',
            username: null,
            typeofuser: ''
        }
    }
    
    componentDidMount() {
        const {id_user} = this.props.route.params;
        if(id_user){
            axios.get(`${ConstantURL.IP_URL}${ConstantURL.USER_INFO_URL}/${id_user}`)
            .then((response) => {
                const data = response.data[0]; 

                this.setState({
                    realname: data.realname,
                    username: data.username,
                    typeofuser: data.type === 1 ? 'Admin Building' : 'Admin Room : ' + data.name
                });
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
    
    render(){
        
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.header_title}>{this.state.realname}</Text>
                    <Image style={styles.header_img} source={require('../assets/images/userinfo.png')}/>
                </View>
                <View style={styles.content}>
                    <View style={styles.profile_row}>
                        <View style={styles.profile_row_wrap_font}>
                            <FontAweSome name="user" size={30} color="#006600"/>
                        </View>
                        {
                            true && ! this.state.username ? 
                            (<ActivityIndicator style={styles.profile_row_text} size="large" color="blue"/>) :
                            (<Text style={styles.profile_row_text}>{this.state.username}</Text>)
                        }
                        <TouchableOpacity style={styles.profile_row_wrap_font} activeOpacity={0.5}
                        onPress={() => {
                            var dataEdit = {};
                            dataEdit.id = this.props.route.params.id_user;
                            dataEdit.realname = this.state.realname;
                            dataEdit.username = this.state.username;
                            this.props.navigation.navigate("EditProfile",{dataEdit: dataEdit});
                        }}>
                            <FontAweSome name="edit" size={24} color="#3180c2"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profile_row}>
                        <View style={styles.profile_row_wrap_font}>
                            <FontAweSome name="unlock-alt" size={30} color="#006600"/>
                        </View>
                        <Text style={styles.profile_row_text}>Password</Text>
                        <TouchableOpacity style={styles.profile_row_wrap_font} activeOpacity={0.5}
                        onPress={() => {
                            this.props.navigation.navigate("ChangePassword",{id: this.props.route.params.id_user});
                        }}>
                            <FontAweSome name="edit" size={24} color="#3180c2"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profile_row}>
                        <View style={styles.profile_row_wrap_font}>
                            <FontAweSome name="address-book" size={24} color="#006600"/>
                        </View>
                        <Text style={styles.profile_row_text}>{this.state.typeofuser}</Text>
                        <TouchableOpacity style={styles.profile_row_wrap_font} activeOpacity={0.5}
                        onPress={() => {
                            
                        }}>
                            {/* <FontAweSome name="edit" size={24} color="#3180c2"/> */}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.profile_row} activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigation.popToTop();
                        this.props.navigation.replace("Login");
                    }}>
                        <View style={styles.profile_row_wrap_font}>
                            <FontAweSome name="sign-out" size={30} color="#006600"/>
                        </View>
                        <Text style={styles.profile_row_text}>Log out</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.btn_edit} activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigation.navigate("EditProfile");
                    }}>
                        <Text style={styles.btn_edit_text}>EDIT</Text>
                    </TouchableOpacity> */}
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
    header_title: {
        color: "#fff",
        fontSize: 18,
        marginTop: 30
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
    },
    btn_edit: {
        marginVertical: 16,
        marginHorizontal: 60
    },
    btn_edit_text: {
        textAlign: "center",
        backgroundColor: "#1aaa1a",
        color: "#fff",
        borderRadius: 4,
        paddingVertical: 8
    }
});