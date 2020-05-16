import React from 'react';
import {TouchableOpacity ,StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import moment from 'moment';

export default class RoomInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: '',
    };
  }
  componentDidMount(){
    var that = this;  
    var date = moment()
      .utcOffset('+07:00')
      .format(' hh:mm a');
    that.setState({ time: date });
  }
    render(){
      let time = new Date().getHours();
      if(time>= 18){
        return(
          <View style = {styles.container}>
              <ImageBackground source = {require('../assets/images/nightbackground.jpg')}
              style = {styles.background}>
              <View style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center'}}>
              <Text style={styles.header}>Last refreshed : {this.state.time}</Text>
            </View>
            <View style ={styles.user}>
              <View style={{flex:2,}}>
                <Image style= {styles.big_icon} source = {require('../assets/images/icon_house.png')}/>
              </View>
              <View style ={{flex: 5}}>
                <Text style ={styles.text}>Room ID: {this.props.roomID}</Text>
                <Text style ={styles.decription}>Owner: {this.props.owner}</Text>
              </View>
            </View>

            <View style ={{flex:5, alignItems: 'center', justifyContent:'center'}}>
              <View style={styles.specification}>
                  <View style={{flex: 2}}>
                    <Image style={styles.image}
                    source ={require('../assets/images/icon_light.png')} ></Image>
                  </View>
                  <View style ={{flex: 5}}>
                  <Text style ={styles.decription}>Lights On: {this.props.lightOn} / {this.props.numOfLight}</Text>
                  </View>
                </View>
              <View style={styles.specification}>
                <View style={{flex: 2}}>
                  <Image style={styles.image}
                  source ={require('../../assets/images/icon_brightness.png')} ></Image>
                </View>
                <View style ={{flex: 5}}>
                    <Text style ={styles.decription}>Brightness : {this.props.brightness}</Text>
                </View>
              </View>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.button}>
                    <Text style ={styles.title_button}>Refresh</Text>
              </TouchableOpacity>
              
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.button}>
                    <Text style ={styles.title_button}>View detail</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.footer}>Phần mềm quản lý hệ thống chiếu sáng</Text>
            </ImageBackground>
          </View>
      );
      }
      else{
        return(
          <View style = {styles.container}>
              <ImageBackground source = {require('../assets/images/daybackground.jpg')}
              style = {styles.background}>
              <View style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center'}}>
              <Text style={styles.header}>Last refreshed: {this.state.time}</Text>
            </View>
            <View style ={styles.user}>
              <View style={{flex:2,}}>
                <Image style= {styles.big_icon} source = {require('../assets/images/icon_house.png')}/>
              </View>
              <View style ={{flex: 5}}>
                <Text style ={styles.text}>Room ID: {this.props.roomID}</Text>
                <Text style ={styles.text1}>Owner: {this.props.owner}</Text>
              </View>
            </View>

            <View style ={{flex:5, alignItems: 'center', justifyContent:'center'}}>
              <View style={styles.specification}>
                  <View style={{flex: 2}}>
                    <Image style={styles.image}
                    source ={require('../assets/images/icon_light.png')} ></Image>
                  </View>
                  <View style ={{flex: 5}}>
                  <Text style ={styles.decription}>Lights On: {this.props.lightOn} / {this.props.numOfLight}</Text>
                  </View>
                </View>
              <View style={styles.specification}>
                <View style={{flex: 2}}>
                  <Image style={styles.image}
                  source ={require('../assets/images/icon_brightness.png')} ></Image>
                </View>
                <View style ={{flex: 5}}>
                    <Text style ={styles.decription}>Brightness: {this.props.brightness}</Text>
                </View>
              </View>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.button}>
                    <Text style ={styles.title_button}>Refresh</Text>
              </TouchableOpacity>
              
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.button}>
                    <Text style ={styles.title_button}>View detail</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.footer}>Phần mềm quản lý hệ thống chiếu sáng</Text>
            </ImageBackground>
          </View>
      );
      }
      
    }
  }
  const screenWidth =  Dimensions.get("window").width;
  const screenHeight =  Dimensions.get("window").height;
  const standarWidth = 360;
  const standarHeight = 640;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: screenWidth, 
      height: screenHeight
    },
    text:{
      fontSize: 20*standarWidth/screenWidth,
      color: '#1aaa1a',
      fontWeight:'bold'
    },
    text1:{
      fontSize: 16*standarWidth/screenWidth,
      color: '#1aaa1a',
      fontWeight:'bold'
    },

    decription:{
        fontSize: 20*standarWidth/screenWidth,
        color: '#1aaa1a',
    },
    image:{
        height : 20*standarWidth/screenWidth, 
        width:20*standarWidth/screenWidth, 
        padding: 20*standarWidth/screenWidth, 
        marginLeft: 20*standarWidth/screenWidth, 
        backgroundColor:'transparent',

    },
    background:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    button:{
      alignItems: 'center',
      backgroundColor: '#1aaa1a',
      padding: 10*standarWidth/screenWidth, 
      borderRadius: 15, 
      width: 250*standarWidth/screenWidth},
    user:{
      flex: 2,
      flexDirection: 'row',
      margin: 10*standarWidth/screenWidth,
      justifyContent:'center',
      alignItems:'center', 
      backgroundColor:'white',
      borderRadius: 20
      },
    specification:{
      height: 50*standarWidth/screenWidth, 
      flexDirection:'row', 
      alignItems:'center', 
      backgroundColor:'white', 
      borderRadius: 20, 
      margin: 20*standarWidth/screenWidth
    },
    big_icon:{
      height : 60*standarWidth/screenWidth, 
      width:60*standarWidth/screenWidth, 
      padding: 20*standarWidth/screenWidth, 
      marginLeft: 20*standarWidth/screenWidth,  
      backgroundColor:'transparent'
    },
    footer:{
      color: 'gray', 
      textAlign:'center', 
      margin:10*standarWidth/screenWidth
    },
    title_button:{
      color: 'white', 
      fontSize: 18*standarWidth/screenWidth
    },
    header:{
      fontSize: 15*standarWidth/screenWidth,
      marginTop: 30*standarWidth/screenWidth,
      color: 'white'
    }
  });
