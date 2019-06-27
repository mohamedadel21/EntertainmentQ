
import React  from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';
import { MaterialIcons,EvilIcons,FontAwesome } from '@expo/vector-icons';
import Colors from '../Constant/Colors';


const Buttonn = (props) =>{
    return(

        
    <TouchableOpacity 
    
    onPress={props.onPress}
    disabled={props.disabled}

        style={{   

            borderWidth:props.borderWidth,
            borderColor:props.borderColor,
            justifyContent:'center',
            alignItems:'center'
            ,height:props.height
            ,width: props.width,
            marginLeft:props.marginLeft,
            marginRight:props.marginRight,
            backgroundColor:props.backgroundColor,
            borderRadius:props.borderRadius, 
            marginTop:props.marginTop,
            shadowOffset: { width: 0, height: 2 },
            shadowColor: Colors.black,
            shadowOpacity:props.shadowOpacity,
            elevation:props.elevation,
            flexDirection:'row'
            ,paddingHorizontal:5
            
        
          }}

            >
                    <EvilIcons
                        name={props.iconName}
                        size={18}
                        color={props.iconColor}
                    />
                  
                    <FontAwesome
                        name={props.iconName2}
                        size={props.sizeIcon2}
                        color={props.iconColor2}
                    />

                    <MaterialIcons
                        name={props.iconName3}
                        size={props.sizeIcon3}
                        color={props.iconColor3}
                    />
       <Text style={{color:props.color,fontSize:props.fontSize,fontWeight:props.fontWeight}}>{props.textTitle} </Text>

                    <EvilIcons
                        name={props.iconNameLeft}
                        size={18}
                        color={props.iconColorLeft}
                    />
    </TouchableOpacity>
    );
};


const styles=StyleSheet.create({

    
    textStyle:{
        alignItems:'center',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    }

    
});
export default Buttonn;