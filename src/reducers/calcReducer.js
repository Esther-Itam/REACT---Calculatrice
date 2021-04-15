import { randomNumber } from '../services/randomNumber';
import {calc} from '../services/calc'

const INITIAL_STATE = {
    number1 : "",
    number2 : "",
    operator : "",
    result: "",

};

function calcReducer(state=INITIAL_STATE, action){

   switch (action.type) {
     case 'UPDATE_INPUT_1':
      return{
        ...state,
        number1: action.value
      }  
     case 'UPDATE_INPUT_2':
      return{
        ...state,
        number2: action.value
      }     
     case 'CHANGE_OPERATOR':
      return{
        ...state,
        operator: action.value
      } 
     case 'CALCULATE' :
       return{
         ...state,
         result:calc(state.number1, state.number2, state.operator)
       }        
       case 'GENERATE_NUMBER' :
        return{
          ...state,
          number1:randomNumber()
        }   
     default:
      return state;
   }

}

export default calcReducer;