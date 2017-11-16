// @flow
import { combineReducers } from 'redux'
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions'; 

// single responsibility reducer
const searchTerm = (state = "", action: Action) =>{ 
  if (action.type === SET_SEARCH_TERM){ // type refinement
    return action.payload
  }
  return state;
}

const apiData = (state = {}, action: Action) => {
  if( action.type === ADD_API_DATA){
    return Object.assign({}, state, { [action.payload.imdbID] : action.payload} 
    )}
  return state;
}

const rootReducer = combineReducers({ searchTerm, apiData });

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

export default rootReducer;