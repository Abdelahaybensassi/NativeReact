
import React, { Component } from 'react'
import { Dimensions,TextInput,ScrollView  ,CheckBox,View,Text ,TouchableOpacity} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image' ;
import StyleSheet from './HeaderStyle';
import { thisExpression } from '@babel/types';
export default class Header extends Component {
  state={
    hidden:false
  }
  render() {
    const title=this.props.title
    return (
      <View>
      <View style={StyleSheet.header}>
      <View>
          <AutoHeightImage
                width={Dimensions.get('window').width/25}
                source={require('../../images/back-arrow.png')}
            />
      </View>
      <View><Text style={StyleSheet.headerText}>{title}</Text></View>
      <TouchableOpacity activeOpacity={0.7}>
        <View>
                <AutoHeightImage
                width={Dimensions.get('window').width/25}
                source={require('../../images/search.png')}
                  />
        </View>
      </TouchableOpacity>
     
     
        </View>
      </View>
    )
  }
}