import React from 'react';
import { Text, StyleSheet,TouchableOpacity, View } from 'react-native';
import {  AntDesign} from '@expo/vector-icons';



const Header = (props) =>{
    return(
        <View style={{height:70,flexDirection:'row',backgroundColor:props.backgroundColor,justifyContent:'flex-start',alignItems:"flex-start"}}>

                <TouchableOpacity style={{
                    marginLeft:20,marginTop:30}}
                onPress={()=>{
                props.navigation.goBack()
                }}>

                           
                          <AntDesign 
                           name='arrowleft'
                           size={30}
                           color={props.color}
                           />


                </TouchableOpacity>


                <TouchableOpacity style={{right:20,position:'absolute',marginTop:30}}
                          onPress={()=>{

                              if(props.navOption==='true'){

                                props.navigation.openDrawer() ;

                              }else return;

                            }}>
                         <AntDesign 
                           name='bars'
                           size={30}
                           color={props.navColor}
                           />
                         

                </TouchableOpacity>

                <Text style={{color:props.color,marginTop:30,marginLeft:20,fontWeight:'bold',fontSize:15}}>{props.text}</Text>


                
                    
                     
                    
                     

                </View>
    );
};


const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:'#fff',
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
export default Header;