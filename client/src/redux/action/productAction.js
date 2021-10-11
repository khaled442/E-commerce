import axios from 'axios'
import { ALL_PRODUCT, ALL_PRODUCT_FAIL, ALL_PRODUCT_SUCCES, FILTER_PRODUCT, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_DELETE, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAIL, PRODUCT_DETAIL_FAIL,  PRODUCT_DETAIL_SUCCES, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS } from '../type/productType'



export const getProducts = (products)=> async(dispatch)=> {
    dispatch({
        type: ALL_PRODUCT
    })
    try {
        const res = await axios.get('/api/products',products)
        dispatch({
            type: ALL_PRODUCT_SUCCES,
            payload: res.data.products

        })
    } catch (error) {
dispatch({
    type:ALL_PRODUCT_FAIL,
    payload: error.response.data
})
    }
}

export const filterProduct =(categoryName)=> {
    return {
        type:FILTER_PRODUCT,
        payload:categoryName
    }
}
export const prodcutDetail = (id)=> async(dispatch)=> {
    dispatch({
        type: PRODUCT_DETAIL
    })
    try {
        const res = await axios.get(`/api/products/${id}`)
        dispatch({
            type: PRODUCT_DETAIL_SUCCES,
            payload: res.data
        })
    } catch (error) {
dispatch({
    type:PRODUCT_DETAIL_FAIL,
    payload: error.response.data
})
    }
}
export const updateProduct = (product)=> async(dispatch)=> {
    dispatch({
        type: PRODUCT_UPDATE_REQUEST,
        payload: product
    })
    try {
        const res = await axios.put(`/api/products/${product._id}`,product)
        dispatch({
            type:  PRODUCT_UPDATE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
dispatch({
    type: PRODUCT_UPDATE_FAIL,
    payload: error.response.data
})
    }
}
export const deleteProduct = (id)=> async(dispatch)=> {
    dispatch({
        type: PRODUCT_DELETE
    })
    try {
        const res = await axios.delete(`/api/products/${id}`)
        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
dispatch({
    type:PRODUCT_DELETE_FAIL,
    payload: error.response.data
})
    }
}
export const createProduct = () => async (dispatch) => {
    dispatch({ 
        type: PRODUCT_CREATE_REQUEST
     });

    try {
        const res = await axios.post('/api/products',{})
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: res.data.product,
      });
    } catch (error) {
      
      dispatch({
        type:PRODUCT_CREATE_FAIL,
        payload: error.response.data

         });
    }
  };