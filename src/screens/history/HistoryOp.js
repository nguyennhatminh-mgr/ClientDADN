import React, { Component } from 'react';
import {View, Text ,TouchableOpacity,ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import { render } from 'react-dom';
import * as ConstantURL from '../../constant/Constant';
import Axios from 'axios';
import Icons from 'react-native-vector-icons/FontAwesome';

const Items = ({name,id,owner,onClick}) => {
    return (
            <TouchableOpacity style={Styles.blockItem} onPress={onClick}>
                <Icons name="home" size={40} color="#1aaa1a" style={{marginRight: 12}}/>
                <View style={Styles.item}>
                    <Text style={Styles.text}> Room: {name}</Text>
                    <Text style={Styles.text}> ID: {id}</Text>
                    <Text style={Styles.text}> User: {owner} </Text>
                </View>
            </TouchableOpacity>
    );
}

export default class HistoryOp extends Component{
    constructor(props){
        super(props);
        this.state = {
            listRoom : null,
        }
    }

    componentDidMount(){
        console.log(this.props.route.params.id_user);
        Axios.get(`${ConstantURL.IP_URL}${ConstantURL.VIEW_HISTORY_URL}/${this.props.route.params.id_user}`).then((res) => {
            this.setState({
                listRoom: res.data
            });
            // console.log(res.data)
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
                    (this.state.listRoom || false)?
                    (
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
                    )
                    : (<ActivityIndicator size="large" color="#0000ff"/>)
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
        flexDirection:"row",
        margin: 8,
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        borderRadius: 4,
        //justifyContent:'center',
        alignItems:"center"
    },

    container:{
        flex:1,
        flexDirection:'row',
    },
    text:{
        fontSize:20
    }
})
