
import * as types from "./actionType";



const addCart = (medicine) =>(
    {
        type:types.ADD_ITEM,
        payload:medicine,
    });


const deleteCart = (id) =>(
    {
        type:types.DELETE_ITEM,
        payload:id,
    });
    
const decreaseQty = (medicine) =>(
    {
        type:types.DECREASE_QTY,
        payload:medicine,
    });


export const addItemToCart = (medicine) => async dispatch =>{
        try{
            debugger;
            dispatch(addCart(medicine));
            console.log('dispactched')
           
         }
        catch(err){
                    return err;
                 }
    }

export const removeItemToCart = (id) => async dispatch =>{
    try{
        debugger;
        dispatch(deleteCart(id));      
        }
    catch(err){
                return err;
                }
}
  
export const decreaseCartQty = (medicine) => async dispatch =>{
    try{
        debugger;
        dispatch(decreaseQty(medicine));      
        }
    catch(err){
                return err;
                }
}
  
export const delAllItems = () =>(
    {
    
        type:types.DELETE_ALLITEMS,
      
    });