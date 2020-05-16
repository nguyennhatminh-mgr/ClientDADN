import React from 'react';
import {View, Text ,TextInput,TouchableOpacity, StyleSheet, Button, Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');

const Items = ({type, placeholder}) => {
    return (
        <View style={Styles.rowInfo}>
                    <Text style={Styles.row_1_Info}>{type}</Text>
                    <TextInput 
                        style={Styles.row_2_Info}
                        placeholder={placeholder}
                        placeholderTextColor="#000"
                        fontSize={height/30}
                    ></TextInput>
        </View>
    );
}

export default function AddSensorScreen({navigation}){
    return (
        <View style={Styles.listContainer}>

        <View style={Styles.header}>
        
        </View>

        <View style={Styles.body}>  
            <View style={Styles.Info}>
                <Items type={"Building"} placeholder={"H6"}/>
                <Items type={"Room"} placeholder={"710"}/>
                <Items type={"ID"} placeholder={"1"}/>
            </View>

            <View style={Styles.btnContainer}>
                <View style={Styles.btn}>
                    <Button
                    title="Save"
                    color="#841584"
                    accessibilityLabel="add Sensor new to database"
                    />
                </View>
                
                <View style={Styles.btn}>
                    <Button
                        onPress={()=>navigation.replace("AddMenu")}
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
        backgroundColor: "#6886c5",
        alignItems:"center",
        justifyContent:"center",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
    },
      body:{
        flex:6
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
