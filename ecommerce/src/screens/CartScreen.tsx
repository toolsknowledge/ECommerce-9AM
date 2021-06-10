import React, { Component } from "react";
import { match as Match } from "react-router-dom";
import { Location } from "history";
import { connect } from "react-redux";
import addCartItem from "../actions/CartActions";


interface IState{}

interface IProps{
    match:Match<routeParams>;
    location:Location;
    res:any;
    getAddItemResult:any;
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


    render(){
        return(
            <React.Fragment>
                {JSON.stringify(this.props.res)}
                {/* {this.props.match.params.id}
                <br></br>
                {this.props.location.search?(Number(this.props.location.search.split("=")[1])):1} */}
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
        getAddItemResult : (id:string,qty:number)=>{ dispatch(addCartItem(id,qty)) }
    }
};


export default connect(receive,send)(CartScreen);
