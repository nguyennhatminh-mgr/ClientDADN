import React,{Component} from 'react';
import { View ,Text ,ScrollView,TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Axios from 'axios';
import * as ConstantURL from '../../constant/Constant';

const Lamps=({id,mode})=>{
    return (
    <View style={styles.element}>
        <View>
            <Text style={{fontSize: 20}}>
                {id}
            </Text>
        </View>
        <View>
            <Text style={{fontSize:20,color:'green',}}>
                {mode}
            </Text>
        </View>
    </View>
    )
}

const Sensors=({id,mode})=>{
    return (
    <View style={styles.element}>
        <View>
            <Text style={{fontSize: 20}}>
                {id}
            </Text>
        </View>
        <View>
            <Text style={{fontSize: 20,color:'green',}}>
                {mode}
            </Text>
        </View>
    </View>
    )
}

export default class ViewRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            isVisible: false,
            chosenDate: '',
            lamp : [],
            sensor : [],
        }
    }

    getLight = () => {
        Axios.post(`${ConstantURL.IP_URL}${ConstantURL.VIEW_LIGHT_HISTORY_URL}`,{
                id_room:`${this.props.route.params.idRoom}`,
                time: `${this.state.chosenDate}`
            }
        ).then((res) => {
            this.setState({
                lamp: res.data,
            })
        }).catch((error)=>{
            console.log(error);
        })
    }

    getSensor = () => {
        // console.log(body);
        Axios.post(`${ConstantURL.IP_URL}${ConstantURL.VIEW_SENSOR_HISTORY_URL}`,{
                id_room:`${this.props.route.params.idRoom}`,
                time: `${this.state.chosenDate}`
            }
        ).then((res) => {
            this.setState({
                sensor: res.data
            })
        }).catch((error)=>{
            console.log(error);
        })
    }

    handlePicker = async (datetime) => {
        await this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('YYYY-MM-DD HH:mm')   
        })
        //await console.log(this.state.chosenDate);
        await this.getLight();
        await this.getSensor();
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }
    
    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.calender}>
                    <TouchableOpacity style={styles.button} onPress={this.showPicker}>
                        <Text style={styles.text}>Select Date</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={this.state.isVisible}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
                        mode={'datetime'}
                        is24Hour={false}
                    />
                    <Text style={{color:'red', fontSize:20,}}>{this.state.chosenDate}</Text>
                </View>
                <View style={styles.container_content}>
                    <View style={styles.list}>
                        <Text style={styles.title}>Lamp</Text>
                        {
                            this.state.lamp.map(item => {
                                <Lamps id={item.id} mode={item.value}></Lamps>
                            })
                        }
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.title}>Sensor</Text>
                        {        
                            this.state.sensor.map(item => {
                                <Sensors id={item.id} mode={item.value}></Sensors>
                            })              
                        }
                    </View>
                </View>
            </ScrollView>
        )
    }
}


const styles=StyleSheet.create({
    container_content:{
        paddingTop: '5%',
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    list:{
        flex:1,
        width: '100%',
        height: '100%',
        flexDirection:'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },

    title:{
        paddingBottom: '10%',
        textAlign: 'center',
        fontSize: 24, 
        fontWeight: 'bold',
        // fontFamily: 'Times New Roman',
        color: 'blue',
    },
    element:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },

    button:{
        width:250,
        height: 50,
        backgroundColor: '#330066',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 15,
    },
    calender:{
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:18,
        color: 'white',
        textAlign: 'center',
    }
})