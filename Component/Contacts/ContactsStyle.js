'use strict ';
const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height
import {Dimensions,PixelRatio,Platform} from 'react-native';
let backgroundcolor="#DEDEDE"
let colorapp="#D22F32"

const styles = {
    global:{
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundcolor:backgroundcolor,
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
        height:Dimensions.get('screen').height,
        width:Dimensions.get('screen').width,
       
    }
}
    

  export default styles 