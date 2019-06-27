
import {GET_QUESTIONS_ATTEMPING,GET_QUESTIONS_FAILED,GET_QUESTIONS_SUCCESS} from './Types';
import axios from 'axios';

export const getQuestions=(url)=>{

    return async (dispatch)=>{

        dispatch({type:GET_QUESTIONS_ATTEMPING});

        axios.get(url).
        then(Response=>{


            dispatch({
                type:GET_QUESTIONS_SUCCESS, payload:Response.data.results
            });   

        }).catch(error=>{
            dispatch({type:GET_QUESTIONS_FAILED,payload:error.message});


        })
     

    }
    
}


