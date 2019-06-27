import React, { Component } from 'react';
import {  StyleSheet, View ,Dimensions,ScrollView} from 'react-native';
import { MaterialIcons,Ionicons,EvilIcons,FontAwesome,AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import Header from '../common/Header';
import {connect} from 'react-redux'
import HomeItem from '../common/HomeItem';
import ActivityIndicator from '../common/ActivityIndicator';
import {getQuestions} from '../Actions'
import {books,music,film,nature,tv,computers,videoGames,sport} from '../Constant/Urls'
const {height,width} =Dimensions.get('window');

class Home  extends Component {

    constructor(props){
    
        super(props);

        this.state={
            indicator:false
        };
       
    }

    componentWillReceiveProps(props){

        if(props.questions){

            this.props.navigation.navigate('Questions')

        }
    }

    indicator =()=>{

        if(this.state.indicator){
            if(!this.props.questions){
            return(
                <View style={{alignSelf:'center',margin:10}}>
                        <ActivityIndicator size='large' color={Colors.green}/>
                </View>
            )
            }else{
                this.setState({indicator:false})
            }
        }else return;

    }

    render() {

        return (
            <View style={styles.container}>
             <View style={{width,height:17,backgroundColor:Colors.darkBlue}}></View>   
            <Header navOption='false' navColor={Colors.none} text='Home' navigation={this.props.navigation} backgroundColor={Colors.white} color={Colors.black}/>
                {this.indicator()}
            <ScrollView contentContainerStyle={{marginTop:35,justifyContent:'flex-start',alignItems:'center'}}  >

                    <View style={{flexDirection:'row'}}>

                   <HomeItem
                   backgroundColor={Colors.red}
                   iconName='book'
                   text='Books'
                   onPress={()=>{
                    this.props.getQuestions(books);
                   }}
                   />

                 <HomeItem
                  
                  backgroundColor={Colors.yellow}
                   iconName='music'
                   text='Music'
                    onPress={()=>{
                        this.setState({indicator:true})
                        this.props.getQuestions(music);

                   }}
                   />

                 
                </View>


                <View style={{flexDirection:'row',marginTop:15}}>

                   <HomeItem
                   backgroundColor={Colors.lightBlue}
                   iconName='film'
                   text='Film'
                   onPress={()=>{
                    this.setState({indicator:true})
                    this.props.getQuestions(film);

                   }}
                   />

                 <HomeItem
                  
                  backgroundColor={Colors.purple}
                   iconName='tree'
                   text='Nuture & Science'
                    onPress={()=>{
                        this.setState({indicator:true})
                        this.props.getQuestions(nature);

                   }}
                   />

                 
                </View>
                 

                  <View style={{flexDirection:'row',marginTop:15}}>

                   <HomeItem
                   backgroundColor={Colors.darkBlue}
                   iconName='tv'
                   text='TV'
                   onPress={()=>{
                    this.setState({indicator:true})
                    this.props.getQuestions(tv);

                   }}
                   />

                 <HomeItem

                   backgroundColor={Colors.orange}
                   iconName='laptop'
                   text='Computers'
                    onPress={()=>{
                        this.setState({indicator:true})
                        this.props.getQuestions(computers);

                   }}

                   />

                 
                </View>
                 
                <View style={{flexDirection:'row',marginTop:15}}>

                    <HomeItem
                    backgroundColor={Colors.green}
                    iconName='gamepad'
                    text='Video games'
                    onPress={()=>{
                        this.setState({indicator:true})
                        this.props.getQuestions(videoGames);

                    }}
                    />

                    <HomeItem

                    backgroundColor={Colors.blue}
                    iconName='futbol-o'
                    text='Sport'
                     onPress={()=>{
                        this.setState({indicator:true})
                        this.props.getQuestions(sport);

                    }}
                    />


                    </View>

                    <View style={{height:50}}></View>


                </ScrollView>
                

        
      
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
    flex:1
        ,backgroundColor:Colors.lightGrey,
     
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

export default connect(mapStateToProps,{getQuestions})(Home)