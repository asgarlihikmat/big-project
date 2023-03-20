import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer';
import cartReducer from './cartReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer
}) 

export default rootReducer;