import Product from "../model/Product";
import { ProductsActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/ProductActionTypes";

interface IState{
    loading : boolean;
    products : Product[];
    error : string;
};

const initialState:IState = {
    loading : false,
    products : [],
    error : ""
};
const productReducer = (state=initialState,action:ProductsActionTypes):IState=>{
    switch(action.type){
        case PRODUCTS_LOADING:
        case PRODUCTS_LOADING_SUCCESS:
        case PRODUCTS_LOADING_FAIL:
            return{
                ...state,
                loading : action.loading,
                error : action.error,
                products : action.products
            }
            break;
        default:
            return state;
    }
};
export default productReducer;