import axios from 'axios'
import { ADD_CART, REMOVE_CART } from '../type/cartType'




export const addToCart = (id,qty) =>async(dispatch)=> {
    const res = await axios.get(`/api/products/${id}`)
    dispatch({
        type: ADD_CART,
        payload:{
            product: res.data._id,
            title: res.data.title,
            description:res.data.description,
            images:res.data.images,
            price: res.data.price,
            sold: res.data.sold,
            qty
        }
    })
}

export const removeCart =(id)=> (dispatch)=> {
    dispatch({
        type:REMOVE_CART,
        payload:id
    })
}