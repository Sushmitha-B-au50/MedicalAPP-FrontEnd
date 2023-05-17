import * as types from "../actions/actionType"

const initialState = {
    medicines:[],
    medicine:[],
    loading:true,
    error:null,
}

export const  medReducer = (state = initialState,action) =>
{
    switch (action.type) {
      case types.GET_MEDICINE:
        return{
            ...state,
            loading:false,
            medicines:action.payload,
        }
        case types.ADD_MED:
            return{
                ...state,
                loading:false,
                medicine:action.payload,
            }
        case types.DEL_MED:
            return{
                ...state,
                loading:false,
                medicine:action.payload,
            }
        default:
            return state;
    }     

}
