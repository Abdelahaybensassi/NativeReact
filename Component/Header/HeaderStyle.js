'use strict ';
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
import {Dimensions,PixelRatio} from 'react-native';
let backgroundcolor="#FBFBFB"
let colorapp="#e95411"

const styles = {
    header:{
            backgroundColor:backgroundcolor,
            width: width,
            height:height/12,
            flexDirection :'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: width/20,
            paddingLeft: width/20,
            borderBottomWidth:1,
            borderTopWidth: 0.75,
            borderColor:'#e8eded' ,
            shadowOpacity: 0.58,
            shadowRadius: 10.00,
            elevation: 5,shadowOffset:{  width: 0,  height:  2,  },
    },
   
    
}
  export default styles 