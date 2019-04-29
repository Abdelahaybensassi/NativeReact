'use strict ';
const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height
import {Dimensions,PixelRatio,Platform} from 'react-native';
let backgroundcolor="#DEDEDE"
let colorapp="#D22F32"
const styles = {
    global:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundcolor:backgroundcolor,
        paddingTop: ( Platform.OS === 'ios' ) ? 0 : 0,
        height:Dimensions.get('screen').height,
        width:Dimensions.get('screen').width,
    },
     Input:{
        width: width, 
        height: height/4, 
        backgroundColor: '#111114',
        alignContent: 'center',
        justifyContent:'center',
     },
    InputText:{
        width: '80%', 
        height: '100%',
        fontSize:30/PixelRatio.getFontScale(),
        color:'#ffff',
        marginLeft: 20,
    },
    keyboarmain:{
        flexWrap: 'wrap',
        width: width,
        height: height/1.33, 
        backgroundColor: '#ffff',
        flexDirection: 'row',
        justifyContent:'space-between',
       
    },
    keyboard:{
        alignContent: 'center',
        justifyContent:'center',
        
    },
    keyboardInput:{
        backgroundColor: '#222223',
        borderColor: '#363638',
        borderWidth: 0.75,
        justifyContent:'center',
        width: width/3,
        height: height/6.8,
    },
    keyboardInputText:{
        fontSize:35/PixelRatio.getFontScale(),
        alignContent: 'center',
        color:'#ffff',
        padding: 50,
        
    },
    keyboardInputA:{
        width: width,
        height: height/7,
        alignContent: 'center',
        justifyContent:'center',
        paddingLeft: width/2.2,
    },
    img:{
        alignContent: 'center',
        justifyContent:'center',
        marginLeft: 40,
    }
   
}
    

  export default styles 