import { Signin } from "../model/Signin";

export const SIGN_IN:string = "SIGN_IN";

export interface SigninAsync{
    user_details:Signin
}

export interface SignIn extends SigninAsync{
    type : typeof SIGN_IN;
}

export type SigninActionTypes = SignIn;

