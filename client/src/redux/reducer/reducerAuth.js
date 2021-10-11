import { LOGIN, LOGIN_FAIL, LOGIN_SUCCES, LOGOUT, REGISTER, REGISTER_FAIL, REGISTER_SUCCSS } from "../type/TypeAuth";



const initialState ={
    users: null,
    errors:null,
    loading:false,
    token:null,
    isAdmin: null
}


const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case REGISTER:
      case LOGIN:
        return { ...state,loading: true };
      case REGISTER_SUCCSS:
        return {...state, loading: false, isAuth: true, users: payload };
      case REGISTER_FAIL:
        return {...state, loading: false, errors:payload };
      case LOGIN_SUCCES:
        return {...state, loading:false,isAdmin: payload.isAdmin, token:payload.token, users: payload.user}
      case LOGIN_FAIL:
        return {...state, loading:false, errors:payload}
      case LOGOUT:
        return{ ...state, loading:false, isAdmin:false, token:null,users:null}
      default: return state;
    }
  }

  export default reducer