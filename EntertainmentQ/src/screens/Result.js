import React, { Component } from 'react';
import { Text, StyleSheet,ScrollView,TouchableOpacity, BackHandler ,Dimensions,View } from 'react-native';
import { LinearGradient,Permissions,LocalAuthentication } from 'expo';
import {  } from 'react-native-elements';
import Colors from '../Constant/Colors';
import Button from '../common/Button';
import Input from '../common/Input';
import { MaterialIcons,Ionicons,EvilIcons,FontAwesome ,AntDesign} from '@expo/vector-icons';

const {height,width} =Dimensions.get('window');
import Locales from '../../Locales';


export default class  extends Component {


  constructor(props){

    super(props);

    this.state={
    
      color:Colors.darkBlue,
      color2:Colors.none,
      icon:''
      
    };

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

  }




componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.navigate('Home')
    return true;
}

  componentWillMount(){

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);


    if(global.result>=10){
        this.setState({color:Colors.green,color2:Colors.green,icon:'check'})
        this.setState({})

      }else if(global.result<10){

        this.setState({color:Colors.red,color2:Colors.red,icon:'close'})


      }
  }

  componentDidMount() {

  }
  

  
  
    render() {

        
        return (

        <View style={styles.mainView}>

      <LinearGradient colors={[Colors.white,Colors.white,Colors.white]} style={styles.linearGradient}>

            <View style={styles.headerView}>

            <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
               
          <LinearGradient  colors={[Colors.white,Colors.white,Colors.white]}
            start={[0, 0]}
            end={[1, 1]}      
            
            style={{
              
            width:width,
            justifyContent:'center',
            alignItems:'center',
            shadowColor:Colors.lightGrey,
            shadowOpacity:.2,
            shadowOffset:{width:0,height:2},
            elevation:9,
            height:height,
         
          
            
           }}>


<TouchableOpacity style={{justifyContent:'center',marginLeft:0,alignItems:'center',backgroundColor:Colors.lightGrey,width:200,height:200,borderRadius:100}}
                     onPress={()=>{
                     this.props.navigation.goBack();
                       }}    
                       >         
                     
                    <FontAwesome 
                      name={this.state.icon}
                      size={80}
                      color={this.state.color}
                      />         

                     
      </TouchableOpacity>
 
        <Text style={{fontSize:24,color:this.state.color2,marginTop:15}}>{global.result+" correct answers"}
        </Text>


        <Button 
            textTitle='Try Again'
            backgroundColor={Colors.none}
            color={Colors.darkGrey}
            borderRadius={53}
            marginTop={20}
            width={120}
            height={40}
            elevation={0}
            borderColor={Colors.darkGrey}
            borderWidth={1}
            
            onPress={()=>{
                this.props.navigation.navigate('Home')
            }
            }
            />
  
              
            </LinearGradient> 

            

           
           

          </ScrollView>
          
            </View>

         </LinearGradient>            
           
         </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView:{
        flex:1
    },
    imageBack:{
        flex:1
    }
    ,text: {
      fontSize: 18,
      textAlign: 'center'
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
      height: 60,
      backgroundColor: '#056ecf',
      borderRadius: 5
    },
    buttonText: {
      fontSize: 30,
      color: '#fff'   
    }
    ,
    linearGradient: {
        flex:1,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center'
      },
      buttonText: {
        fontSize: 18,
     
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      headerView:{
        justifyContent:'center',
        alignItems:'center'
      },
      headerText:{
          color:Colors.darkGrey,
          fontSize:17,
          alignSelf:'center'

      },decsText:{
        color:Colors.white,
        fontSize:14,
        marginRight:50         
        ,marginLeft:50,
        marginTop:10,
        alignSelf:'center'

      },
      login:{
        
      }
});