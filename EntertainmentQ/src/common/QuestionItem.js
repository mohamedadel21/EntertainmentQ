import React, { Component } from 'react';
import { Text, Dimensions,StyleSheet, View,ScrollView } from 'react-native';
import Colors from '../Constant/Colors'
import { FontAwesome } from '@expo/vector-icons';
import Button from '../common/Button'
const {width} =Dimensions.get('window')

class Item extends Component {
   
    constructor(props){
    
        super(props);

        this.state={
            answered:false,
            answer:'',
            correct:false,
            answerBackground:null,
            answerIcon:null,
            disabled:false
        }
       
    }

    result =()=>{
        if(this.state.answered){

            return(
                <View style={{
                marginLeft:10,
                borderRadius:10,flexDirection:'row'
                ,backgroundColor:this.state.answerBackground,
                justifyContent:'center',alignItems:"center"
                ,padding:5}}>

                    <FontAwesome
                    name={this.state.answerIcon}
                    size={14}
                    color={Colors.white}
                    />

                    <Text style={{marginLeft:5,color:Colors.white,fontSize:11}}>{this.state.answer}</Text>

                </View>
            )
        
    }

    else return;
    }

    componentWillMount(){
        global.result           =0;

        this.props.incorrect.splice(Math.floor(Math.random() * 5), 0,this.props.correctAnswer)

    }
    render() {

        var q=this.props.question.toString();
        var q2=String(q).replace("&quot;"," ")
        var q3=String(q2) .replace("&#039;"," ")
        
        return (
            <View style={[styles.container]}>
             
                <View  

                    style={{  
                          
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:20
                    ,backgroundColor:Colors.opacity,
                    padding:10,
                    flexWrap:'wrap'
                    }}>

                          <Text 
                           style={styles.text}>
                          {q3}
                           </Text>
        
         </View>

         {this.result()}


         <ScrollView
         
            style={{marginTop:10}}
            horizontal
                
                >

         {
             this.props.incorrect.map((item,)=>{
               
           return(
                
            <Button 
            textTitle={item}
            backgroundColor={Colors.grey2}
            color={Colors.darkGrey}
            borderRadius={15}
            height={40}
            elevation={0}
            marginLeft={10}
            shadowOpacity={.2}
            fontSize={11}
            alignItems='center'
            disabled={this.state.disabled}
            onPress={()=>{

                
                if(this.props.correctAnswer==item){
                   this.setState({disabled:true,answered:true,answerBackground:Colors.green,answer:'Correct('+item+')',answerIcon:'check',correct:true})
                   global.result  =  global.result +1

                   console.log(  global.result                     );
                   
                }else{
                    this.setState({answered:true,answerBackground:Colors.red,answer:'Incorrect('+item+')',answerIcon:'close',correct:false})

                }
            }}/>
                )

             }
             
             )
             
         }

      

        </ScrollView>


            </View>
        );
        }
    
    
    }


const styles = StyleSheet.create({

    container:{
        backgroundColor:Colors.lightGrey,
        width:width-25,
        shadowColor:Colors.black,
        shadowOpacity:.2,
        shadowOffset:{width:2,height:2},
        elevation:1,
        borderRadius:10
        ,margin:5,
        justifyContent:'flex-start',
         alignItems:'flex-start',
         alignSelf:'center'
         ,paddingHorizontal:10
         ,paddingVertical:10
         ,marginVertical:10


       
    },
    touch:{
        flex:1,
   
        
    },
    text:{
        color:Colors.black,
        textAlign:'left',
        fontSize:12,

    }

});

export default Item;