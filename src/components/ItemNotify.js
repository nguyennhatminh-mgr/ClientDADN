import React, { Component } from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import axios from 'axios';

import * as Constant from '../constant/Constant';

export default class ItemNotify extends Component{
    constructor(props) {
        super(props);
        this.state = {
            numOfNotification: 0
        }
    }
    
    componentDidMount() {
        const {id_user} = this.props;
        axios.get(`${Constant.IP_URL}${Constant.NUM_NOTIFICATION}${id_user}`)
        .then((response) => {
            // console.log(response.data.num_notification);
            this.setState({
                numOfNotification: response.data[0].num_notification
            });
        })
        .catch((error) => {
            console.log(error);
        })

        setInterval(() => {
            axios.get(`${Constant.IP_URL}${Constant.NUM_NOTIFICATION}${id_user}`)
            .then((response) => {
                // console.log(response.data.num_notification);
                this.setState({
                    numOfNotification: response.data[0].num_notification
                });
            })
            .catch((error) => {
                console.log(error);
            })
        },60000);
    }
    
    render(){
        const {image,title,screen,id_user} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.5} style={styles.container}
            onPress={() => {
                this.props.navigation.navigate(screen,{id_user: id_user});
            }}>
                <View style={styles.rowinhomeitem}>
                    <Image style={styles.rowinhomeitemimg} source={image}/>
                    <Text>{title}</Text>
                    {
                        true && this.state.numOfNotification > 0 ? (
                            <Text style={styles.num_notify}>{this.state.numOfNotification}</Text>
                        ) : null
                    }
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        borderRadius: 4
    },
    rowinhomeitem: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        position:"relative"
    },
    rowinhomeitemimg: {
        width: 60,
        height: 60
    },
    num_notify: {
        position:"absolute",
        left: "70%",
        top: "40%",
        padding: 8,
        borderRadius: 22,
        backgroundColor:"red",
        zIndex: 4,
        color:"white"
    }
});