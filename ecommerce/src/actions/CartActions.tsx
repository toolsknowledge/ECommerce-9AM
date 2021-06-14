import axios from "axios";
import { Dispatch } from "redux";
import { ADD_ITEM, CartActionTypes, DELETE_ITEM } from "../types/CartActionTypes";


export const deleteCartItem = (id:any)=>{
    return (dispatch:Dispatch<CartActionTypes>, getState:()=>any)=>{
        dispatch({
            type : DELETE_ITEM,
            id:id,
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
        });
        window.localStorage.setItem("cart", JSON.stringify(getState().cart.finalArray) );
    }
};





const addCartItem = (id:string,qty:number)=>{
    return async (dispatch:Dispatch<CartActionTypes>, getState:()=>any)=>{
        try{
            const res = await axios.get(`http://localhost:8080/api/products/${id}`);
            const { data } = res;
            data["qty"] = qty;
            dispatch({
                type : ADD_ITEM,
                selectedItem:data,
                id:""
            })

            //access the final result (state) and store into local storage
            window.localStorage.setItem("cart", JSON.stringify(getState().cart.finalArray) );

        }catch(err){
            dispatch({
                id:"",
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