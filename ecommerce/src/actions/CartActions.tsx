import axios from "axios";
import { Dispatch } from "react";
import { ADD_ITEM, CartActionTypes } from "../types/CartActionTypes";

const addCartItems = (id:any,qty:any)=>{
    return async (dispatch:Dispatch<CartActionTypes>)=>{
        try{
            const result = await axios.get(`http://localhost:8080/api/products/${id}`);
            const { data } = result;
            data["qty"] = qty;
            dispatch({
                type : ADD_ITEM,
                selectedItem : data,
                id:id
            })
        }catch(error){
            dispatch({
                type:ADD_ITEM,
                selectedItem:{
                    _id:"",
                    brand:"",
                    description:"",
                    image:"",
                    name:"",
                    countInStock:0,
                    price:0,
                    qty:0,
                    rating:0,
                },
                id:id
            })
        }
    }
};

export default addCartItems;