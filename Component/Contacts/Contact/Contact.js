import React, { Component } from 'react'
import { Dimensions,ScrollView,View,Text ,TouchableOpacity} from 'react-native';
import StyleSheet from './ContactStyle';
import AutoHeightImage from 'react-native-auto-height-image' ;
import Footer from '../../Footer/Footer'
import { Actions } from 'react-native-router-flux'; 

export default class Contact extends Component {
    // state = {
    //     search: '',
    //   };
    
    //   updateSearch = search => {
    //     this.setState({ search });
    //   };
  render() {
    // const { search } = this.state.search
    const Contact = this.props.contact
    return (  
        <ScrollView>
            <TouchableOpacity activeOpacity={0.7}  onPress={() => Actions.detail()}>
              <View style={StyleSheet.container}>
                 <View style={StyleSheet.userImageView}>
                    <AutoHeightImage style={StyleSheet.userImage}
                    width={Dimensions.get('window').width}
                    source={require('../../../images/image-1.png')}
                    />
                </View>
                <View style={StyleSheet.content}>
                    <View style={StyleSheet.header}>
                        <View>
                            <Text style={StyleSheet.title}>{Contact.title}</Text>
                        </View>
                    </View>
                </View>
                <View style={StyleSheet.detail}>
                        <AutoHeightImage 
                        width={Dimensions.get('window').width/25}
                        source={require('../../../images/next_more.png')}
                        />
                </View>
              </View>
              </TouchableOpacity>
        </ScrollView>
    )
  }
}