import Product from "../model/Product";

export const ADD_ITEM:string = "ADD_ITEM";

export interface CartAsync{
    selectedItem:Product;
    id:any;
}


export interface CartAddItem extends CartAsync{
    type : typeof ADD_ITEM;
};

export type CartActionTypes = CartAddItem;
