import * as types from "../actions/actionType"

const initialState = {
    order:[],
    loading:true,
    error:null,
}

export const  orderReducer = (state = initialState,action) =>
{
    switch (action.type) {
        case types.ADD_ORDER:
            return{
                ...state,
                loading:false,
                order:action.payload,
            }
        default:
            return state;
    }     

}
