import React, { Component } from "react";
import { match as Match, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import getDetails from "../actions/DetailActions";


interface IState{}

interface IProps{
    match : Match<paramRoutes>;
    getDetilsById:any;
    res:any;
}

interface paramRoutes{
    id:any;
}


class ProductScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    componentDidMount(){
        this.props.getDetilsById(this.props.match.params.id);
    }

    render(){
        const { loading,product,error } = this.props.res;
        return(
            <React.Fragment>
                <NavLink to="/" className="back_screen">back to home</NavLink>
                <h1>{JSON.stringify(loading)}....{JSON.stringify(product)}.....{error}</h1>
            </React.Fragment>
        )
    }
};

const receive = (state:any)=>{
    return{
        res : state.details
    }
};


const send = (dispatch:any)=>{
    return{
        getDetilsById : (id:any)=>{ dispatch(getDetails(id)) } 
    }
};

export default connect(receive,send)(ProductScreen);

