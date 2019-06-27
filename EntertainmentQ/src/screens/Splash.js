import React, { Component } from 'react';
import { Text, StyleSheet, Image,View,Dimensions,Animated} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import Button from '../common/Button'
import Colors from '../Constant/Colors';
const {width,height}=Dimensions.get('window');


export default class  extends Component {

    constructor(props){
        super(props);

        this.state={

            defualt:1,
            
            animated:new Animated.Value(0),
            animated2:new Animated.Value(0),
            animated3:new Animated.Value(0)

        }
    }

    
    render() {
        const OpacityStyle={
            opacity:this.state.animated
        }
        const OpacityStyle2={
            opacity:this.state.animated2
        }

        const OpacityStyle3={
            opacity:this.state.animated3
        }
        return (

        <View style={styles.mainView}>

        <LinearGradient colors={[Colors.darkBlue,Colors.blue,Colors.darkBlue]}  
         
        style={[styles.linearGradient]}>

                   


            <Animated.View style={[OpacityStyle,styles.headerView]}>
            <Image style={{width:120,height:120}} source={require("../../assets/logo.png")}></Image>

            </Animated.View>

            <Animated.View style={[styles.headerView2,OpacityStyle2]}>
            
            
            <View style={{flexDirection:'row'}}>
            <Text style={styles.headerText}>EntertainmentQ</Text>

            </View>

            
            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.decsText}>Examine your information of movies {'\n'} music ..etc</Text>

            <Button 
            textTitle='GET STARTED'
            backgroundColor={Colors.white}
            color={Colors.black}
            borderRadius={50}
            marginTop={20}
            width={width/3}
            height={45}
            elevation={3}
            shadowOpacity={.2}
            alignItems='center'
            marginTop={30}
            onPress={()=>{

                this.props.navigation.navigate('Home');
            }}/>


            </View>
           
           
            </Animated.View>

         </LinearGradient>   


         <Animated.View style={[styles.headerView3,OpacityStyle3]}>
            
         <View style={{width:50,height:50,borderRadius:50,backgroundColor:Colors.darkBlue,justifyContent:'center',alignItems:'center'}}>
                <FontAwesome
                name='headphones'
                size={20}
                color={Colors.white}
                />
            </View>

            <View style={{marginLeft:30,width:80,height:80,borderRadius:50,backgroundColor:Colors.purple,justifyContent:'center',alignItems:'center'}}>
                <FontAwesome
                name='music'
                size={30}
                color={Colors.white}
                />
            </View>


            <View style={{marginLeft:30,width:50,height:50,borderRadius:50,backgroundColor:Colors.darkBlue,justifyContent:'center',alignItems:'center'}}>
                <FontAwesome
                name='check'
                size={20}
                color={Colors.white}
                />
            </View>
            

            </Animated.View>

         </View>
        );
    }

    
    componentDidMount(){

        Animated.timing(new Animated.Value(1),{
            toValue:1,
            duration:500
        }).start(()=>{
            Animated.timing(this.state.animated,{
                toValue:1,
                duration:700
            }).start(()=>{
                Animated.timing(this.state.animated2,{
                    toValue:1,
                    duration:1000
                }).start(()=>{
                    Animated.timing(this.state.animated3,{
                        toValue:1,
                        duration:1000
                    }).start(()=>{
                    })
                });
            });
        });

    }
}

const styles = StyleSheet.create({
    mainView:{
        flex:1
    },
    imageBack:{
        flex:1
    }
    ,
    linearGradient: {
        width,height:height-200,
        borderBottomEndRadius:170,
        borderBottomLeftRadius:170,
        borderBottomEndRadius:170
        ,borderBottomRightRadius:170,
        borderBottomStartRadius:170,
        justifyContent:'center',
        alignItems:'center'
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      headerView:{
        justifyContent:'center',
        alignItems:'center',
        shadowColor:Colors.black,
        shadowOpacity:.2,
        shadowOffset:{width:0,height:2},
        elevation:4,
        marginTop:-55
      },
      headerView2:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
        
      },
      headerView3:{
          width,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
            ,
        flexDirection:'row'
        
      },
      headerText:{
        fontSize:25,
        color:Colors.white
        ,fontWeight:'bold'
      },decsText:{
          fontSize:15,marginTop:5,
          color:Colors.white
          ,marginHorizontal:20,
          textAlign:'center'}
      ,
      login:{
        
      }
});