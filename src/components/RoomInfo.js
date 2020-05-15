import React from 'react';
import {TouchableOpacity ,StyleSheet, Text, View, Image, Button, ImageBackground, Dimensions } from 'react-native';
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
      const screenWidth =  Dimensions.get("window").width;
      const screenHeight =  Dimensions.get("window").height;
      if(time>= 18){
        return(
          <View style = {{width: screenWidth, height: screenHeight}}>
              <ImageBackground source = {require('../../assets/images/nightbackground.jpg')}
              style = {styles.background}>
              <View style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center'}}>
              <Text style={{
                fontSize: 15,
                marginTop: 30,
                color: 'gold'
              }}>Lần cập nhật cuối: {this.state.time}</Text>
            </View>
            <View style ={{flex: 2,
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent:'center',
                    alignItems:'center', 
                    }}>
              <View style={{flex:2,}}>
                <Image source = {require('../../assets/images/icon_house.png')}
                style= {{height : 60, width:60, padding: 20, marginLeft: 20,  backgroundColor:'transparent'}}
                ></Image>
              </View>
              <View style ={{flex: 5}}>
                <Text style ={styles.text}>Mã phòng: {this.props.roomID}</Text>
                <Text style ={styles.decription}>Chủ sở hữu: {this.props.owner}</Text>
              </View>
            </View>

            <View style ={{flex:5, alignItems: 'center', justifyContent:'center'}}>
              <View style={{flexDirection:'row'}}>
                  <View style={{flex: 2}}>
                    <Image style={styles.image}
                    source ={require('../../assets/images/icon_light.png')} ></Image>
                  </View>
                  <View style ={{flex: 5}}>
                  <Text style ={styles.decription}>Số đèn đang bật: {this.props.lightOn} / {this.props.numOfLight}</Text>
                  </View>
                </View>
              <View style={{flexDirection:'row'}}>
                <View style={{flex: 2}}>
                  <Image style={styles.image}
                  source ={require('../../assets/images/icon_brightness.png')} ></Image>
                </View>
                <View style ={{flex: 5}}>
                    <Text style ={styles.decription}>Độ sáng hiện tại: {this.props.brightness}</Text>
                </View>
              </View>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.button}>
                    <Text style ={{color: 'white', fontSize: 16}}>Cập nhật trạng thái</Text>
              </TouchableOpacity>
              
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.button}>
                    <Text style ={{color: 'white', fontSize: 16}}>Chi tiết hệ thống đèn</Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: 'gray', textAlign:'center', margin:10}}>Phần mềm quản lý hệ thống chiếu sáng</Text>
            </ImageBackground>
          </View>
      );
      }
      else{
        return(
          <View style = {{width: screenWidth, height: screenHeight}}>
              <ImageBackground source = {require('../../assets/images/daybackground.jpg')}
              style = {styles.background}>
              <View style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center'}}>
              <Text style={{
                fontSize: 15,
                marginTop: 30,
                color: 'gold'
              }}>Lần cập nhật cuối: {this.state.time}</Text>
            </View>
            <View style ={{flex: 2,
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent:'center',
                    alignItems:'center', 
                    }}>
              <View style={{flex:2,}}>
                <Image source = {require('../../assets/images/icon_house.png')}
                style= {{height : 60, width:60, padding: 20, marginLeft: 20,  backgroundColor:'transparent'}}
                ></Image>
              </View>
              <View style ={{flex: 5}}>
                <Text style ={styles.text}>Mã phòng: {this.props.roomID}</Text>
                <Text style ={styles.text}>Chủ sở hữu: {this.props.owner}</Text>
              </View>
            </View>

            <View style ={{flex:5, alignItems: 'center', justifyContent:'center'}}>
              <View style={{flexDirection:'row'}}>
                  <View style={{flex: 2}}>
                    <Image style={styles.image}
                    source ={require('../../assets/images/icon_light.png')} ></Image>
                  </View>
                  <View style ={{flex: 5}}>
                  <Text style ={styles.decription}>Số đèn đang bật: {this.props.lightOn} / {this.props.numOfLight}</Text>
                  </View>
                </View>
              <View style={{flexDirection:'row'}}>
                <View style={{flex: 2}}>
                  <Image style={styles.image}
                  source ={require('../../assets/images/icon_brightness.png')} ></Image>
                </View>
                <View style ={{flex: 5}}>
                    <Text style ={styles.decription}>Độ sáng hiện tại: {this.props.brightness}</Text>
                </View>
              </View>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.button}>
                    <Text style ={{color: 'white', fontSize: 16}}>Cập nhật trạng thái</Text>
              </TouchableOpacity>
              
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.button}>
                    <Text style ={{color: 'white', fontSize: 16}}>Chi tiết hệ thống đèn</Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: 'gray', textAlign:'center', margin:10}}>Phần mềm quản lý hệ thống chiếu sáng</Text>
            </ImageBackground>
          </View>
      );
      }
      
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text:{
      fontSize: 20,
      color: 'gold',
      fontWeight:'bold'
  },
    decription:{
        fontSize: 20,
        color: 'gold',
    },
    image:{
        height : 20, 
        width:20, 
        padding: 20, 
        marginLeft: 20, 
        backgroundColor:'transparent',

    },
    background:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    button:{
      alignItems: "center",
      backgroundColor: "gold",
      padding: 10, 
      borderRadius: 15, width: 250}

  });
