import React, { Component } from 'react'
import { Dimensions,ScrollView,View,Text ,TouchableOpacity} from 'react-native';
import StyleSheet from './FooterStyle';
import AutoHeightImage from 'react-native-auto-height-image' ;
import { Button,SearchBar  ,CheckBox} from 'react-native-elements';
export default class Footer extends Component {
  render() {
    return (
            <View style={ StyleSheet.FooterView} >
                 <View style={StyleSheet.footerItem}>
                    <AutoHeightImage
                    width={Dimensions.get('window').width/15}
                    source={require('../../images/periscope-logo.png')}
                    />
                   
                </View>
                <View style={StyleSheet.footerItem}>
                    <AutoHeightImage
                    width={Dimensions.get('window').width/15}
                    source={require('../../images/applogoApp.png')}
                        />
                  
                </View>
                <View style={StyleSheet.footerItemAdd}>
                    <AutoHeightImage
                    width={Dimensions.get('window').width/5.5}
                    source={require('../../images/add.png')}
                        />
                </View>
                <View style={StyleSheet.footerItem}>
                    <AutoHeightImage
                    width={Dimensions.get('window').width/15}
                    source={require('../../images/telegram-logo.png')}
                        />
                   
                </View>
                <View style={StyleSheet.footerItem}>
                    <AutoHeightImage
                    width={Dimensions.get('window').width/15}
                    source={require('../../images/user.png')}
                        />
                   
                </View>
            </View>
    )
  }
}
