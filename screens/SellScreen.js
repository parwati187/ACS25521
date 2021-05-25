import React, { Component } from 'react';
import { StyleSheet, View, FlatList,Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
import db from '../config';
export default class SellScreen extends Component{
 render(){
    return(
              <View>
                 <MyHeader navigation ={this.props.navigation }/>
                  <Text> Sell Screen</Text>
                  </View>
                  )
                }
            }