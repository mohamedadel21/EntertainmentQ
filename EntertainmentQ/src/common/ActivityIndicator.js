
import React  from 'react';
import {ActivityIndicator,View,StyleSheet} from 'react-native';

const ActivityIndicator1 = (props) =>{
    return(
        <View style={styles.viewStyle}>
            <ActivityIndicator size={props.size} color={props.color} ></ActivityIndicator>
        </View>
    );
};


const styles=StyleSheet.create({

    viewStyle:{
       height:60,
       alignItems:'center',
       justifyContent:'center',
       shadowColor:'#c2c2c2',
       shadowOpacity:.2,
       shadowOffset:{width:0,height:2},
       elevation:1

    },
    textStyle:{
        
        fontSize:15,
        fontWeight:'bold',
        color:'#c0c0c0',

        

    }
});
export default ActivityIndicator1;