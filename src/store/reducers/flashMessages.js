import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from "../actionTypes";
import shortid from 'shortid'

import findIndex from 'lodash/findIndex'
export default (state=[],action)=>{
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      console.log("cool chop")
      return [...state, { id: shortid.generate(), type:action.message.type, text: action.message.text} ]  
    case REMOVE_FLASH_MESSAGE:
      const index = findIndex(state, {id:action.id})
      if(index>=0){
        return [...state.slice(0,index), ...state.slice(index+1)]
      }
      return state
    default:
      return state;
  }
}