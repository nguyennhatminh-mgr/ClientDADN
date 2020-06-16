import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import {Slider} from 'react-native-elements';
import {PieChart} from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import axios from 'axios';

import * as Constant from '../constant/Constant';

const MAX_LIGHT_LEVEL = 1023;
const COMFORTABLE_LIGHT_LEVEL = 512;
const DANGER_LIGHT_LEVEL = 300;
const STEP_LIGHT_LEVEL = 1;
const {width} = Dimensions.get("window");
const SET_SUCCESS = 'SET_SUCCESS';

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            light_level: null,
            data : [
                {
                    name: "L",
                    population: 50,
                    color: "rgba(131, 167, 234, 1)",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
                {
                    name : "U",
                    population: 350,
                    color: "#F00",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                }
            ]
        }
    }

    isValueChange = (value) => {
        var data = [
            {
                name: "L",
                population: value,
                color: "rgba(131, 167, 234, 1)",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name : "U",
                population: MAX_LIGHT_LEVEL - value,
                color: "#F00",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            }
        ]
        this.setState({
            light_level: value,
            data: data
        });
    }

    handleSet = (light_level) => {
        axios.get(`${Constant.IP_URL}${Constant.SET_LIGHT_LEVEL}${light_level}`)
        .then((response) => {
            if(response.data === SET_SUCCESS){
                Alert.alert("Set light level success");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    componentDidMount() {
        axios.get(`${Constant.IP_URL}${Constant.GET_CURRENT_LIGHT_LEVEL}`)
        .then((response) => {
            this.isValueChange(response.data[0].value);
        })
    }
    
    
    render(){
        const {light_level,data} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.wrap_chart}>
                    {
                        true && this.state.light_level === null ? 
                        (<View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
                            <ActivityIndicator size="large" color="blue"/>
                        </View>) :
                        (
                            <PieChart
                            data={data}
                            width={width}
                            height={220}
                            chartConfig={chartConfig}
                            accessor="population"
                            backgroundColor="transparent"
                            paddingLeft="10"
                            absolute
                            />
                        )
                    }
                </View>
                <View style={styles.slider}>
                    <Slider step={STEP_LIGHT_LEVEL}
                    maximumValue={MAX_LIGHT_LEVEL}
                    onValueChange = {this.isValueChange}
                    value={light_level}
                    thumbTintColor="#1aaa1a"
                    maximumTrackTintColor="red"
                    minimumTrackTintColor="black"
                    />
                </View>
                <View style={styles.wrap_text_light}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Text style={styles.text_light}>Light level is : </Text>
                        <Text style={styles.text_light_right}>{light_level}</Text>
                    </View>
                </View>
                <View style={styles.wrap_btn_set}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.btn_set}
                        onPress={() => {
                            this.handleSet(this.state.light_level);
                        }}>
                            <Text style={{color:"#fff"}}>Set</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={styles.btn_set}
                        onPress={() => {
                            this.handleSet(COMFORTABLE_LIGHT_LEVEL);
                            this.setState({
                                light_level: COMFORTABLE_LIGHT_LEVEL
                            });
                        }}>
                            <Text style={{color:"#fff"}}>Default</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slider : {
        flex: 1,
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        borderRadius: 4,
        margin: 8,
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    wrap_chart : {
        flex: 3,
        backgroundColor : "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        borderRadius: 4,
        margin: 8,
    },
    wrap_text_light: {
        flex: 1,
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        borderRadius: 4,
        margin: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    text_light: {
        color: "#1aaa1a",
        fontSize: 16,
        flex: 2,
        textAlign:"center"
    },
    text_light_right: {
        color: "#1aaa1a",
        fontSize: 16,
        flex: 1
    },
    wrap_btn_set: {
        flex: 1,
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        borderRadius: 4,
        margin: 8,
        paddingHorizontal: 10,
        justifyContent:"center"
    },  
    btn_set: {
        backgroundColor: "#1aaa1a",
        borderRadius: 4,
        paddingVertical: 12,
        marginHorizontal: 4,
        flex: 1,
        alignItems:"center"
    }
});