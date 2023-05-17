import * as types from "../actions/actionType"

const initialState = {
    user: null,
    email:null,
    token:null,
    loading:false,
    error:null,
}

export const  userReducer = (state = initialState,action) =>
{
    switch (action.type) {
        case types.LOGIN_START:
            return{
                ...state,
                loading:true,
            }
        case types.LOGIN_SUCCESS:
            
            return{
                ...state,
                loading:true,
                user:action.payload.user,
                email:action.payload.email,
                token:action.payload.token
               
            }
        case types.LOGIN_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            }
        case types.LOG_OUT:
            return{
                ...state,
                user:null,
            }
        default:
            return state;
    }     

}
