import React, { Component } from 'react';
import {View,Text,ScrollView,ActivityIndicator,StyleSheet, Alert} from 'react-native';
import axios from 'axios';
import Icons from 'react-native-vector-icons/FontAwesome';

import ItemRemoveListDevice from '../components/ItemRemoveListDevice';
import * as Constant from '../constant/Constant';

class RemoveDevice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listDevice: null
        }
    }

    componentDidMount() {
        const {room_id} = this.props.route.params;
        axios.get(`${Constant.IP_URL}${Constant.GET_LIST_DEVICE}${room_id}`)
        .then((response) => {
            this.setState({
                listDevice: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    removeFunc = (id_device)=>{
        Alert.alert(
            '',
            'Are you sure you want to delete?',  
            [
               {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
               {text: 'OK', onPress: () => {
                    axios.delete(`${Constant.IP_URL}${Constant.DELETE_DEVICE_URL}/${id_device}`)
                    .then((response) => {
                        this.componentDidMount();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
               }},
            ],
            { cancelable: false }
       )
        
    }

    render(){
        const {room_name} = this.props.route.params;
        return (
            <View style={{flex: 1}}>
                <View style={styles.wrap_room_name}>
                    <View style={styles.inner_room_name}>
                        <View style={{flex: 1}}>
                            <Icons name="home" size={40} color="#fff" style={{marginLeft: 4}}/>
                        </View>
                        <View style={{flex: 6}}>
                            <Text style={styles.room_name}>{room_name}</Text>
                        </View> 
                        <View style={{flex: 1}}></View>
                    </View>
                </View>
                {
                    true && !this.state.listDevice? 
                    (
                        <View style={styles.container}>
                            <ActivityIndicator size="large" color="#0000ff"/>
                        </View>
                    ) :
                    (
                        <View style={{flex: 1}}>
                            {
                                true && this.state.listDevice.length <=0 ? 
                                (<View style={styles.container}>
                                    <Text style={{fontSize: 20}}>No device here</Text>
                                </View>):
                                (<ScrollView style={{marginTop: 48}}>
                                    {
                                        this.state.listDevice.map((value,index) => {
                                            return (
                                                <ItemRemoveListDevice 
                                                key={index}
                                                device_id={value.id}
                                                device_type={value.type}
                                                removeFunc = {this.removeFunc}
                                                />
                                            );
                                        })
                                    }
                                    <View style={{height: 50}}></View>
                                </ScrollView>)
                            }
                        </View>
                    )
                }
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    wrap_room_name: {
        backgroundColor:"#2A651B",
        position:"absolute",
        top: 0,
        left: 0,
        right: 0
    },
    inner_room_name : {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    room_name: {
        color: "#fff",
        textAlign:"center",
        paddingVertical: 10,
        fontSize: 16
    }
});

export default RemoveDevice;