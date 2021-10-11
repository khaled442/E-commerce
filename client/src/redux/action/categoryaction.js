import axios from "axios"
import { ALL_CATEGORY, ALL_CATEGORY_FAIL, ALL_CATEGORY_SUCCES, CATEGORY_CREATE_FAIL, CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_SUCCESS, CATEGORY_DELETE, CATEGORY_DELETE_FAIL, CATEGORY_DELETE_SUCCESS } from "../type/CategoryType"





export const getCategories = (categories)=> async(dispatch)=> {
    dispatch({
        type: ALL_CATEGORY
    })
    try {
        const res = await axios.get('/api/category',categories)
        dispatch({
            type: ALL_CATEGORY_SUCCES,
            payload: res.data
        })
    } catch (error) {
dispatch({
    type:ALL_CATEGORY_FAIL,
    payload: error.response.data
})
    }
}

export const createCategory = ({name:category}) => async (dispatch) => {
    dispatch({ 
        type: CATEGORY_CREATE_REQUEST
     });

    try {
        const res = await axios.post('/api/category',{name:category})
      dispatch({
        type: CATEGORY_CREATE_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      
      dispatch({
        type:CATEGORY_CREATE_FAIL,
        payload: error.response.data

         });
    }
  };

  export const deleteCategory = (id)=> async(dispatch)=> {
        dispatch({
            type:CATEGORY_DELETE
        })
    try {
        const res = await axios.delete(`/api/category/${id}`)
        dispatch({
            type: CATEGORY_DELETE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
dispatch({
    type:CATEGORY_DELETE_FAIL,
    payload: error.response.data
})
    }
}