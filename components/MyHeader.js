import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
export default class MyHeader extends Component{
  
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