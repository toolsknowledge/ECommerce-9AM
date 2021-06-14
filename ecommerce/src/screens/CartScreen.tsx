import React, { Component } from "react";
import { match as Match } from "react-router-dom";
import { Location } from "history";
import { connect } from "react-redux";
import addCartItem from "../actions/CartActions";
import { deleteCartItem } from "../actions/CartActions";

interface IState{}

interface IProps{
    match:Match<routeParams>;
    location:Location;
    res:any;
    getAddItemResult:any;
    removeItemFromCart:any;
};

interface routeParams{
    id:any;
};


class CartScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };

    componentDidMount(){

        //this.props.location.search?(Number(this.props.location.search.split("=")[1])):1

        this.props.getAddItemResult(this.props.match.params.id,
                                     this.props.location.search?(Number(this.props.location.search.split("=")[1])):1);
    }


    deleteItem = (id:any)=>{
         this.props.removeItemFromCart(id);
    };


    render(){
        const {finalArray} = this.props.res;
        return(
            <React.Fragment>
                <div className="row top">
                   {finalArray.map((element:any,index:number)=>(
                       <div key={index}>
                           <img src={element.image} className="small_img"></img> 
                           <button onClick={()=>this.deleteItem(element._id)}>Delete</button>
                       </div>
                   ))} 
                </div>
                {/* {JSON.stringify(finalArray)} */}
            </React.Fragment>
        )
    };
};

const receive = (state:any)=>{
    return{
        res : state.cart
    }
};


const send = (dispatch:any)=>{
    return{
        getAddItemResult : (id:string,qty:number)=>{ dispatch(addCartItem(id,qty)) },
        removeItemFromCart : (id:any)=>{ dispatch(deleteCartItem(id)) }        
    }
};


export default connect(receive,send)(CartScreen);
