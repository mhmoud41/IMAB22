import axios from 'axios';
import {setAlert} from './alert'

import {
    GET_PRODUCTS,
    PRODUCT_ERROR,
    ADD_PRODUCT,
    GET_PRODUCT,
    CLEAR_PRODUCT,
    DELETE_PRODUCT
  } from './types';
  
  export const getProducts = () => async dispatch => {
    dispatch({ type: CLEAR_PRODUCT });
    try {
      const res = await axios.get('/api/products');
      
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  export const addProduct = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const res = await axios.post('/api/products', formData, config);
  
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      });
  
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  
  export const getProduct = id => async dispatch => {
    try {
      const res = await axios.get(`/api/products/${id}`);
  
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  export const deleteProduct = id => async dispatch => {
    try {
      await axios.delete(`/api/products/${id}`);
  
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
  
      dispatch(setAlert('Product Removed', 'success'));
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  