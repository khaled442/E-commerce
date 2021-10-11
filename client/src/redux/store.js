import reducer from "./reducer/reducerAuth";
import {createStore,compose,applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { productCreateReducer, productDeleteReducer, productReducer, productReducerDetail, productUpdateReducer } from "./reducer/productReducer";
import { cartProductReducer } from "./reducer/cartReducer";
import { categoryCreateReducer, categoryDeleteReducer, categoryReducer } from "./reducer/categoryReducer";


 const devtool=  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

 const routReducer = combineReducers({
     auth: reducer,
     products: productReducer,
     productDetail: productReducerDetail,
     updateProduct:productUpdateReducer,
     deleteProduct: productDeleteReducer,
     productCreate:productCreateReducer,
     cartProduct:cartProductReducer,
     categoryProduct:categoryReducer,
     categoryCreate:categoryCreateReducer,
     deleteCategory:categoryDeleteReducer
 })


const store = createStore(routReducer, compose(applyMiddleware(thunk), devtool))


export default store