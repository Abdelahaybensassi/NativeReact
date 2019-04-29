import React, { Component } from 'react'
import { Dimensions,TextInput,ScrollView,View,Text ,TouchableOpacity} from 'react-native';
import StyleSheet from './KeyboardStyle';
import AutoHeightImage from 'react-native-auto-height-image' ;
import { Actions } from 'react-native-router-flux'; 


export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text:''
    };
  }
       
  render() {
    return (
      
         <View style={StyleSheet.global}>
        
                <View style={StyleSheet.Input}>
                        <TextInput
                          style={StyleSheet.InputText}
                          onChangeText={this.state.text.toString()}
                          value={this.state.text}
                         />
                </View>
               
                     <View style={StyleSheet.keyboarmain}>
                        <TouchableOpacity activeOpacity={0.95} onPress={() => this.setState({text:this.state.text.toString()+'1'})}>
                            <View style={StyleSheet.keyboardInput}>
                                    <Text style={StyleSheet.keyboardInputText}>1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.95} onPress={() => this.setState({text:this.state.text.toString()+'2'})}>
                            <View style={StyleSheet.keyboardInput}>
                                   <Text style={StyleSheet.keyboardInputText}>2</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.95} onPress={() => this.setState({text:this.state.text.toString()+'3'})} >  
                        <View style={StyleSheet.keyboardInput}>
                                    <Text style={StyleSheet.keyboardInputText}>3</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.95} onPress={() => this.setState({text:this.state.text.toString()+'4'})} >
                        <View style={StyleSheet.keyboardInput}>
                                    <Text style={StyleSheet.keyboardInputText}>4</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.95} onPress={() => this.setState({text:this.state.text.toString()+'5'})} >
                        <View style={StyleSheet.keyboardInput}>
                                    <Text style={StyleSheet.keyboardInputText}>5</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.95} onPress={() => this.setState({text:this.state.text.toString()+'6'})} >
                        <View style={StyleSheet.keyboardInput}>
                             <Text style={StyleSheet.keyboardInputText}>6</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.95} onPress={() => this.setState({text:this.state.text.toString()+'7'})} >
                        <View style={StyleSheet.keyboardInput}>
                                    <Text style={StyleSheet.keyboardInputText}>7</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.95} onPress={() => this.setState({text:this.state.text.toString()+'8'})}>
                        <View style={StyleSheet.keyboardInput}>
                                <Text style={StyleSheet.keyboardInputText}>8</Text>
                        </View>
                        </TouchableOpacity> 
                        <TouchableOpacity activeOpacity={0.95} onPress={() => this.setState({text:this.state.text.toString()+'9'})}>
                                <View style={StyleSheet.keyboardInput}>
                                    <Text style={StyleSheet.keyboardInputText}>9</Text>
                                </View>
                        </TouchableOpacity> 
                        <TouchableOpacity activeOpacity={0.95}   onPress={() => this.setState({text:this.state.text.toString()+'#'})}>
                                <View style={StyleSheet.keyboardInput}>
                                    <Text style={StyleSheet.keyboardInputText}>#</Text>
                                </View>
                        </TouchableOpacity> 
                        <TouchableOpacity activeOpacity={0.95}   onPress={() => this.setState({text:this.state.text.toString()+'0'})}>
                                <View style={StyleSheet.keyboardInput}>
                                    <Text style={StyleSheet.keyboardInputText}>0</Text>
                                </View>
                         </TouchableOpacity> 
                         <TouchableOpacity  activeOpacity={0.95} onPress={() => this.setState({text:''})}>
                                <View style={[StyleSheet.keyboardInput,{backgroundColor: '#680e14'}]}>
                                    <AutoHeightImage style={StyleSheet.img}
                                    width={Dimensions.get('window').width/10}
                                    source={require('../../images/backspace-arrow.png')}
                                        />
                                </View>
                        </TouchableOpacity>
                        <TouchableOpacity  activeOpacity={0.95} onPress={() => this.setState({text:this.state.text.length})}>
                            <View style={[StyleSheet.keyboardInputA,{backgroundColor: '#0b300c'}]}>
                                <AutoHeightImage style={StyleSheet.imgAppl}
                                width={Dimensions.get('window').width/10}
                                source={require('../../images/phone-receiver.png')}
                                    />
                            </View>
                        </TouchableOpacity>
                </View>
            </View>
     
    );
  }
}
