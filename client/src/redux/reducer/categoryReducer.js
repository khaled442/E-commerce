import { ALL_CATEGORY, ALL_CATEGORY_FAIL, ALL_CATEGORY_SUCCES, CATEGORY_CREATE_FAIL, CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_SUCCESS, CATEGORY_DELETE, CATEGORY_DELETE_FAIL, CATEGORY_DELETE_SUCCESS, CATEGORY_UPDATE_FAIL, CATEGORY_UPDATE_REQUEST, CATEGORY_UPDATE_SUCCESS } from "../type/CategoryType"



const initialState ={
    categories:[],
    loading:false
}


export const categoryReducer = (state =initialState , {type,payload}) =>{
    switch (type) {
        case ALL_CATEGORY:
            return {...state,loading:true}
        case ALL_CATEGORY_SUCCES:
            return {...state,loading:false,categories:payload }    
        case ALL_CATEGORY_FAIL:
            return{ loading:false, error:payload}
    
        default:return state
            
    }
}

export const categoryCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CATEGORY_CREATE_REQUEST:
        return { loading: true };
      case CATEGORY_CREATE_SUCCESS:
        return { loading: false, success: true, };
      case CATEGORY_CREATE_FAIL:
        return { loading: false, error: action.payload };
     
      default:
        return state;
    }
  };

  export const categoryUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case CATEGORY_UPDATE_REQUEST:
        return {loading: true };
      case CATEGORY_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case CATEGORY_UPDATE_FAIL:
        return { loading: false, error: action.payload };
     
      default:
        return state;
    }
  };

  export const categoryDeleteReducer = (state = {}, {type,payload}) => {
    switch (type) {
      case CATEGORY_DELETE:
        return { loading: true };
      case CATEGORY_DELETE_SUCCESS:
        return { loading: false, success: true };
      case CATEGORY_DELETE_FAIL:
        return { loading: false, error: payload };
     
      default:
        return state;
    }
  };