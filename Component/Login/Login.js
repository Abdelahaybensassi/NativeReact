import React, { Component } from 'react'
import { Dimensions,TextInput,ScrollView,View,Text ,TouchableOpacity} from 'react-native';
import StyleSheet from './LoginStyle';
import AutoHeightImage from 'react-native-auto-height-image' ;
import {SocialIcon ,CheckBox} from 'react-native-elements';
import { Actions } from 'react-native-router-flux'; 
export default class Login extends Component {
    state = {
        toggle:true
      }
          toggleCheked=()=>{
              const newtoggl=!this.state.toggle
              this.setState({toggle:newtoggl})
          }
        //   <View>
        //                         <CheckBox 
        //                         title='Se souvenir de moi'
        //                         checked={this.state.toggle}
        //                         onPress={this.toggleCheked}
        //                         checkedColor='#D22F32'
        //                         />
        //                       </View> 
      render() {
        return (
    
    <View style={StyleSheet.global}>
        <AutoHeightImage
            width={Dimensions.get('window').width}
            source={require('../../images/restauration.png')}
            />
            
            <View style={StyleSheet.main}>
                <View style={StyleSheet.TextInputView} >
                    <TextInput style={StyleSheet.TextInput}
                        placeholder = "         Exemple@email.com" 
                        placeholderTextColor="#D22F32"   
                />
                </View>
                    <View style={StyleSheet.TextInputView} >
                        <TextInput style={StyleSheet.TextInput  }
                            placeholder = "         Password" 
                            placeholderTextColor="#D22F32"
                            secureTextEntry={true}
                    />  
                </View>
                          <View style={StyleSheet.Text} >
                              <TouchableOpacity activeOpacity={0.7} >
                                 
                              </TouchableOpacity>
                              <TouchableOpacity activeOpacity={0.7}>
                                <Text  style={{ alignItems: 'center',
                                justifyContent: 'center'}}>Mot de passe oublié?</Text>
                              </TouchableOpacity>
                      </View>
                <TouchableOpacity activeOpacity={0.7} onPress={() => Actions.Keyboard()}> 
              <View style={StyleSheet.seconnect}> 
                     <Text style={StyleSheet.seconnectText}>SIGN IN</Text>
              </View>
              </TouchableOpacity>
              <View style={{ alignItems: 'center',
              justifyContent: 'center'}} >
                                <Text >
                                with your social network 
                                </Text>
                      </View>
                 <View style={StyleSheet.social_icon} >
                    <TouchableOpacity activeOpacity={0.7}>    
                        <View >
                            <SocialIcon style={StyleSheet.social}
                            title='Sign In With Facebook'
                            button
                            type='facebook'
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={StyleSheet.social_icon} >
                    <TouchableOpacity activeOpacity={0.7}>    
                        <View >
                            <SocialIcon style={StyleSheet.social}
                            title='Sign In With google'
                            button
                            type='google-plus-official'
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => Actions.contact()}>    
                        <View>
                            <SocialIcon style={StyleSheet.social}
                            title='Sign Up'
                            button
                            light
                            />
                        </View>
                    </TouchableOpacity>
                </View>
        </View>       
</View>

        )
      }
}
