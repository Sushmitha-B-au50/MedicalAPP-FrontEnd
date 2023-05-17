import * as types from "./actionType";
import {API } from "../API";


const getMedicines = (medicines) =>(
    {
        type:types.GET_MEDICINE,
        payload:medicines,
    });


const AddMedicine = (medicine) =>(
    {
        type:types.ADD_MED

    });
const UpdateMedicine = (medicine) =>(
    {
        type:types.ADD_MED

    });
const DeleteMedicine = () =>(
    {
        type:types.DEL_MED
    });
    

export const loadMedicines = () => {
    return async (dispatch) => {
            debugger;
            const response = await API.get('/medicines/');
            dispatch(getMedicines(response.data));
    }
  }

export const addmedicine=(med) => async dispatch =>
{
    debugger;
   //alert(prd.ProductID);
     try{
        const response = await API.post('/medicines/addMed',med)
        dispatch(AddMedicine(response));
        return response;
     }
    catch(err){
                return err;
             }
}


export const updateMedicine=(id,medicine) => async dispatch =>
{
    debugger;
   //alert(prd.ProductID);
     try{
        const response = await API.put(`/medicines/${id}`,medicine);
        dispatch(UpdateMedicine());
        //console.log(response.data);
        return response;
     }
    catch(err){
                return err;
             }
}


export const deleteMedicine=(id) => async dispatch =>
{
    debugger;
   //alert(prd.ProductID);
     try{
        const response = await API.delete(`/medicines/${id}`);
        dispatch(DeleteMedicine());
        return response;
     }
    catch(err){
                return err;
             }
}

