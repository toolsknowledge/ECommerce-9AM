import { Signin } from "../model/Signin";
import { SigninActionTypes, SIGN_IN } from "../types/SigninActionTypes";

interface IState{
    user_details:Signin;
}

const initialState:IState={
    user_details:{_id:"",
                  isAdmin:false,
                  token:"",
                  image:"",
                  email:""}
}

export const SigninReducer = (state=initialState,action:SigninActionTypes):IState=>{
    switch(action.type){
        case SIGN_IN:
            return{
                ...state,
                user_details : action.user_details
            }
        default:
            return state;
    }
};
