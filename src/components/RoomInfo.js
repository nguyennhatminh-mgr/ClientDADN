import React from 'react';
import { TouchableOpacity ,StyleSheet, Text, View,ScrollView, Image, ImageBackground, Dimensions, RefreshControl } from 'react-native';
import ItemInRoomInfo from './ItemInRoomInfo';
export default class RoomInfo extends React.Component{
  _isMounted= false;
  constructor(props){
    super(props);
    this.state ={
      data :[],
      userID : this.props.userID, 
    }
  }
  convertDate =(dateTime)=>
     {
        let time = new Date(dateTime);
        let timeString = time.getDate() + "/"
         + (time.getMonth()+1)  + "/" 
         + time.getFullYear() + " , "  
         + time.getHours() + ":"  
         + time.getMinutes() + ":" 
         + time.getSeconds();
        return timeString;
     }
  handleViewDetail = (navigation, userID)=>
  {
    navigation.navigate('Control', {screen: 'ListDevice', params: {userID: userID}});
  }
    
    render(){
      let time = new Date().getHours();
      console.log(this.props.data);
      const {navigation, handleVD} = this.props;
      let urlBackground  = (time>= 18)? require("../assets/images/nightbackground.jpg") : require("../assets/images/daybackground.jpg");
        return(
          <View style = {styles.container}>
              <ImageBackground source = {urlBackground}
              style = {styles.background}>
              <View style={{flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center'}}>
              <Text style={styles.header}>Last refreshed : {this.convertDate(new Date().getTime())}</Text>
            </View>
            <View style ={styles.user}>

              <Text style ={{fontSize: 30*standarWidth/screenWidth,
                      color: '#1aaa1a',
                      fontWeight:'bold'}}>List Devices</Text>
            </View>
            <View style={{alignItems:'center', flex: 5, padding: 10}}>
            <ScrollView>
              {
                this.props.data.map((item, index)=> <ItemInRoomInfo key = {index} id= {item.deviceID} type ={item.type} value= {item.value} roomID ={item.roomName} time ={this.convertDate(item.time)}/>)
              }
            </ScrollView>
            </View>
            <View style={{flex: 2}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.button} onPress ={()=>this.handleViewDetail(navigation, this.props.userID)}>
                    <Text style ={styles.title_button}>View detail</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.button} onPress ={()=> navigation.goBack()}
             >
                    <Text style ={styles.title_button}>Back</Text>
              </TouchableOpacity>
            </View>
            </View>
            <Text style={styles.footer}>Phần mềm quản lý hệ thống chiếu sáng</Text>
            </ImageBackground>
          </View>
      );
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
      marginBottom:10*standarWidth/screenWidth
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

