import React from 'react';
import { TouchableOpacity ,StyleSheet, Text, View,ScrollView, ImageBackground} from 'react-native';
import ItemInRoomInfo from './ItemInRoomInfo';
import * as Constant from '../constant/Constant';
export default class RoomInfo extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      dataSource :[],
      userID : this.props.route.params.userID,
      owner:  this.props.route.params.owner,
      roomID: this.props.route.params.roomID
    }
  }

  componentDidMount(){
    this.getData();
  }
  async getData(){
    await fetch(`${Constant.IP_URL}${Constant.VIEW_ROOM_URL}/${this.state.userID}`)
    .then((response)=> response.json())
    .then((responseJson)=>{
        this.setState({
            dataSource: responseJson
        });
    })
    .catch(err=>console.log(err))
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
  calcBrightness =(obj)=>
  {
    this.state.dataSource.map((item, index)=>{
      if(item.type =="sensor"||item.type =="Sensor"||item.type =="SENSOR") {
        obj.br += item.value;
        obj.i+=1;
      }
    })
  }
    render(){
      let obj ={br:0, i:0};
      this.calcBrightness(obj);
      let time = new Date().getHours();
      const {navigation} = this.props;
      let urlBackground  = (time>= 18)? require("../assets/images/nightbackground.jpg") : require("../assets/images/daybackground.jpg");
        return(
          <View style = {styles.container}>
              <ImageBackground source = {urlBackground}
              style = {styles.background}>
              <View style={styles.container1}>
              <Text style={styles.header}>Last refreshed : {this.convertDate(new Date().getTime())}</Text>
            </View>
            <View style ={styles.user}>
              <Text style ={styles.bigText}>Devices Status</Text>
              <Text style ={styles.text1}>Room ID: {this.state.roomID}</Text>
              <Text style ={styles.text1}>Owner: {this.state.owner}</Text>
            </View>
            <View style={styles.container2}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
              {(this.state.dataSource.length >0) ?
                (this.state.dataSource.map((item, index)=> <ItemInRoomInfo key = {index} id= {item.deviceID} type ={item.type} value= {item.value} time ={this.convertDate(item.time)}/>)):
                <Text style ={styles.bigText}>There is no device here!</Text>}
            </ScrollView>
            </View>           
            <View style={styles.brightness}>
              {
                (obj.i == 0)?
                (<Text style={styles.text}>
                  Brightness: 0
                </Text>):
                (<Text style={styles.text}>
                  Brightness: {obj.br/obj.i}
                </Text>)
              }
            </View>
            <View style={styles.container1}>
              <TouchableOpacity style = {styles.button} onPress ={()=> navigation.goBack()}>
                    <Text style ={styles.title_button}>Back</Text>
              </TouchableOpacity>
            </View>
            </ImageBackground>
          </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: Constant.screenWidth, 
      height: Constant.screenHeight
    },
    container1:{flex: 1,
      justifyContent: 'center',
      alignItems: 'center'},
    container2:{
      flex: 5, 
      padding: 10*Constant.screenHeight/748
    },
    text:{
      fontSize: 20*Constant.screenHeight/748,
      color: '#1aaa1a',
    },
    text1:{
      fontSize: 15*Constant.screenHeight/748,
      color: '#1aaa1a'
    },
    background:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    bigText:{
      fontSize: 30*Constant.screenHeight/748,
      color: '#1aaa1a',
      fontWeight:'bold'},
    button:{
      alignItems: 'center',
      backgroundColor: '#1aaa1a',
      padding: 10*Constant.screenHeight/748, 
      borderRadius: 15, 
      width: 250*Constant.screenWidth/411},
      brightness:{
        flex: 1, 
        backgroundColor: 'white',
        justifyContent:'center', 
        alignItems: 'center', 
        borderRadius: 15, 
        margin: 10*Constant.screenHeight/748, 
        opacity:1
      },
    user:{
      flex: 2,
      flexDirection: 'column',
      margin: 10*Constant.screenHeight/748,
      justifyContent:'center',
      alignItems:'center', 
      backgroundColor:'white',
      borderRadius: 20
      },
    footer:{
      color: 'gray', 
      textAlign:'center', 
      marginBottom:10*Constant.screenHeight/748
    },
    title_button:{
      color: 'white', 
      fontSize: 18*Constant.screenHeight/748
    },
    header:{
      fontSize: 15*Constant.screenHeight/748,
      marginTop: 30*Constant.screenHeight/748,
      color: 'white'
    }
  });

