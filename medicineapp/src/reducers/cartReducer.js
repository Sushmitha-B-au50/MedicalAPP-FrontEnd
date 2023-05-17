import * as types from "../actions/actionType";
import { showInfoToastMessage } from "../components/toastMessages";

const initialState = {
    cart:[],
}



export const  cartReducer = (state = initialState,action) =>
{
    switch (action.type) {
      case types.ADD_ITEM:
        debugger;
        
           const itemIndex = state.cart.findIndex((item) => item.MedicineID === action.payload.MedicineID);
           if(itemIndex>=0)
           {
            state.cart[itemIndex].qty +=1;
            //showInfoToastMessage("increased the quantity of " + state.cart[itemIndex].ProductName);
           }
           else{
            const temp = {...action.payload,qty:1}
           // showInfoToastMessage("item addedto cart " + state.cart[itemIndex].ProductName);
                return{
                ...state,
                cart:[...state.cart,temp]
            }
        } 
           break;
     case types.DELETE_ITEM:
            const data = state.cart.filter((el) =>el.MedicineID !== action.payload) ;
            return{
                ...state,
                cart:data
            }
    case types.DELETE_ALLITEMS:
        debugger;
        return{
            ...state,
            cart:[],
        }
    case types.DECREASE_QTY:       
        const itemIndex_dec = state.cart.findIndex((item) => item.MedicineID === action.payload.MedicineID);
           if(state.cart[itemIndex_dec].qty>=1)
           {
            debugger;
             var cartItem = state.cart[itemIndex_dec].qty -=1;
             if(cartItem===0)
             {
                cartItem = state.cart[itemIndex_dec].qty = 1;
                showInfoToastMessage("quantity should be atlaest 1");
             }
             console.log([...state.cart,cartItem]);
             return{
                ...state,
                cart:[...state.cart]
            }
            }
          break;
        default:
            return state;
    }     

}
