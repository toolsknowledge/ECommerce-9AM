import React, { Component } from "react";
import { match as Match } from "react-router-dom";
import { Location } from "history";

interface IState{}

interface IProps{
    match:Match<routeParams>;
    location:Location;
};

interface routeParams{
    id:any;
};


class CartScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                {this.props.match.params.id}
                <br></br>
                {this.props.location.search?(Number(this.props.location.search.split("=")[1])):1}
            </React.Fragment>
        )
    };
};

export default CartScreen;


