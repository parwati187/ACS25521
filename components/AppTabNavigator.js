import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BuyScreen from '../screens/BuyScreen';
import SellScreen from '../screens/SellScreen';

export const AppTabNavigator=createBottomTabNavigator({
      BuyScreen:{
          screen: BuyScreen,
          navigationOptions:{
            tabBarLabel : "Buy"   
        }
      },
      SellScreen:{
        screen: SellScreen,
        navigationOptions :{
          tabBarLabel : "Sell"   
      }
    }
});
           

