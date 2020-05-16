import React,{Component} from 'react';
import { View ,Text ,ScrollView,TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const Lamps=({id,mode,control})=>{
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
        <View>
            <Text style={{fontSize:20,color:'red'}}>
                {control}
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
    constructor(){
        super()
        this.state = {
            isVisible: false,
            chosenDate: ''
        }
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
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

    render(){
        return (
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
                        <Lamps id="1" mode="on" control="auto"></Lamps>
                        <Lamps id="2" mode="on" control="auto"></Lamps>
                        <Lamps id="3" mode="on" control="auto"></Lamps>
                        <Lamps id="4" mode="on" control="auto"></Lamps>
                        <Lamps id="5" mode="on" control="auto"></Lamps>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.title}>Sensor</Text>
                        <Sensors id="1" mode="light"></Sensors>
                        <Sensors id="2" mode="light"></Sensors>
                        <Sensors id="3" mode="light"></Sensors>
                        <Sensors id="4" mode="light"></Sensors>
                        <Sensors id="5" mode="light"></Sensors>
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
        fontFamily: 'Times New Roman',
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