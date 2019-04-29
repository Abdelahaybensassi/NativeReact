'use strict ';
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
import {Dimensions,PixelRatio} from 'react-native';
let colorapp="#FFFFFF"

const styles = {
   
    
    container:{
        flex:1,
        flexDirection :'row',
        justifyContent: 'space-between',
        backgroundColor:colorapp ,
        height:height/10,
        borderColor: "#E8E8E8",
        borderBottomWidth:1,
        borderTopWidth:1,
        alignItems: 'center',
        width: width,
        paddingLeft:width/30,
        paddingRight:width/30,
    },
    content:{
        flexDirection :'column', 
        paddingRight:width/28,
    },
    header:{
        width:width/1.8,
        flexWrap: 'wrap',
    },
    main:{
        
    },
    userImageView:{
        width:width/7,
        height:height/13,
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
        paddingRight:width/30,
    },
    detail:{
            paddingLeft:width/18,
            alignItems: 'center',
    }

    
}
  export default styles 