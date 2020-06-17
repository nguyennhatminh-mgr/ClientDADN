import React,{Component} from 'react';
import { Alert ,View ,Text ,ScrollView,TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Axios from 'axios';
import * as ConstantURL from '../../constant/Constant';
import HistoryChar from '../../components/HistoryChart';
import { FlatList } from 'react-native-gesture-handler';




const Lamps=({id, getValue})=>{
    return (
    <View style={styles.element}>
        <TouchableOpacity
        onPress = {()=>{ getValue(id)}}
        >
            <Text style={{fontSize: 20}}>
                {id}
            </Text>
        </TouchableOpacity>
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
            chartLabel:["10:10:10", "12:12:21", "13:14:15", "15:16:17:", "18:19:20", "19:20:20"],
            chartDataset:[
                0,
                0,
                0,
                0,
                0,
                0
              ],
        }
    }

    async componentDidMount(){
        await this.getLight();

        await this.getSensor();
    }

    getLight = () => {
        Axios.get(`${ConstantURL.IP_URL}${ConstantURL.VIEW_LIGHT_HISTORY_URL}/${this.props.route.params.idRoom}`
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
        Axios.get(`${ConstantURL.IP_URL}${ConstantURL.VIEW_SENSOR_HISTORY_URL}/${this.props.route.params.idRoom}`
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
            chosenDate: moment(datetime).format('YYYY-MM-DD')
        })
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

    getDataSet = (id_device_Param)=>{
        if(this.state.chosenDate === '') {
            Alert.alert('Select Date please !');
            return;
        }
        Axios.get(`${ConstantURL.IP_URL}${ConstantURL.GET_DATA_HISTORY_URL}`+"/"+`${id_device_Param}`+"/"+`${this.state.chosenDate}`)
        .then((res) => {
            this.setState({
                chartDataset: res.data.map(item => item.value),
                chartLabel: res.data.map(item => new Date(item.time).toTimeString().split(' ')[0]),
            })
        }).catch((error)=>{
            console.log(error);
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.calender}>
                    <TouchableOpacity style={styles.button} onPress={this.showPicker}>
                        <Text style={styles.text}>Select Date</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={this.state.isVisible}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
                        mode={'date'}
                        is24Hour={false}
                    />
                    <Text style={{color:'red', fontSize:20,}}>{this.state.chosenDate}</Text>
                </View>
                <View style={styles.container_content}>
                    <View style={styles.list}>
                        <Text style={styles.title}>Lamp</Text>
                        <FlatList                          
                            data={this.state.lamp}
                            renderItem={({ item }) => (
                                <Lamps
                                id={item.id}
                                getValue={this.getDataSet}
                                />
                            )}
                            numColumns={1}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.title}>Sensor</Text>
                        <FlatList                          
                            data={this.state.sensor}
                            renderItem={({ item }) => (
                                <Lamps
                                id={item.id}
                                getValue={this.getDataSet}
                                />
                            )}
                            numColumns={1}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
                <View style={styles.chartView}>
                {HistoryChar(this.state.chartLabel, this.state.chartDataset)}
                </View>
                
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-around",
    },
    calender:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container_content:{
        paddingTop: '5%',
        flex:2,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    chartView:{
        flex:6
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
    
    text:{
        fontSize:18,
        color: 'white',
        textAlign: 'center',
    }
})