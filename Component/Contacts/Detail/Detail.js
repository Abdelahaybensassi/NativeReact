import React, { Component } from 'react'
import { Dimensions,ScrollView,View,Text ,TouchableOpacity} from 'react-native';
import StyleSheet from './DetailStyle';
import AutoHeightImage from 'react-native-auto-height-image' ;
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
export default class Detail extends Component {
   
  render() {
    const Contact = this.props.contact
    return (  
<View>
       
        <View style={StyleSheet.LogoText}>
            <View style={StyleSheet.Logocontainer}>
                <Text style={StyleSheet.titleLogo}>ResApp</Text>
                
                </View>
                
            </View>
        <View style={StyleSheet.container}>
            <View style={StyleSheet.user}>
                    <View style={StyleSheet.userImageView}>
                            <AutoHeightImage style={StyleSheet.userImage}
                            width={Dimensions.get('window').width}
                            source={require('../../../images/image-12.png')}
                            />
                    </View>
                    <View style={StyleSheet.containerUser}>
                        <View style={StyleSheet.containerViewTitle}>
                            <Text style={StyleSheet.containerTitle}>Danielle LaPorte</Text>
                        </View>
                        <View style={StyleSheet.containerStatue}>
                            <Text numberOfLines={1}   maxLength={10} style={StyleSheet.containerStatueText}>Producteur de film est une auteure canadienne</Text>
                
                        </View>
                    </View>
                    <View style={StyleSheet.userimageMore}>
                            <AutoHeightImage  style={StyleSheet.userimageMoreimg}
                            width={Dimensions.get('window').width/20}
                            source={require('../../../images/edit.png')}
                            />
                    </View>
            </View>
            <View style={StyleSheet.moreDetail}>
                <TouchableOpacity>
                    <View style={StyleSheet.userimageMoreDetail}>
                            <AutoHeightImage  style={StyleSheet.userimageMoreimg}
                            width={Dimensions.get('window').width/20}
                            source={require('../../../images/speech-bubbles-comment-option.png')}
                            />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={StyleSheet.userimageMoreDetail}>
                            <AutoHeightImage  style={StyleSheet.userimageMoreimg}
                            width={Dimensions.get('window').width/20}
                            source={require('../../../images/add-button.png')}
                            />
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={StyleSheet.userimageMoreDetail}>
                            <AutoHeightImage  style={StyleSheet.userimageMoreimg}
                            width={Dimensions.get('window').width/20}
                            source={require('../../../images/phone-receiver.png')}
                            />
                    </View>
                    </TouchableOpacity>
            </View>
            <View style={StyleSheet.Delete}>
                <TouchableOpacity>
                    <View style={StyleSheet.userimageMoreDetail}>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    
        <View style={StyleSheet.medias}>
        <ScrollView>
            <View style={StyleSheet.containerM}>
                        <View >
                            <AutoHeightImage style={StyleSheet.mediacontain}
                            width={Dimensions.get('window').width/4}
                            source={require('../../../images/863542.png')}
                            />
                        </View>
                        <View >
                                <AutoHeightImage  style={StyleSheet.mediacontain}
                                width={Dimensions.get('window').width/4}
                                source={require('../../../images/IMG_0332.png')}
                                />
                        </View>
                        <View >
                            <AutoHeightImage  style={StyleSheet.mediacontain}
                                width={Dimensions.get('window').width/4}
                                 source={require('../../../images/pexels-photo-821403.png')}
                         />
                        </View>
                        <View >
                        <AutoHeightImage  style={StyleSheet.mediacontain}
                            width={Dimensions.get('window').width/4}
                             source={require('../../../images/iphonex.png')}
                             />
                        </View>
                        <View >
                        <AutoHeightImage  style={StyleSheet.mediacontain}
                            width={Dimensions.get('window').width/4}
                             source={require('../../../images/pexel.png')}
                             />
                        </View>
                        <View >
                        <AutoHeightImage  style={StyleSheet.mediacontain}
                            width={Dimensions.get('window').width/4}
                             source={require('../../../images/restauration.png')}
                             />
                        </View>
                        <View >
                        <AutoHeightImage  style={StyleSheet.mediacontain}
                            width={Dimensions.get('window').width/4}
                             source={require('../../../images/restauration.png')}
                             />
                        </View>
                        
            </View>
            </ScrollView>
        </View>
    
    <Footer/>          
 </View> 
        
    )
  }
}