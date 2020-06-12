import React, { Component } from 'react';
import {View, Text ,TouchableOpacity,ScrollView, StyleSheet} from 'react-native';
import { render } from 'react-dom';
import * as ConstantURL from '../../constant/Constant';
import Axios from 'axios';

const Items = ({name,id,owner,onClick}) => {
    return (
            <TouchableOpacity style={Styles.blockItem} onPress={onClick}>
                <View style={Styles.item}>
                    <Text> Room {name}</Text>
                    <Text> ID: {id}</Text>
                    <Text> User: {owner} </Text>
                </View>
            </TouchableOpacity>
    );
}

export default class HistoryOp extends Component{
    constructor(props){
        super(props);
        this.state = {
            listRoom : [],
        }
    }

    componentDidMount(){
        Axios.get(`${ConstantURL.IP_URL}${ConstantURL.VIEW_HISTORY_URL}`).then((res) => {
            this.setState({
                listRoom: res.data
            });
        }).catch((error) =>{
            console.log(error);
        })
    }


    render() {
        const {navigation} = this.props;
                    let data = {
                        idRoom: '',
                        name: '',
                        owner: '',
                    }
        return(
            <ScrollView style={Styles.listContainer}>
                <Text style={Styles.title}>List Room</Text>
                {
                    
                    this.state.listRoom.map(item =>(
                        <View style={Styles.container} key={item.id}>
                            <Items name={item.name} id={item.id} owner={item.owner} onClick={()=>{
                                data.idRoom = item.id;
                                data.name = item.name;
                                data.owner = item.owner;
                                navigation.navigate("Room",data);
                            }}></Items>
                        </View>
                    ))
                }
            </ScrollView>
        );
    }
}

const Styles = StyleSheet.create({
    listContainer: {
        flex:1,
    },
    title: {
        flex:1,
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 30,
        textAlign:'center',
        alignItems: 'center',
        // fontFamily:'Times New Roman'
    },
    
    blockItem:{
        flex: 1,
        margin: 8,
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        borderRadius: 4,
        justifyContent:'center',
    },

    container:{
        flex:1,
        flexDirection:'row',
    }
})
