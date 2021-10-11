import { LOGIN, LOGIN_FAIL, LOGIN_SUCCES, LOGOUT, REGISTER, REGISTER_FAIL, REGISTER_SUCCSS } from "../type/TypeAuth"
import axios from "axios";



export const register = (newUser) => async(dispatch)=>{
    dispatch({
        type: REGISTER
    })
    try {
        const res = await axios.post('/user/register', newUser)
        localStorage.setItem("token", res.data.token)
        dispatch({
            type: REGISTER_SUCCSS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type:REGISTER_FAIL,
            payload: error.response.data
        })
    }
}

export const login = (user) => async(dispatch) => {
    dispatch({
        type:LOGIN
    })
    try {
        const res = await axios.post('/user/login', user)
        localStorage.setItem("token", res.data.accesstoken)
        localStorage.setItem("isAdmin", (res.data.user.role === 1))

        dispatch({
            type:LOGIN_SUCCES,
            payload:{
                user:res.data.user,
                isAdmin: res.data.user.role === 1 ? true : false,
                token: res.data.accesstoken
            }
        })
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload: error.response.data
        })
    }
}

export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("isAdmin")
    return {
        type: LOGOUT
    }
}
