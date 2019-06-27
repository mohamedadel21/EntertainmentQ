import React from 'react';
import { Text, Dimensions,StyleSheet, View,TouchableOpacity } from 'react-native';
import Colors from '../Constant/Colors'
import { FontAwesome } from '@expo/vector-icons';
const {width} =Dimensions.get('window')
const Item =(props)=> {
   
        return (
            <View style={[styles.container,{ backgroundColor:Colors.none, }]}>
                <TouchableOpacity style={styles.touch}
                onPress={props.onPress}
                >
                <View  

                    style={[{    
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:20
                    ,backgroundColor:props.backgroundColor
                    },styles.touch]}>

                            <View style={{
                              backgroundColor:Colors.opacity
                              ,borderRadius:50,
                              width:100,height:100,
                             justifyContent:'center',
                              alignItems:'center'
                             }}>
                            <View style={{shadowColor:Colors.black,
                             shadowOpacity:.2,
                              shadowOffset:{width:2,height:2},
                            elevation:3,
                             }}>

                          <FontAwesome 
                           name={props.iconName}
                           size={37}
                           color={Colors.white}
                          />
                       </View>
                       </View>


                          <View style={{
                              marginTop:5,
                              padding: 10,justifyContent:'center',
                              alignItems:'center'
                             }}>
                          <Text 
                           style={styles.text}>
                           {props.text}
                           </Text>
                           </View>
        
         </View>

                </TouchableOpacity>
            </View>
        );
    }


const styles = StyleSheet.create({

    container:{
       height:180,
        width:width/2-25,
        shadowColor:Colors.black,
        shadowOpacity:.2,
        shadowOffset:{width:2,height:2},
        elevation:3,
        borderRadius:20
        ,margin:5
       
    },
    touch:{
        flex:1,
   
        
    },
    text:{
        color:Colors.white,
        textAlign:'center',
        fontSize:16,

    }

});

export default Item;