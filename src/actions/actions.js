import {ADD, REMOVE, REQ_SUCCESS, REQ_FAILED, REQ_DETAIL} from './types';
import {
  getDetailBooks
 } from '../api/services';
export const Add = (item) => (dispatch) => {
  dispatch({type: ADD, payload: item});
};

export const Remove = (item) => (dispatch) => {
  dispatch({type: REMOVE, payload: null});
};

export const GetBook = (keys) => async (dispatch) => {
  dispatch({ type: REQ_DETAIL });
  try {
    const response = await getDetailBooks(keys);
      if (response != null) {
        dispatch({ type: REQ_SUCCESS, payload: response.data[`${keys}`]});
      } else {
        dispatch({ type: REQ_FAILED, payload: response.status });
      }
    } catch (err) { alert(JSON.stringify(err))
      dispatch({ type: REQ_FAILED, payload: error.response.status });
  }
};
