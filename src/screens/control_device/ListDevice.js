import React, { Component } from 'react';
import {View,Text,ScrollView,ActivityIndicator,StyleSheet} from 'react-native';
import axios from 'axios';

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
        return (
            <View style={{flex: 1}}>
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
                                (<ScrollView>
                                    {
                                        this.state.listDevice.map((value,index) => {
                                            return (
                                                <ItemInListDevice key={index} device_id={value.id} 
                                                value={0} received_time={0}
                                                navigation={this.props.navigation}
                                                room_id={this.props.route.params.room_id}/>
                                            );
                                        })
                                    }
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
    }
});

export default ListDevice;