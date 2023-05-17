import * as types from "./actionType";
import {API } from "../API";


const orderMedicines = (medicine) =>(
    {
        type:types.ADD_ORDER

    });

    export const placeOrder=(ord) => async dispatch =>
    {
        debugger;
         try{
            const response = await API.post('/orders/order',ord)
            dispatch(orderMedicines(response));
            return response;
         }
        catch(err){
                    return err;
                 }
    }