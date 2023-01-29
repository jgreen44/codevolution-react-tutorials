import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

import { IActionReducer, IStateReducer } from '../../types';
import { Loading } from '../Loading';

const initialState: IStateReducer = {
  loading: true,
  post: {},
  error: '',
};

const reducer = (state: IStateReducer, action: IActionReducer) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: action.payload as unknown as string,
      };
    default:
      return state;
  }
};

export const ReducerDataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR', payload: error });
      });
  }, []);
  return (
    <div>
      {state.loading ? <Loading /> : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};
