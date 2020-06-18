import React, { Component } from 'react';
import {View,Text,ScrollView,ActivityIndicator,StyleSheet} from 'react-native';
import axios from 'axios';
import Icons from 'react-native-vector-icons/FontAwesome';

import ItemInListDevice from '../../components/ItemInListDevice';
import * as Constant from '../../constant/Constant';

class ListDevice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listDevice: null
        }
    }

    componentDidMount() {
        const {room_id} = this.props.route.params;
        axios.get(`${Constant.IP_URL}${Constant.GET_LIST_LIGHT}${room_id}`)
        .then((response) => {
            this.setState({
                listDevice: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
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
                    true && !this.state.listDevice ? 
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
                                                <ItemInListDevice key={index} device_id={value.id} 
                                                value={value.value} received_time={0}
                                                navigation={this.props.navigation}
                                                room_id={this.props.route.params.room_id}
                                                room_name={room_name}/>
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

export default ListDevice;