import React,{Component} from 'react';
import { View ,Text ,ScrollView,TouchableOpacity, StyleSheet} from 'react-native';
import { Dimensions } from "react-native";
import {
    LineChart,
  } from "react-native-chart-kit";

export default function HistoryChar(){
    return (
        <View>
            <Text>Light History</Text>
            <ScrollView horizontal={true}>         
            <View>
                <LineChart
                    data={{
                    labels: ["01:01:01","12:20:01", "12:20:30", "01:01:01", "01:01:01", "01:01:01"],
                    datasets: [
                        {
                        data: [
                            Math.random() * 255,
                            Math.random() * 255,
                            Math.random() * 255,
                            Math.random() * 255,
                            Math.random() * 255,
                            Math.random() * 255
                        ]
                        }
                    ]
                    }}
                    width={Dimensions.get("window").width * 2 } // from react-native
                    height={220}
                    // yAxisLabel="$"
                    // yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 0, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                    }}
                    //bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                />
                </View>
            </ScrollView>
        </View>
    );
}