import { Dispatch } from "redux";
import { SigninActionTypes, SIGN_IN } from "../types/SigninActionTypes";
import axios from "axios";

export const SignIn = (login_details:any)=>{
    return async (dispatch:Dispatch<SigninActionTypes>)=>{
        try{
            const res = await axios.post(`http://localhost:8080/api/users/signin`,login_details);
            const { data } = res;
            dispatch({
                type :  SIGN_IN,
                user_details : data
            })
        }catch(err){
            console.log(err);
        }
    }
};
