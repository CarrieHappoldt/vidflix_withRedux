// @flow
import { combineReducers } from 'redux'
import { SET_SEARCH_TERM } from './actions'; 

// single responsibility reducer
const searchTerm = (state = "", action: Action) =>{ 
  if (action.type === SET_SEARCH_TERM){
    return action.payload
  }
  return state;
}

const rootReducer = combineReducers({ searchTerm })

/*
// dispatch function
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type){
    case SET_SEARCH_TERM:
      return setSearchTerm(state,action);
    default:
      return state;
  }
};
*/

export default rootReducer