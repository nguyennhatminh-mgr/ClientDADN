import React from 'react';
import {TouchableOpacity ,StyleSheet, Text, View, Image, ImageBackground, Dimensions, RefreshControl } from 'react-native';

export default class RoomInfo extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data :[],
      id : this.props.userID
    }
  }
  // convertDate =(dateTime)=>
  //    {
  //       let time = new Date(dateTime);
  //       let timeString = time.getDate() + "/"
  //        + (time.getMonth()+1)  + "/" 
  //        + time.getFullYear() + " , "  
  //        + time.getHours() + ":"  
  //        + time.getMinutes() + ":" 
  //        + time.getSeconds();
  //       return timeString;
  //    }   
  // getData = async (userID)=>{
  //   fetch(`http://192.168.1.102:3000/viewroom/${this.state.id}`)
  //   .then((response)=> response.json())
  //   .then((responseJson)=>{
  //       if(this.isFreshing){
  //         this.setState({data: responseJson});
  //       }
  //   })
  //   .catch(err=> console.log(err));
  // }
  //  componentWillMount(){
  //    this.isFreshing = false;
  //  }
  // handleRefresh = () =>{
  //    this.isFreshing = true;
  //    this.getData();
  // }
  // componentDidMount(){
  //   this.isFreshing = true;
  //   if(this.isFreshing){
  //     this.getData(this.props.userID);
  //  }
  // }
    handleViewDetail = (navigation, userID)=>
    {
      navigation.navigate('ControlNavigator');
    }
    render(){
      let time = new Date().getHours();
      const {navigation, handleVD} = this.props;
      let urlBackground  = (time>= 18)? require("../assets/images/nightbackground.jpg") : require("../assets/images/daybackground.jpg");
        return(
          <View style = {styles.container}>
              <ImageBackground source = {urlBackground}
              style = {styles.background}>
              <View style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center'}}>
              <Text style={styles.header}>Last refreshed : {this.props.time}</Text>
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
            {/* <RefreshControl freshing = {this.isFreshing} onRefresh = {this.handleRefresh()}/> */}
            <View style ={{flex:5, alignItems: 'center', justifyContent:'center'}}>
              <View style={styles.specification}>
                  <View style={{flex: 2}}>
                    <Image style={styles.image}
                    source ={require('../assets/images/icon_light.png')} ></Image>
                  </View>
                  <View style ={{flex: 5}}>
              <Text style ={styles.decription}>Device ID: {this.props.deviceID}</Text>
                  </View>
                </View>
              <View style={styles.specification}>
                <View style={{flex: 2}}>
                  <Image style={styles.image} source ={require('../assets/images/icon_brightness.png')} />
                </View>
                <View style ={{flex: 5}}>
                    <Text style ={styles.decription}>Brightness : {this.props.brightness}</Text>
                </View>
              </View>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.button} onPress ={()=>handleVD(navigation, this.state.id)}>
                    <Text style ={styles.title_button}>View detail</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.button} onPress ={()=> navigation.goBack()}
             >
                    <Text style ={styles.title_button}>Back</Text>
              </TouchableOpacity>
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
