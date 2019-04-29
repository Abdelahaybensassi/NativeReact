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
    main:{
        width:width/1.3,
        height:'71%',
        marginTop:width/10,
        backgroundcolor:backgroundcolor,
        
    },
    logotextView:{
        alignItems: 'center',
        justifyContent: 'center',
       
    }, 
    logotext:{
        fontSize:55/PixelRatio.getFontScale(),
        color:colorapp,  
    }
    ,
    sousText:{
        fontSize:18/PixelRatio.getFontScale(),
        color:colorapp,  
    },
    
    Text:{
        flexDirection: 'row',
        
        justifyContent: 'center', 
        paddingBottom: 10,   
    },
    TextInput :{
        width:"100%",
        height:height/15,
        borderColor: colorapp,
        borderWidth:1,
        marginBottom:width/30,
        justifyContent: 'center',
        backgroundColor:'white',
        borderRadius: 100, 
    },
    TextInputView:{
        flexDirection: 'row',
        alignItems: 'center',  
    }, 
    
    seconnect:{
        width:"100%",
        height:height/16,
        color:"#ffff",
        backgroundColor:colorapp,
        borderRadius: 100,
        marginBottom:width/50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    seconnectText:{
        color:'#ffff',
        fontSize:16/PixelRatio.getFontScale(),
        fontWeight: '200',
        justifyContent: 'center',
    },
   
    social:{
        width:"100%",
        height:height/16,
    },
   
    newcompte:{
        width:"85%",
        height:height/16,
        borderColor: '#808080',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        marginTop:width/40,
        backgroundColor:'white',
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    newcompteIcon:{
        width:"15%",
        height:height/16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:backgroundcolor,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        marginTop:width/40,
        borderColor:  "#808080",
        borderBottomLeftRadius:100,
        borderTopLeftRadius:100,
        backgroundColor:'white',
    },
    newcompteText:{
        color:"#ffff",
        fontSize:16/PixelRatio.getFontScale(),
        marginRight:width/10 ,
    },
    
    CheckBox:{
     borderLeftColor: 'red',
     borderTopWidth: 1,
     borderLeftWidth: 1,
     borderBottomWidth: 1,
    }
}
    

  export default styles 