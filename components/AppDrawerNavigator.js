import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import AddItem from '../screens/AddItem';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
    AddItem : {
      screen : AddItem,
      navigationOptions:{
        drawerIcon : <Icon name="plus" type ="font-awesome" />,
        drawerLabel : "Add Items"
     
      }
    }
  
},
   {
    initialRouteName : 'Home'
  })