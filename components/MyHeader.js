import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text,TextInput, StyleSheet ,Alert,Modal,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import {RFValue} from 'react-native-responsive-fontsize';
export default class MyHeader extends Component{
  constructor(){
    super();
    this.state={
      ItemName:'',
      UserId:'',
      address:'',
      contact:'', 
      price:'',
      isModalVisible:false
    }
  }
 

  render(){
    return(
             
        <Header
          leftComponent={<Icon name='bars' type='font-awesome' color='#696969'onPress={() => this.props.navigation.toogleDrawer()}/>}
          centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
          rightComponent={<Icon name='plus' type='font-awesome' color='#696969'  onPress={()=>this.props.navigation.navigate('AddItem')
          }/> }
          backgroundColor = "#eaf8fe"
        />
     

) 
}

}
const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#F8BE85',
   alignItems: 'center',
   justifyContent: 'center'
 },
 
  title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   color : '#ff3d00'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
  fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#32867d"
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
  width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "grey",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14)
 },
 registerButton:{
  width: "75%",
    height: RFValue(50),
    marginTop: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10)
 },
 registerButtonText:{
  fontSize: RFValue(23),
  fontWeight: "bold",
  color: "#fff"
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 },
 signupView: {
  flex: 0.05,
  justifyContent: "center",
  alignItems: "center"
},
label: {
  fontSize: RFValue(13),
  color: "#717D7E",
  fontWeight: "bold",
  paddingLeft: RFValue(10),
  marginLeft: RFValue(20)
},
cancelButtonText: {
  fontSize: RFValue(20),
  fontWeight: "bold",
  color: "#32867d",
  marginTop: RFValue(10)
},
 santaView: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
})