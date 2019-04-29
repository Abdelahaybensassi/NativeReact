'use strict ';
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
import {Dimensions,PixelRatio} from 'react-native';
let colorapp="#D22F32"

const styles = {
   
    container:{
        alignItems: 'center',
        width: width,
        paddingLeft:width/30,
        paddingRight:width/30,
        backgroundColor:colorapp ,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    LogoText:{
        height:height/10,
        backgroundColor:colorapp ,
        width: width,
        justifyContent: 'center',
    },
    Logocontainer:{
        flexDirection :'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Logocimg:{
        paddingRight:width/8,
    },
    titleLogo:{
        fontSize:40/PixelRatio.getFontScale(),
        color:"#ffff",
        paddingLeft:width/20,
       
    },
    //user
    user:{
        flexDirection :'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffff',
        width:width/1.05,
        height:height/10,
        alignItems: 'center',
        marginTop:width/20,
        marginBottom:width/20 ,
        backgroundColor:colorapp ,
    },
    userimageMore:{
        
    },
     containerUser:{
         marginLeft:-width/3.5, 
         width:width/2.5, 
     } ,
     containerTitle:{
         color:'black',
         fontSize:16/PixelRatio.getFontScale(),
         color:'#ffff',
     },
     containerViewTitle:{
         paddingBottom:height/20,
         paddingLeft: height/80,
         position: 'absolute',
         
        
     },
     containerStatue:{
        paddingTop:height/30,
        paddingLeft: height/80,
        fontSize:16/PixelRatio.getFontScale(),
    } ,
    containerStatueText:{
        fontSize:10/PixelRatio.getFontScale(),
        color:'#d0d3d8',
    } ,
    content:{
        flexDirection :'column', 
        paddingRight:width/28,
    },
    header:{
        width:width/1.8,
        flexWrap: 'wrap',
    },
    userImageView:{
        width:width/7,
        height:height/12,
        borderRadius: 100,
     },
     userImage:{
         width:'100%',
         height:'100%',
         borderRadius: 100,
     },
    location:{
        width:width/7.5,
        flexDirection :'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    favorite:{
        width:width/9,
        flexDirection :'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title:{
        fontSize:16/PixelRatio.getFontScale(),
        color:"#828282",
    },
    detail:{
            paddingLeft:width/18,
            alignItems: 'center',
    }
    ,//more detail
    moreDetail:{
        flexDirection :'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:width/2,
        height:height/13,
    },
    Delete:{
        borderBottomColor: '#ffff',
        borderBottomWidth:8,
        justifyContent: 'center',
        alignItems: 'center',
        width:width/2,
        height:height/80,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
    },
    medias:{
        width: width/1.02,
    },
    containerM:{
        flexWrap: 'wrap',
        flexDirection :'row',
        justifyContent: 'space-between',
        marginTop:height/40,
        alignItems: 'center',
        marginRight:-width/40,
    },
    mediacontain:{ 
        borderColor: '#6d606240',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:width/3.2,
        height:height/3.5,
        margin:width/100,
        borderRadius: 20,
    }
    ,
    userimageMoreMedia:{
      
    },

    
}
  export default styles 