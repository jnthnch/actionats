import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

export default (state = { message: null }, action) => {
  switch (action.type) {
    case ADD_ERROR:
      var newState = { ...state, message: action.error };
      return newState
    case REMOVE_ERROR:
      var newState = { ...state };
      newState.message = null;
      return newState
    default:
      return state;
  }
}