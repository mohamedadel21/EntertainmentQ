import {GET_QUESTIONS_ATTEMPING,GET_QUESTIONS_FAILED,GET_QUESTIONS_SUCCESS} from '../Actions/Types';


const INITIAL_STATE ={loading:false,questions:null,error:'',success:false};

export default (state =INITIAL_STATE,action)=>{
 
    switch(action.type){

        case GET_QUESTIONS_ATTEMPING:
           return {...INITIAL_STATE,loading:true};
 
        case GET_QUESTIONS_FAILED:
            return{loading:false,error:action.payload}   

        case GET_QUESTIONS_SUCCESS:
            return{success:true,questions:action.payload}
            
          

        default: return state;

    }

};