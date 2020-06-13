import React from 'react';
import {View, Text, Alert,TextInput,TouchableOpacity, StyleSheet, Button, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Items from '../components/AddItems';
import axios from 'axios';
import * as ConstantURL from '../constant/Constant';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

const RoomItems = ({obj, setRoom})=>{
    return (
        <TouchableOpacity 
        onPress={()=>{
            setRoom(obj.id);
        }}
        >
            <View style={Styles.roomItem}>
                <Text style={Styles.textRoom}>
                    {obj.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}


export default class AddSensorScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            listRoom:[],
            type:'light',
            Id:'',
            Room:'',
        }
    }

    componentDidMount(){
        this._isMounted = true;
        axios.get(`${ConstantURL.IP_URL}/listroomcontrol/${this.props.route.params.id_user}`).then((res) => {
            this.setState({
                listRoom: res.data
            });
        }).catch((error) =>{
            console.log(error);
        })
    }

    setRoom = (room_id)=>{
        this.setState({
            Room: room_id
        });
    }

    setText = (textParam, type)=>{
        switch(type){
            case "ID":
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
                <Text style={{fontSize:(height/100*30) /7 , fontWeight:"bold",marginVertical:"7%"}}>Select Room</Text>
                <FlatList
                style={{marginBottom:"4%",borderWidth:2 ,borderBottomColor:"#000"}}
                data={this.state.listRoom}
                renderItem={({ item }) => (
                <RoomItems
                    obj = {item}
                    setRoom={this.setRoom}
                />
                )}
                
                numColumns={2}
                keyExtractor={item => item.id}
                />
               
            </View>
    
            <View style={Styles.body}>  
                <View style={Styles.Info}>
                    <Items type={"Room ID"} placeholder={"201h1"} setText={this.setText} room_id={this.state.Room}/>
                    <Items type={"ID"} placeholder={"L01"} setText={this.setText}/>
                </View>
    
                <View style={Styles.btnContainer}>
                    <View style={Styles.btn}>
                        <Button
                        onPress={this.addLightAction}
                        title="Save"
                        color="#841584"
                        />
                    </View>
                    
                    <View style={Styles.btn}>
                        <Button
                            onPress={()=>this.props.navigation.navigate("AddObject",{id_user:this.props.route.params.id_user})}
                            title="Cancle"
                            color="#841584"
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
        flex: 4,
        backgroundColor: "#1aaa1a",
        alignItems:"center",
        justifyContent:"center",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
    },
    roomItem:{
        marginHorizontal: "10%",
        marginVertical:"2%",
        backgroundColor:"#000",
        borderRadius:20,

        justifyContent:"center",
        alignItems:"center"
    },
    textRoom:{
        fontSize:(height/100*30) /7,
        color:'#fff'
    },
    body:{
        flex:5,
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
    btnContainer:{
          flex:3,
          flexDirection:"row",
          justifyContent:"space-around",
          alignItems:"center"
    },
    btn:{
        width:"40%",
        height:"35%",
        borderRadius:20,
        backgroundColor:"lightblue",
    }
})
