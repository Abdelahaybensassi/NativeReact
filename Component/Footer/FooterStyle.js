'use strict ';
const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height
import {Dimensions,PixelRatio,Platform} from 'react-native';
let backgroundcolor="#DEDEDE"
let colorapp="#ffff"

const styles = {
  
    FooterView:{
        marginTop: Math.round(Dimensions.get('window').height)/1.14,
        backgroundColor:colorapp,
        width: width,
        height:height/12,
        flexDirection :'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: width/20,
        paddingLeft: width/20,
        borderTopWidth: 0.75,
        borderColor:'#CACECE' ,
        position:'absolute',
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,shadowOffset:{  width: 0,  height:  12,  },
      },
      footerItem:{
      alignItems: 'center',
      justifyContent: 'center',
      color :'#ffff',
      },
      footerItemAdd:{
      alignItems: 'center',
      justifyContent: 'center',
      color :'#ffff',
      paddingBottom: width/60,
      }
    
}
    

  export default styles 