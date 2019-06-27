
import React  from 'react';
import {Text,Dimensions,View,StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Input } from 'react-native-elements';
import Colors from '../Constant/Colors';

const {width} =Dimensions.get('window');

const Input4 = (props) =>{
   
    return(

        <View style={{flexDirection:'column',
        marginRight:props.marginRight,justifyContent:'center',
        alignSelf:props.alignSelf ,alignItems:'flex-start',height:props.height,  marginTop:props.marginTop
    }}  >

        <Text style={{marginLeft:22,marginBottom:props.marginBottomText,alignSelf:'flex-start',fontSize:props.fontSizeText,color:props.textColor,fontWeight:props.fontWeight}}>{props.title}</Text>

        <Input
             multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            autoCorrect={false}
            autoCapitalize='none'
            textContentType={props.textContentType}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            
            inputContainerStyle={
              {
                borderColor:Colors.grey2,
                borderBottomWidth:props.borderBottomWidth,
                borderWidth:props.borderWidth,
                width:width- props.width,
                backgroundColor:props.backgroundColor,
                borderRadius:props.borderRadius,  
                shadowOffset: { width: 0, height: 2 },
               // shadowOpacity:.1,     
                shadowOffset: props.shadowOffset,
                shadowColor: Colors.black,
                shadowOpacity:props.shadowOpacity,           
                elevation:props.elevation,
                height:props.height,
                marginTop:-5
               
              }
            }
           
            inputStyle={{ marginLeft:props.marginLeft, color:props.color,fontSize:props.fontSize,textAlign:props.textAlign}}
            onChangeText={props.onChangeText}
            leftIcon={

                <AntDesign 
                        name={props.iconName}
                        size={14}
                        color={props.iconColor}
                    />
            }
            
            >

        </Input>

        </View>
    );
};


const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:Colors.white,
       height:32
       ,width:200,
       alignItems:'center',
       justifyContent:'center',
       shadowColor:'#c2c2c2',
       shadowOpacity:.2,
       shadowOffset:{width:0,height:2},
       elevation:2,
       borderRadius:50, 
    },
    textStyle:{
        color:Colors.black,
        fontSize:13,
        fontWeight:'normal',
        alignItems:'center',
        justifyContent:'center',
        alignItems:'center',
    }
});
export default Input4;