import React, { Component } from "react";
import { connect } from "react-redux";
import { SignIn } from "../actions/SigninActions";

interface IState{}
interface IProps{
    login_Fn:any;
    res:any;
}

class SigninScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    login = ()=>{
        this.props.login_Fn({"email":"hr@ashokit.in","password":"admin"});
    };

    render(){
        return(
            <React.Fragment>
                <button onClick={this.login}>Signin</button>
                <br></br><br></br>
                {this.props.res.user_details.image}
            </React.Fragment>
        )
    }
};

const receive = (state:any)=>{
    return{
        res : state.signin
    }
};

const send = (dispatch:any)=>{
    return{
        login_Fn : (obj:any)=>{ dispatch(SignIn(obj)) }
    }
};

export default connect(receive,send)(SigninScreen);




