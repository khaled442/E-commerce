import { ADD_CART, REMOVE_CART } from "../type/cartType"




const initialState ={
    cartItem:[]
}

export const cartProductReducer =(state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            const item = action.payload

            const existItem = state.cartItem.find((x) => x.product === item.product)
            if(existItem){
                return {
                    ...state,
                    cartItem: state.cartItem.map((x)=> x.product === existItem.product?item:x)
                }
            }else {
                return{
                    ...state,
                    cartItem: [...state.cartItem,item]
                }
            }
        case REMOVE_CART:
            return{
                ...state,
                cartItem: state.cartItem.filter((x)=> x.product !== action.payload)
            }
        default:
            return state
    }
}