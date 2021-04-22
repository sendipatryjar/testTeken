import {
    ADD,
    REMOVE,
    REQ_SUCCESS, 
    REQ_DETAIL,
    REQ_FAILED,
  } from './types';
  import INITIAL_STATE from './initial-state';
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD:
        return { ...state, bookList: action.payload };
      case REMOVE:
        return { ...state, bookList: null };
      case REQ_SUCCESS:
        return { ...state, detailBook: action.payload, loading: false };
      case REQ_DETAIL:
        return { ...state, detailBook: null, loading: true };
      case REQ_FAILED:
          return { ...state, detailBook: null, loading: false };
      default:
        return state;
    }
  };
  