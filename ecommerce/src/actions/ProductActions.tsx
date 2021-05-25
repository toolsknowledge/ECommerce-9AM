import axios from "axios";
import { Dispatch } from "redux";
import { ProductsActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/ProductActionTypes";
const getProducts = ()=>{
    return async (dispath:Dispatch<ProductsActionTypes>)=>{
         dispath({
             type : PRODUCTS_LOADING,
             error : "",
             loading:false,
             products:[]
         })
         try{
            const res = await axios.get("http://localhost:8080/api/products");
            const { data } = res;
            dispath({
                type : PRODUCTS_LOADING_SUCCESS,
                error : "",
                products : data,
                loading : true
            })
         }catch(err){
             dispath({
                 type:PRODUCTS_LOADING_FAIL,
                 error : err.message,
                 products : [],
                 loading : true
             })
         }
         
    };
};
export default getProducts;