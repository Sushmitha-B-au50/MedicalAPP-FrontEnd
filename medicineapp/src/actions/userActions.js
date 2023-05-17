import * as types from "./actionType";
import {API } from "../API";



const loginStart = () =>(
{
    type:types.LOGIN_START,
});

const loginSuccess = (token) =>(
    {
        type:types.LOGIN_SUCCESS,
        payload:token,
    });

const loginFail = (error) =>(
    {
        type:types.LOGIN_FAIL,
        payload:error,
    });

const signupSuccess = (token) =>(
    {
        type:types.SIGNUP_SUCCESS,
        payload:token,
    });

const signupFail = (error) =>(
    {
        type:types.SIGNUP_FAIL,
        payload:error,
    });

 

export const signup=({name,email,password}) => async dispatch =>
{
     try{
        const response = await API.post('/users/signup',{name,email,password});
        dispatch(signupSuccess(response.data));
       
        //alert(response);
        return response;
     }
    catch(err){
            
            dispatch(signupFail(err.data));
        
                //alert(err);
                return err;
             }
            }

export const login=({email,password}) => async dispatch =>
{
        dispatch(loginStart());
          try{
            debugger;
               const res = await API.post('/users/login',{email,password})
                dispatch(loginSuccess(res.data));               
                return res;
            }
            catch(err)
            {
                dispatch(loginFail(err.data));
                return err;
            }
       
}


export const logout = () =>(
    {
    
        type:types.LOG_OUT,
      
    });
