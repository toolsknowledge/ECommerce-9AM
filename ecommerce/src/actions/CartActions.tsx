import axios from "axios";
import { Dispatch } from "redux";
import { ADD_ITEM, CartActionTypes } from "../types/CartActionTypes";

const addCartItem = (id:string,qty:number)=>{
    return async (dispatch:Dispatch<CartActionTypes>, getState:()=>any)=>{
        try{
            const res = await axios.get(`http://localhost:8080/api/products/${id}`);
            const { data } = res;
            data["qty"] = qty;
            dispatch({
                type : ADD_ITEM,
                selectedItem:data
            })

            //access the final result (state) and store into local storage


        }catch(err){
            dispatch({
                type:ADD_ITEM,
                selectedItem:{
                    _id:"",
                    brand:"",
                    countInStock:0,
                    description:"",
                    image:"",
                    name:"",
                    numReviews:0,
                    price:0,
                    qty:0,
                    rating:0
                }
            })
        }
    }
};
export default addCartItem;