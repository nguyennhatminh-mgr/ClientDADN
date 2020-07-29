import React, { Component } from 'react';
import {View,Text,StyleSheet,ScrollView,ActivityIndicator, Alert} from 'react-native';
import axios from 'axios';

import ItemRemoveListRoom from '../components/ItemRemoveListRoom';
import * as Constant from '../constant/Constant';
// let listRoom = ["1","2","3","4"];

class removeRoom extends Component{
    constructor(props) {
        super(props);
        this.state= {
            listRoom: null
        }
    }

    componentDidMount(){
        const {id_user} = this.props.route.params;
        axios.get(`${Constant.IP_URL}${Constant.GET_LIST_ROOM_CONTROL}${id_user}`)
        .then((response) => {
            this.setState({
                listRoom: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    removeRoomFunc = (id_room)=>{
        Alert.alert(
            '',
            'Are you sure you want to delete?',  
            [
               {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
               {text: 'OK', onPress: () => {
                    axios.delete(`${Constant.IP_URL}${Constant.DELETE_ROOM_URL}/${id_room}`)
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
        const {navigation} = this.props;
        return (
            <View style={{flex: 1}}>
                {
                    true && !this.state.listRoom ?
                    (<View style={styles.container}>
                        <ActivityIndicator size="large" color="#0000ff"/>
                    </View>) :
                    (
                        <ScrollView>
                            {
                                this.state.listRoom.map((value,index) => {
                                    return (
                                        <ItemRemoveListRoom navigation={navigation} 
                                        key={index} 
                                        room_name={value.name} 
                                        room_id={value.id_room}
                                        removeRoomFunc = {this.removeRoomFunc}
                                        />
                                    );
                                })
                            }
                        </ScrollView>
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

export default removeRoom;