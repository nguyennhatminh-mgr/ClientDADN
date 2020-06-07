import React from 'react';
import {View, Text, Alert,TextInput,TouchableOpacity, StyleSheet, Button, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Items from '../components/AddItems';
import axios from 'axios';
import * as ConstantURL from '../constant/Constant';

export default class AddSensorScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            type:'light',
            Id:'',
            Room:'',
        }
    }

    setText = (textParam, type)=>{
        switch(type){
            case "Id":
                this.setState({
                    Id: textParam
                });
                break;
            case "Room" :
                this.setState({
                    Room: textParam
                });
        }
        //console.log(this.state)
    }

    addLightAction =()=>{
        var body = {id:'', type:'', id_room:''};
        if(this.state.type=='' || this.state.Id == '' || this.state.Room == '' ){
            Alert.alert('warning','fill in form!');
            return;
        }else{
            body.id = this.state.Id;
            body.type= this.state.type;
            body.id_room = this.state.Room;
        }
        //console.log(body);
        axios.post(`${ConstantURL.IP_URL}${ConstantURL.ADD_DIVICE_URL}`,body).then((response) => {
            if(response.data === "ok"){
                Alert.alert('congratulations','add light successfully!');
            }
            else{
                Alert.alert('fail','ID already exist!');;
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    
    render(){
        return (
            <View style={Styles.listContainer}>
                
            <View style={Styles.header}>
                <FontAwesome name="plus-circle" size={height/4} style={Styles.header_icon}/>
            </View>
    
            <View style={Styles.body}>  
                <View style={Styles.Info}>
                    <Items type={"Id"} placeholder={"L01"} setText={this.setText}/>
                    <Items type={"Room"} placeholder={"201h1"} setText={this.setText}/>
                </View>
    
                <View style={Styles.btnContainer}>
                    <View style={Styles.btn}>
                        <Button
                        onPress={this.addLightAction}
                        title="Save"
                        color="#841584"
                        accessibilityLabel="add new Sensor to database"
                        />
                    </View>
                    
                    <View style={Styles.btn}>
                        <Button
                            onPress={()=>this.props.navigation.replace("AddMenu")}
                            title="Cancle"
                            color="#841584"
                            accessibilityLabel="leave this screen without Save"
                        />
                    </View>
                </View>
            </View> 
        </View>
        );
    }
}

const Styles = StyleSheet.create({
    listContainer:{
        backgroundColor:"#f0f8ff",
        opacity:50,
        height:"100%",
        flex:1,
        justifyContent:"center"
    },
    header: {
        flex: 3,
        backgroundColor: "#1aaa1a",
        alignItems:"center",
        justifyContent:"center",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
    },
      body:{
        flex:6,
        backgroundColor:"#9dc6a7",
      },
      Info:{
          flex:7,
          marginHorizontal:"3%",
          marginTop:"3%",
          shadowColor:'#000',
          shadowOpacity: 0.5,
          shadowRadius: 10,
          shadowOffset: {width:2, height:2},
          elevation: 6,
          backgroundColor:"#fff" 
      },
      rowInfo:{
          marginHorizontal:"3%",
          borderBottomWidth:1,
          borderBottomColor:"#d8c593",
          marginVertical:"2%",
          height:"25%"
      },
      row_1_Info:{
        height:"50%",
        fontSize:height / 40,
        color:"#708160",
        fontWeight:"100"
      },
      placeholder:{
        height:"50%",
        fontSize:height / 10,
        color:"#000",
      },
      btnContainer:{
          flex:3,
          flexDirection:"row",
          justifyContent:"space-around",
          alignItems:"center"
      },
      btn:{
        width:"30%",
        height:"30%",
        borderRadius:20,
        
      }
})
