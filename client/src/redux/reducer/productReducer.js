import { ALL_PRODUCT, ALL_PRODUCT_FAIL, ALL_PRODUCT_SUCCES, PRODUCT_DELETE, PRODUCT_DELETE_SUCCESS,PRODUCT_DELETE_FAIL, PRODUCT_DETAIL, PRODUCT_DETAIL_FAIL,  PRODUCT_DETAIL_SUCCES, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAIL, FILTER_PRODUCT } from "../type/productType";

const initialState ={
    products:[],
    loading:false,
    categorySelected:"all"
}

export const productReducer = (state =initialState , {type,payload}) =>{
    switch (type) {
        case ALL_PRODUCT:
            return {...state, loading:true}
        case ALL_PRODUCT_SUCCES:
            return {...state,loading:false,products:payload }  
        case FILTER_PRODUCT:
          return{...state, loading:false, categorySelected:payload}
        case ALL_PRODUCT_FAIL:
            return{...state, loading:false, error:payload}
    
        default:return state
            
    }
}
export const productReducerDetail = (state =initialState , {type,payload}) =>{
    switch (type) {
        case PRODUCT_DETAIL:
            return {...state, loading:true}
        case PRODUCT_DETAIL_SUCCES:
            return {...state,loading:false,products:payload }    
        case PRODUCT_DETAIL_FAIL:
            return{...state, loading:false, error:payload}
      
        default:return state
            
    }
}
export const productUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_UPDATE_REQUEST:
        return {loading: true };
      case PRODUCT_UPDATE_SUCCESS:
        return { loading: false, success: true  };
      case PRODUCT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
     
      default:
        return state;
    }
  };

  export const productDeleteReducer = (state = {}, {type,payload}) => {
    switch (type) {
      case PRODUCT_DELETE:
        return { loading: true };
      case PRODUCT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case PRODUCT_DELETE_FAIL:
        return { loading: false, error: payload };
     
      default:
        return state;
    }
  };
  export const productCreateReducer = (state = {}, {type,payload}) => {
    switch (type) {
      case PRODUCT_CREATE_REQUEST:
        return { loading: true };
      case PRODUCT_CREATE_SUCCESS:
        return { loading: false, success: true, product: payload };
      case PRODUCT_CREATE_FAIL:
        return { loading: false, error:payload };
      
      default:
        return state;
    }
  };