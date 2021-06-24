import React, { Component } from "react";
import { connect } from "react-redux";
import { SignIn } from "../actions/SigninActions";

interface IState{}
interface IProps{
    login_Fn:any;
    res:any;
}

class SigninScreen extends Component<IProps,IState>{
    
    u_email = React.createRef<HTMLInputElement>();
    u_pwd = React.createRef<HTMLInputElement>();


    constructor(props:IProps){
        super(props);
    }

    login = (e:any)=>{
        e.preventDefault();
        this.props.login_Fn({"email":this.u_email.current?.value,"password":this.u_pwd.current?.value});
    };

    render(){
        return(
            <React.Fragment>
                <div className="row1">
                    <form  className="form" onSubmit={this.login}>
                        <div>
                            <h1>Sign In</h1>
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type="email" name="email" ref={this.u_email} required />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" ref={this.u_pwd} required />
                        </div>
                        <div> 
                            <label><input type="checkbox" value="isAdmin"/> is Admin</label>
                        </div>
                        <div>
                            <label></label>
                            <button type="submit" className="btn-warning">Sign In</button>
                        </div>
                        <div>
                            <label></label>
                            <div>New Customer<a style={{color: "blue"}}>Create New Account</a></div>
                        </div>
                    </form>
                </div>
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




