import React, { Component } from 'react';
import {  StyleSheet, View ,FlatList,Dimensions} from 'react-native';
import { MaterialIcons,Ionicons,EvilIcons,FontAwesome,AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import Header from '../common/Header';
import {connect} from 'react-redux';
import QuestionItem from '../common/QuestionItem';
const {height,width} =Dimensions.get('window');

 class Questions extends Component {

    constructor(props){
       
        super(props);

       this.state={
        
           timer:59 ,
           correctAnswers:  global.result 

       }

       console.disableYellowBox = true;  

    }


componentDidMount(){

    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
    
  }
  
  componentDidUpdate(){

    if(this.state.timer === 1){ 
      clearInterval(this.interval);
      this.props.navigation.navigate('Result')
    }

  }
  
  componentWillUnmount(){

   clearInterval(this.interval);

  }


    renderItem =({item}) =>{
        
        return(
            <QuestionItem
            incorrect={ item.incorrect_answers}
            correctAnswer={item.correct_answer}
            question={item.question}
            
            />

        );

    }
    _keyExtractor = (item, index) => item.question;


    
    render() {

        return (
            <View style={styles.container}>
           <View style={{width,height:17,backgroundColor:Colors.darkBlue}}></View>   

            <Header navOption='false' navColor={Colors.none} text={'Questions - 00:'+this.state.timer} navigation={this.props.navigation} backgroundColor={Colors.white} color={Colors.black}/>

                        
            <FlatList
                
                data={this.props.questions}
                renderItem={this.renderItem}
                keyExtractor={this._keyExtractor}
                />  
        
      
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
    flex:1
        ,backgroundColor:Colors.white,
     
    },title:{
        color:Colors.darkGrey,
        fontSize:16,
        height:40,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:15

    }

});

const mapStateToProps =({getQ})=>{
    return{
        questions:getQ.questions
  
  }
};

export default connect(mapStateToProps,{})(Questions)